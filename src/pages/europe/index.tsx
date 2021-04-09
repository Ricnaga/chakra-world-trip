import { Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import { FiChevronLeft } from "react-icons/fi";
import Banner from "../../components/Continents/Banner";
import Card from "../../components/Continents/Card";
import Countries from "../../components/Continents/Countries";
import MoreCities from "../../components/Continents/Countries/moreCities";
import { Header } from "../../components/Header";

export default function Europe() {
    return (
        <>
            <Header icon={FiChevronLeft} />
            <Banner imgPath="europe" imgName="dublin-ireland" title="europe" />

            <Flex w="70vw" mx="auto" my="5rem">
                <Text textAlign="justify" fontSize="1.4rem" w="36vw" color="dark.Headings and Text">
                    A Europa é, por convenção, um dos seis
                    continentes do mundo. Compreendendo a
                    península ocidental da Eurásia, a Europa
                    geralmente divide-se da Ásia a leste pela
                    divisória de águas dos montes Urais, o rio Ural,
                    o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
            </Text>

                <Flex align="center" justify="space-evenly" w="36vw" mx="auto">
                    <Countries title="50" content="países" />
                    <Countries title="60" content="línguas" />
                    <MoreCities />
                </Flex>


            </Flex>
            <Flex w="70vw" mx="auto" my="5rem" flexDir="column">
                <Text fontSize="2rem" fontWeight="500" color="dark.Headings and Text">Cidades +100</Text>

                <SimpleGrid columns={[1, 4]} columnGap="2.8rem" rowGap="2.8rem" mt="3rem">

                    <Card imgPath="europe" imgName="dinant-belgium" city="dinant" country="belgium"/>
                    <Card imgPath="europe" imgName="dublin-ireland" city="dublin" country="irlanda"/>
                    <Card imgPath="europe" imgName="hallstatt-town-austria" city="hallstatt" country="austria"/>
                    <Card imgPath="europe" imgName="prague-czechia" city="praga" country="república tcheca"/>
                    <Card imgPath="europe" imgName="berlin-germany" city="berlim" country="alemanha"/>

                </SimpleGrid>
            </Flex>
        </>
    )
}