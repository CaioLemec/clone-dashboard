import { HStack, Select, Button, Icon, useBreakpointValue } from '@chakra-ui/react';
import { IoIosArrowBack, IoIosArrowForward, IoIosOptions } from 'react-icons/io'
import { FaFilter } from 'react-icons/fa'

export function SelectInput() {
  const isMobileVersion = useBreakpointValue({
    base: true,
    lg: false,
  })
  return (
    <HStack display="flex" justifyContent="center" mr="4">
      {!isMobileVersion ? (
        <>
          <Button w="8" h="8" bg="gray.medium">
            <Icon as={IoIosArrowBack} fontSize="15" color="purple.primary" />
          </Button>
          <Select color="purple.primary" w="64" h="8" bg="gray.medium" variant="Choose " placeholder="choose period" fontSize="13" fontWeight="bold">
            <option value="option1">yesterday</option>
            <option value="option2">Last week</option>
            <option value="option3">Last month</option>
            <option value="option4">Last year</option>
          </Select>
          <Button w="8" h="8" bg="gray.medium">
            <Icon as={IoIosArrowForward} fontSize="15" color="purple.primary" />
          </Button>
          <Button color="purple.primary" fontSize="13" w="24" h="8" bg="gray.medium">
            <Icon as={FaFilter} fontSize="10" color="purple.primary" mr="2" />
            Filters
          </Button>
          <Button color="purple.primary" fontSize="13" w="24" h="8" bg="gray.medium">
            <Icon as={IoIosOptions} fontSize="15" color="purple.primary" mr="2" />
            Options
          </Button>
        </>
      ) : (
        <Select color="purple.primary" w="64" h="8" bg="gray.medium" variant="Choose " placeholder="choose period" fontSize="13" fontWeight="bold">
          <option value="option1">yesterday</option>
          <option value="option2">Last week</option>
          <option value="option3">Last month</option>
          <option value="option4">Last year</option>
        </Select>
      )}
    </HStack>
  );
}




