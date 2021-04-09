import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface BannerProps {
    imgPath: string;
    imgName: string;
    title: string;
}

export default function Banner({ imgPath, imgName, title }: BannerProps) {
    const isWideScreen = useBreakpointValue({
        sm: true
    })

    return (
        <>
            <Flex flexDir="column">
                <Image
                    filter="brightness(0.6)"
                    w="100vw" h={["30vh", "70vh"]}
                    src={`${imgPath}/${imgName}.jpg`}
                    alt={imgName}
                />

                {isWideScreen ?
                    <Text
                        textAlign="center" fontSize="3rem"
                        color="light.Headings and Text" fontWeight="600"
                        textTransform="capitalize" pos="relative"
                        top="-10rem" right="8em">
                        {title}
                    </Text>
                    :
                    <Text
                        textAlign="center"
                        fontSize="1.8rem"
                        color="light.Headings and Text" fontWeight="600"
                        textTransform="capitalize" pos="relative" bottom="7rem">
                        {title}
                    </Text>
                }
            </Flex>
        </>
    )
}