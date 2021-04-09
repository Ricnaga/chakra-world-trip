import { Box, Divider, Text } from '@chakra-ui/react';
import { Banner } from '../components/Home/Banner';
import { Carousel } from '../components/Home/Carousel';
import { Header } from '../components/Header';
import { Items } from '../components/Home/Items';

export default function Home() {
  return (
    <Box w="100vw">
      <Header />
      <Banner />
      <Items />

      <Divider
        borderColor="dark.Headings and Text"
        w={["3rem" ,"90px"]}
        border={["1px", "2px"]}
        mx="auto"
      />

      <Text
        textAlign="center"
        fontSize={["1.2rem","2.2rem"]}
        color="dark.Headings and Text"
        fontWeight="500"
        my="3rem">
        Vamos nessa?<br />
        Então escolha seu continente
        </Text>

      <Carousel />

    </Box>

  )
}