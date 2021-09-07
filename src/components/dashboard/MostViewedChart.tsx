import React, { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

interface course {
  id: number,
  title: string,
  views: number,
  rating: number,
  completed: number,
  inProgress: number,
}

interface coursesProps {
  courses: course[];
}

export function MostViewedChart({ courses }: coursesProps) {
  const [chartSeries, setChartSeries] = useState([]);
  const [courseChartName, setCourseChartName] = useState([]);

  useEffect(() => {
    courses.map(course => {
      setChartSeries(chartSeries => [...chartSeries, course.views]);
      setCourseChartName(courseChartName => [...courseChartName, course.title]);
    }
    )
  }, [])

  const series = [
    { name: 'Most Viewed', data: chartSeries }
  ];

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
      text: 'Most Viewed',
      align: 'topCenter',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        endingShape: 'rounded',
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: courseChartName,
    },
    yaxis: {
      title: {
        text: 'Views',
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      style: {
        fontSize: '15px',
        fontFamily: 'Roboto',
      },
      y: {
        formatter: function (val) {
          return val + " Views"
        },
      }
    }
  };

  return (
    <Chart options={options} series={series} type="bar" height={350} />
  )
}