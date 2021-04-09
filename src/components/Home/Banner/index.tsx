import { Flex, Image, Text } from "@chakra-ui/react";

export function Banner() {
    return (
        <Flex
        filter={["brightness(1.4)","brightness(1)"]}
            h={['30vh' ,"40vh"]}
            align="center"
            justify='space-around'
            bgImage="url('sky.jpg')"
            bgSize="cover"
            bgPos={["100% 12%","100% 20%"]}
        >

            <Flex flexDir="column">
                <Text px="1rem"
                    color="light.Headings and Text"
                    fontWeight="500"
                    fontSize={['1.4rem',"2.2rem"]}
                    mb="1.2rem">
                    5 Continentes,<br />
              infinitas possibilidades.
              </Text>

                <Text px="1rem"
                    color="light.info"
                    fontSize={['0.8rem',"1.2rem"]}
                    maxW="35rem">
                    Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
            </Flex>

            <Image d={['none', 'block']}
                src="airplane.svg"
                alt="airplane"
                pos="relative"
                zIndex="1"
                bottom="-50px"
            />
        </Flex>
    )
}