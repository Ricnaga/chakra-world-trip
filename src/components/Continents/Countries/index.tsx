import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import MoreInfo from "../moreInfo";

interface CountriesProps {
    title: string;
    content: string;
}

export default function Countries({ title, content }: CountriesProps) {
    const isWideScreen = useBreakpointValue({
        sm: true
    })

    return (
        <Flex flexDir="column">
            <Text textAlign={["left", "center"]} fontWeight="600"
                fontSize={["1.4rem", "3rem"]} color="highlight.full">
                {title}
            </Text>
            {isWideScreen ?
                <Text maxH='0' maxW="220px" fontWeight={["400", "500"]} fontSize={["1.2rem", "1.4rem"]}
                    color="dark.Headings and Text">
                    {content === "cidades +100" ?
                        <>
                            {content}
                            <MoreInfo />
                        </>
                        :
                        content}
                </Text>
                :
                <Text maxH='0' maxW="220px" fontWeight={["400", "500"]} fontSize={["1.2rem", "1.4rem"]}
                    color="dark.Headings and Text">
                    {content}
                </Text>
            }

        </Flex>
    )
}