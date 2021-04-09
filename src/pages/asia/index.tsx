import { Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import { FiChevronLeft } from "react-icons/fi";
import Banner from "../../components/Continents/Banner";
import Card from "../../components/Continents/Card";
import Countries from "../../components/Continents/Countries";
import MoreCities from "../../components/Continents/Countries/moreCities";
import { Header } from "../../components/Header";
export default function Asia() {
    return (
        <>
            <Header icon={FiChevronLeft} />
            <Banner imgPath="asia" imgName="ha-long-vietnam" title="asia" />

            <Flex w={["90vw", "70vw"]} mx="auto" my={["0", "5rem"]} flexDir={['column', 'row']}>
                <Text textAlign="justify" fontSize={[".9rem", "1.4rem"]}
                    w={["90vw", "36vw"]} color="dark.Headings and Text">
                    Ásia é o maior dos continentes, tanto em área como em população. 
                    Abrange um terço das partes sólidas da superfície da Terra e é 
                    responsável por abrigar quase três quintos da população mundial. 
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

                    <Card imgPath="asia" imgName="ha-long-vietnam" city="ha long" country="vietnam" />
                    <Card imgPath="asia" imgName="bangkok-thailand" city="bangkok" country="thailand" />
                    <Card imgPath="asia" imgName="kuala-lumpur-malaysia" city="kuala lumpur" country="malásia" />
                    <Card imgPath="asia" imgName="kyoto-japan" city="kyoto" country="japão" />
                    <Card imgPath="asia" imgName="taipei-taiwan" city="taipei" country="taiwan" />

                </SimpleGrid>
            </Flex>
        </>
    )
}