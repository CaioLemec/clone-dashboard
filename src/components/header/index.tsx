import { Flex, Text, Image, Icon, Spacer, useBreakpointValue } from "@chakra-ui/react";
import { IoIosArrowDown } from 'react-icons/io'
import React from "react";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { HeaderIcons } from "./HeaderIcons";
import { SelectInput } from "./SelectInput";

export default function Header() {
  const isMobileVersion = useBreakpointValue({
    base: true,
    lg: false,
  })
  return (
    <Flex w="100%" h="10vh" bg="white" flexDirection="column">

      <Flex h="50%" bg="purple.primary">
        <Flex w="36" bg="#565D75">
          <Image src="images/logoType.svg" alt="LogoType" ml="2" mr="2" />
          <Logo />
        </Flex>
        <Menu />
        {!isMobileVersion && (
          <>
            <Spacer />
            <HeaderIcons />
          </>
        )}
      </Flex>

      <Flex h="50%" bg="gray.light">
        <Text fontSize={["sm", "md", "lg"]} ml="3" fontWeight="bold" color="purple.primary" alignSelf="center">IU COURSE OVERVIEW
          <Icon as={IoIosArrowDown} mb="0.5" ml="1" fontSize="15" color="green.primary" />
        </Text>
        <Spacer />
        <SelectInput />
      </Flex>

    </Flex>
  )
}
