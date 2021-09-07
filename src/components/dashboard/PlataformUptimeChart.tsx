import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

export function PlataformUptimeChart() {

  const series = [98.2]

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
      text: 'Plataform Uptime',
      align: 'topCenter',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        }
      },
    },
    labels: ['Uptime'],
  };

  return (
    <Chart options={options} series={series} type="radialBar" height={350} />
  )
}