import { Flex, Icon, Image, Link } from "@chakra-ui/react";
import { ElementType } from "react";

interface HeaderProps {
    icon?: ElementType;
}

export function Header({ icon }: HeaderProps) {
    return (
        <Flex align='center' justify='center' h='10vh'>
            {icon &&  <Link href="/">
                <Icon as={icon} pos="absolute" left={["1rem","4rem"]} top="1.6rem" fontSize="1.2rem" />
                </Link> }
            <Image src="logo.png" w={['6rem', '10rem']} alt="world trip" />
        </Flex>
    )
}