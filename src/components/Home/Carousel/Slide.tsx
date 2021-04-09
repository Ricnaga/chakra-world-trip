import { Flex, Image, Link, Text } from "@chakra-ui/react";

interface SlideProps {
    imgPath: string;
    imgName: string;
    title: string;
    children: string;
}

export function Slide({ imgPath, imgName, title, children }: SlideProps) {
    return (
        <>
            <Image
                filter="brightness(0.6)"
                w="100vw" h={["50vh", "70vh"]}
                src={`${imgPath}/${imgName}.jpg`}
                alt={imgName}
            />
            <Flex align="center" justify="center" flexDirection="column" pos="absolute" top="0" bottom="0" left="0" right="0">
                <Link _hover={{ filter: "brightness(0.8)" }} href={imgPath}>
                    <Text textAlign="center" fontSize="2.2rem" color="light.Headings and Text" fontWeight="700" textTransform="capitalize">{title}</Text>
                    <Text textAlign="center" fontSize={["1rem", "1.8rem"]} color="light.info" fontWeight="700">{children}</Text>
                </Link>
            </Flex>
        </>
    )
}