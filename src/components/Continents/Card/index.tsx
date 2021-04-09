import { Flex, Image, Text } from "@chakra-ui/react";

interface CardProps {
    imgPath: string;
    imgName: string;
    city: string;
    country: string;
}
export default function Card({ imgPath, imgName, city, country }: CardProps) {
    return (
        <Flex flexDir="column" h="280px">
            <Image
                src={`${imgPath}/${imgName}.jpg`}
                borderTopRadius=".3rem"
                alt={imgName}
            />

            <Flex
                align="center"
                justify="space-around"
                borderX="1px"
                borderBottom="1px"
                borderBottomRadius=".3rem"
                borderLeftColor="highlight.half"
                borderRightColor="highlight.half"
                borderBottomColor="highlight.half"
                h="100%">

                <Flex flexDir="column" my="1.2rem">
                    <Text mb=".8rem"
                        fontWeight="600"
                        fontSize="1.2rem"
                        color="dark.Headings and Text"
                        textTransform="capitalize">
                        {city}
                    </Text>
                    <Text fontWeight="500"
                        fontSize="1rem"
                        color="dark.info"
                        textTransform="capitalize">
                        {country}
                    </Text>
                </Flex>

                <Image
                    src={`${imgPath}/${imgName}.jpg`}
                    borderRadius="50%"
                    alt="dinant-belgium"
                    w="30px"
                    h="30px"
                />

            </Flex>

        </Flex>
    )
}