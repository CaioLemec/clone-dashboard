import { Flex, HStack, Button, useMediaQuery } from "@chakra-ui/react"
import { ActiveLink } from "../ActiveLink";

export function Menu() {
    return (
        <Flex justifyContent="center">
            <HStack ml="8">
                <ActiveLink href="/">
                    <Button
                        type="submit"
                        size="sm"
                        fontSize="12"
                        bg="transparent"
                        _hover={{ color: "gray.light" }}
                        _active={{
                            transform: "scale(0.90)",
                        }}
                        _focus={{
                            border: "none",
                        }}
                    >Home</Button>
                </ActiveLink>
                <ActiveLink href="/monitoring">
                    <Button
                        type="submit"
                        size="sm"
                        fontSize="12"
                        bg="transparent"
                        _hover={{ color: "gray.light" }}
                        _active={{
                            transform: "scale(0.90)",
                        }}
                        _focus={{
                            border: "none",
                        }}
                    >Monitoring</Button>
                </ActiveLink>
                <ActiveLink href="/dashboard">
                    <Button
                        type="submit"
                        size="sm"
                        fontSize="12"
                        bg="transparent"
                        _hover={{ color: "gray.light" }}
                        _active={{
                            transform: "scale(0.90)",
                        }}
                        _focus={{
                            border: "none",
                        }}
                    >Dashboard</Button>
                </ActiveLink>
            </HStack>
        </Flex>
    );
}