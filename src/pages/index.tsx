import { Flex, Image, Text } from "@chakra-ui/react";
import Header from "../components/header";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" flexDirection="column">
      <Header />
      <Flex w="100%" h="100%" justifyContent="center" alignItems="center">
        <Flex w="50%" h="100%" alignItems="center" justifyContent="center">
          <Text fontSize="86" color="gray.dark" textAlign="center" fontWeight="bold" letterSpacing="tight">This page is under construction.</Text>
        </Flex>
        <Flex w="50%" h="100%" alignItems="center" justifyContent="center">
          <Image src="images/crane.svg" alt="LogoType" ml="2" mr="2" w={600} />
        </Flex>
      </Flex>
    </Flex>
  )
}



