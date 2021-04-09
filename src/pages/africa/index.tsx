import { Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import { FiChevronLeft } from "react-icons/fi";
import Banner from "../../components/Continents/Banner";
import Card from "../../components/Continents/Card";
import Countries from "../../components/Continents/Countries";
import MoreCities from "../../components/Continents/Countries/moreCities";
import { Header } from "../../components/Header";
export default function Africa() {
    return (
        <>
            <Header icon={FiChevronLeft} />
            <Banner imgPath="africa" imgName="alexandria-egypt" title="africa" />

            <Flex w={["90vw", "70vw"]} mx="auto" my={["0", "5rem"]} flexDir={['column', 'row']}>
                <Text textAlign="justify" fontSize={[".9rem", "1.4rem"]}
                    w={["90vw", "36vw"]} color="dark.Headings and Text">
                    A África é o terceiro continente mais extenso (depois da Ásia e da América)
                    com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3 % da área
                    total da terra firme do planeta.
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

                    <Card imgPath="africa" imgName="alexandria-egypt" city="alexandria" country="egito" />
                    <Card imgPath="africa" imgName="cape-town-south-africa" city="cape-town" country="africa do sul" />
                    <Card imgPath="africa" imgName="nairobi-kenya" city="nairobi" country="quenia" />
                    <Card imgPath="africa" imgName="pretoria-south-africa" city="pretoria" country="africa do sul" />
                    <Card imgPath="africa" imgName="serengeti-tanzania" city="serengeti" country="tanzania" />

                </SimpleGrid>
            </Flex>
        </>
    )
}
