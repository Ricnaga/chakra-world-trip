import { Flex, Image } from "@chakra-ui/react";

export function Header() {
    return (
        <Flex align='center' justify='center' h='10vh'>
            <Image src="logo.png" w={['8rem', '10rem']} alt="world trip" />
        </Flex>
    )
}