import { Flex, Text } from "@chakra-ui/react";

interface CountriesProps{
    title:string;
    content:string;
}

export default function Countries({title, content}:CountriesProps) {
    return (
        <Flex flexDir="column">
            <Text textAlign="center" fontWeight="600" fontSize="3rem" color="highlight.full">{title}</Text>
            <Text fontWeight="600" fontSize="1.4rem" color="dark.Headings and Text">{content}</Text>
        </Flex>
    )
}