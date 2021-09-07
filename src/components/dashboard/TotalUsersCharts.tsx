import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
})

export function TotalUsersCharts() {

    const series = [
        { name: 'Total Users', data: [30, 56, 103, 180, 204, 219, 256] }
    ]

    const options = {
        colors: ['#2DBEB1'],
        chart: {
            fontFamily: 'Roboto, Arial, sans-serif',
            toolbar: {
                show: true,
            },
            zoom: {
                enabled: false,
            },
            foreColor: 'gray.dark',
        },
        title: {
            text: 'Users',
            align: 'topCenter',
        },
        grid: {
            show: true,
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth'
        },
        tooltip: {
            enabled: true,
        },
        xaxis: {
            type: 'datetime',
            categories: [
                '2021-09-01',
                '2021-09-02',
                '2021-09-03',
                '2021-09-04',
                '2021-09-05',
                '2021-09-06',
                '2021-09-07',
            ],
        },
        fill: {
            colors: '#2DBEB1',
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: "vertical",
                inverseColors: false,
                opacityFrom: 0.7,
                opacityTo: 0.3,
            },
        },
    };

    return (
        <Chart options={options} series={series} type="area" height={350} />
    )
}