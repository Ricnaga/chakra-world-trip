import { Flex, Image, Text } from "@chakra-ui/react";

interface BannerProps {
    imgPath: string;
    imgName: string;
    title: string;
}

export default function Banner({ imgPath, imgName, title }: BannerProps) {
    return (
        <>

        <Flex flexDir="column">
            <Image
                filter="brightness(0.6)"
                w="100vw" h={["30vh", "70vh"]}
                src={`${imgPath}/${imgName}.jpg`}
                alt={imgName}
            />
            <Text
                textAlign="center" fontSize="3rem"
                color="light.Headings and Text" fontWeight="600"
                textTransform="capitalize" pos="relative"
                top="-10rem" right="8em">
                {title}
            </Text>
        </Flex>
        </>
    )
}