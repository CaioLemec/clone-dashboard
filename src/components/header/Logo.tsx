import { Text } from '@chakra-ui/react';

export function Logo() {
    return (
        <Text
            color="gray.light"
            alignSelf="center"
            fontSize="3xl"
            fontWeight="bold"
            letterSpacing="tight"
        >
            LIVE
            <Text as="span" ml="1" color="green.primary">.</Text>
        </Text>
    );
}