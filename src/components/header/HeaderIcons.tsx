import { FaBell, FaWindowMinimize, FaRegUserCircle } from 'react-icons/fa'
import { Flex, Icon } from "@chakra-ui/react";

export function HeaderIcons() {
    return (
        <Flex mr="3">
            <Icon as={FaBell} fontSize="20" ml="3" alignSelf="center" mr="3" color="#565d75" />
            <Icon as={FaWindowMinimize} fontSize="20" ml="3" alignSelf="center" mr="3" color="#565d75" />
            <Icon as={FaRegUserCircle} fontSize="20" ml="3" alignSelf="center" mr="3" color="#565d75" />
        </Flex>
    );
}