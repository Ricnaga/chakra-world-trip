import { Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import { FiChevronLeft } from "react-icons/fi";
import Banner from "../../components/Continents/Banner";
import Card from "../../components/Continents/Card";
import Countries from "../../components/Continents/Countries";
import MoreCities from "../../components/Continents/Countries/moreCities";
import { Header } from "../../components/Header";
export default function NorthAmerica() {
    return (
        <>
            <Header icon={FiChevronLeft} />
            <Banner imgPath="north-america" imgName="washington-usa" title="américa do norte" />

            <Flex w={["90vw", "70vw"]} mx="auto" my={["0", "5rem"]} flexDir={['column', 'row']}>
                <Text textAlign="justify" fontSize={[".9rem", "1.4rem"]}
                    w={["90vw", "36vw"]} color="dark.Headings and Text">
                    A América do Norte é um subcontinente que compreende a porção setentrional do continente americano. 
                    Existem duas formas de classificar esse continente: a primeira considera que a América do Norte é apenas a parte 
                    mais setentrional da América, separada da América Central na fronteira entre o México e a Guatemala, a segunda 
                    classificação reconhece apenas uma América do Norte e uma América do Sul, traçando o limite no Istmo do Panamá 
                    (umas vezes no Canal do Panamá, outras na fronteira entre o Panamá e a Colômbia)
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

                    <Card imgPath="north-america" imgName="washington-usa" city="washington" country="e.u.a." />
                    <Card imgPath="north-america" imgName="california-USA" city="california" country="e.u.a." />
                    <Card imgPath="north-america" imgName="merida-mexico" city="merida" country="mexico" />
                    <Card imgPath="north-america" imgName="north-vancouver-canada" city="north-vancouver" country="canada" />
                    <Card imgPath="north-america" imgName="toronto-usa" city="toronto" country="e.u.a." />

                </SimpleGrid>
            </Flex>
        </>
    )
}