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

export function CourseStatsChart({ courses }: coursesProps) {
  const [courseCompletedValue, setCourseCompletedValue] = useState([]);
  const [courseInProgressValue, setCourseInProgressValue] = useState([]);
  const [courseNotSeenValue, setCourseNotSeenValue] = useState([]);
  const [courseChartName, setCourseChartName] = useState([]);

  const totalUsers = 256;

  useEffect(() => {
    courses.map(course => {
      setCourseCompletedValue(courseCompletedValue => [...courseCompletedValue, course.completed]);
      setCourseInProgressValue(courseInProgressValue => [...courseInProgressValue, course.inProgress]);
      setCourseNotSeenValue(courseNotSeenValue => [...courseNotSeenValue, (totalUsers - course.views)]);
      setCourseChartName(courseChartName => [...courseChartName, course.title]);
    }
    )
  }, [])

  const series = [{
    name: 'Not Seen',
    data: courseNotSeenValue,
  }, {
    name: 'In Progress',
    data: courseInProgressValue
  }, {
    name: 'Completed',
    data: courseCompletedValue
  }]

  const options = {
    chart: {
      colors: ['#2DBEB1'],
      type: 'bar',
      height: 350,
      stacked: true,
      stackType: '100%',
      foreColor: 'gray.dark',
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    stroke: {
      width: 1,
      colors: ['transparent']
    },
    title: {
      text: 'Course Stats',
      align: 'topCenter',
    },
    xaxis: {
      categories: courseChartName,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "K"
        }
      }
    },
    fill: {
      opacity: 1,
    },

    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      align: 'center',
    },

    theme: {
      monochrome: {
        enabled: true,
        color: '#2DBEB1',
        shadeTo: 'light',
        shadeIntensity: 0.65
      }
    }
  };

  return (
    <Chart options={options} series={series} type="bar" height={350} />
  )
}