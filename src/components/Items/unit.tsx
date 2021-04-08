import { Flex, Image, Text } from "@chakra-ui/react";

interface UnitProps {
    children: string;
    imgSrc: string;
}

export function Unit({ imgSrc, children }: UnitProps) {
    return (
        <Flex align="center" flexDir="column">
            <Image src={`items/${imgSrc}.svg`} alt={imgSrc} mb="1.4rem" />
            <Text color="dark.Headings and Text" fontWeight="600" fontSize="1.4rem">{children}</Text>
        </Flex>
    )
}