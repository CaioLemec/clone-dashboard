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

export function CourseRatingChart({ courses }: coursesProps) {
  const [currentCourseRating, setCurrentCourseRating] = useState([]);
  const [courseChartName, setCourseChartName] = useState([]);

  useEffect(() => {
    courses.map(course => {
      setCurrentCourseRating(currentCourseRating => [...currentCourseRating, course.rating]);
      setCourseChartName(courseChartName => [...courseChartName, course.title]);
    })
  }, [])

  const higherRating = Math.max(...currentCourseRating)
  console.log(higherRating)

  const series = currentCourseRating;

  const options = {
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
      text: 'Courses Rating',
      align: 'topCenter',
    },
    labels: courseChartName,
    fill: {
      opacity: 1
    },
    stroke: {
      width: 1,
      colors: 'transparent'
    },
    yaxis: {
      show: false
    },
    legend: {
      show: false,
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0
        },
        spokes: {
          strokeWidth: 10
        },
      }
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
    <Chart options={options} series={series} type="polarArea" height={350} />
  )
}