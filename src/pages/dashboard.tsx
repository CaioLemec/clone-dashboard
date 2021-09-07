import { SimpleGrid, Flex } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import React from "react";
import { CourseRatingChart } from "../components/dashboard/CourseRatingChart";
import { CourseStatsChart } from "../components/dashboard/CourseStatsChart";
import { MostCompletedChart } from "../components/dashboard/MostCompletedChart";
import { MostViewedChart } from "../components/dashboard/MostViewedChart";
import { PlataformUptimeChart } from "../components/dashboard/PlataformUptimeChart";
import { TotalUsersCharts } from "../components/dashboard/TotalUsersCharts";
import Header from "../components/header";
import { api } from "../services/api";

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

export default function Dashboard({ courses }: coursesProps) {
  return (
    <>
      <Flex w="100%" h="100%" flexDirection="column" alignItems="center" justifyContent="center">
        <Header />
        <Flex flexDirection="row" w="100%" h="90%" mt="4" mb="4">
          <SimpleGrid flex="1" gap="4" minChildWidth="360px" align="flex-start">

            <Flex justifyContent="center" h="100%" alignItems="center" p="8" bg="gray.light" borderRadius={4} pb="4">
              <MostViewedChart courses={courses} />
            </Flex>

            <Flex justifyContent="center" h="100%" alignItems="center" p="8" bg="gray.light" borderRadius={4} pb="4">
              <PlataformUptimeChart />
            </Flex>

            <Flex justifyContent="center" h="100%" alignItems="center" p="8" bg="gray.light" borderRadius={4} pb="4">
              <CourseRatingChart courses={courses} />
            </Flex>

            <Flex justifyContent="center" h="100%" alignItems="center" p="8" bg="gray.light" borderRadius={4} pb="4">
              <CourseStatsChart courses={courses} />
            </Flex>

            <Flex justifyContent="center" h="100%" alignItems="center" p="8" bg="gray.light" borderRadius={4} pb="4">
              <TotalUsersCharts />
            </Flex>

            <Flex justifyContent="center" h="100%" alignItems="center" p="8" bg="gray.light" borderRadius={4} pb="4">
              <MostCompletedChart courses={courses} />
            </Flex>

          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('courses');
  const courses = response.data;

  return {
    props: {
      courses
    }
  }
}

// yarn json-server --watch db.json --port 3001