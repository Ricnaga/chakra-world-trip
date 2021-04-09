import { Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import { FiChevronLeft } from "react-icons/fi";
import Banner from "../../components/Continents/Banner";
import Card from "../../components/Continents/Card";
import Countries from "../../components/Continents/Countries";
import MoreCities from "../../components/Continents/Countries/moreCities";
import { Header } from "../../components/Header";
export default function SouthAmerica() {
    return (
        <>
            <Header icon={FiChevronLeft} />
            <Banner imgPath="south-america" imgName="rio-de-janeiro-brazil" title="america do sul" />

            <Flex w={["90vw", "70vw"]} mx="auto" my={["0", "5rem"]} flexDir={['column', 'row']}>
                <Text textAlign="justify" fontSize={[".9rem", "1.4rem"]}
                    w={["90vw", "36vw"]} color="dark.Headings and Text">
                    A América do Sul é um subcontinente que compreende a porção meridional da América.
                    A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial.
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

                    <Card imgPath="south-america" imgName="rio-de-janeiro-brazil" city="rio de janeiro" country="brasil" />
                    <Card imgPath="south-america" imgName="boliva-colombia" city="bolivia" country="colômbia" />
                    <Card imgPath="south-america" imgName="buenos-aires-argentina" city="buenos aires" country="argentina" />
                    <Card imgPath="south-america" imgName="quito-equador" city="quito" country="equador" />
                    <Card imgPath="south-america" imgName="santiago-chile" city="santiago" country="chile" />

                </SimpleGrid>
            </Flex>
        </>
    )
}