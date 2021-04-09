import { Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import { FiChevronLeft } from "react-icons/fi";
import Banner from "../../components/Continents/Banner";
import Card from "../../components/Continents/Card";
import Countries from "../../components/Continents/Countries";
import MoreCities from "../../components/Continents/Countries/moreCities";
import { Header } from "../../components/Header";
export default function Ocenia() {
    return (
        <>
            <Header icon={FiChevronLeft} />
            <Banner imgPath="oceania" imgName="sydney-australia" title="oceania" />

            <Flex w={["90vw", "70vw"]} mx="auto" my={["0", "5rem"]} flexDir={['column', 'row']}>
                <Text textAlign="justify" fontSize={[".9rem", "1.4rem"]}
                    w={["90vw", "36vw"]} color="dark.Headings and Text">
                    O Novíssimo Mundo (o “novo mundo” seria a América), como é conhecido o conjunto de 
                    ilhas que junto com a Austrália formam a Oceania, é a maior concentração de ilhas do planeta.
            </Text>

                <Flex align="center" justify="space-evenly" w={["90vw", "36vw"]} mx="auto" my="1rem">
                    <Countries title="50" content="países" />
                    <Countries title="60" content="línguas" />
                    <MoreCities />
                </Flex>


            </Flex>
            <Flex w={["80vw", "70vw"]} mx="auto" my={[0, "5rem"]} flexDir="column">
                <Text fontSize={["1.4rem", "2rem"]} fontWeight="500" color="dark.Headings and Text">Cidades +100</Text>

                <SimpleGrid
                    columns={[1, 4]} columnGap="2.8rem"
                    rowGap="2.8rem" mt={["1.4rem", "3rem"]}
                    w={["60vw", "70vw"]} mx="auto"
                >

                    <Card imgPath="oceania" imgName="sydney-australia" city="sydney" country="australia" />
                    <Card imgPath="oceania" imgName="akaroa-new-zealand" city="akaroa" country="nova zelândia" />
                    <Card imgPath="oceania" imgName="auckland-new-zealand" city="auckland" country="nova zelândia" />
                    <Card imgPath="oceania" imgName="melbourne-australia" city="melbourne" country="australia" />
                    <Card imgPath="oceania" imgName="padar-island-indonesia" city="ilha padar" country="indonesia" />

                </SimpleGrid>
            </Flex>
        </>
    )
}