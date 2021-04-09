import { Flex, Text } from "@chakra-ui/react";

interface CountriesProps {
    title: string;
    content: string;
}

export default function Countries({ title, content }: CountriesProps) {
    return (
        <Flex flexDir="column">
            <Text textAlign={["left","center"]} fontWeight="600"
                fontSize={["1.4rem","3rem"]} color="highlight.full">
                {title}
            </Text>
            <Text fontWeight={["400","500"]} fontSize={["1.2rem","1.4rem"]}
                color="dark.Headings and Text">
                {content}
            </Text>
        </Flex>
    )
}