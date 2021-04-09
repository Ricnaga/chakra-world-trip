import { Flex } from "@chakra-ui/react";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Slide } from "./Slide";

SwiperCore.use([Navigation, Pagination])

export function Carousel() {
  return (
    <Flex mx="auto" my="auto" w={["100vw","80vw"]} mb="3rem" align="center" justify="center">
      <Swiper
        navigation
        pagination
        slidesPerView={1}
      >
        <SwiperSlide>
          <Slide imgPath="africa" imgName="alexandria-egypt" title="africa">
            Onde reside a história milenar.
         </Slide>
        </SwiperSlide>

        <SwiperSlide>
          <Slide imgPath="asia" imgName="ha-long-vietnam" title="asia">
          Maior continente e de história multicultural.
         </Slide>
        </SwiperSlide>

        <SwiperSlide>
          <Slide imgPath="europe" imgName="dublin-ireland" title="europa">
          O continente mais antigo.
         </Slide>
        </SwiperSlide>

        <SwiperSlide>
          <Slide imgPath="north-america" imgName="washington-usa" title="américa do norte">
          A potência mundial.
         </Slide>
        </SwiperSlide>

        <SwiperSlide>
          <Slide imgPath="oceania" imgName="sydney-australia" title="oceania">
          O continente mais novo.
         </Slide>
        </SwiperSlide>

        <SwiperSlide>
          <Slide imgPath="south-america" imgName="rio-de-janeiro-brazil" title="américa do sul">
          O maior continente latino.
         </Slide>
        </SwiperSlide>

      </Swiper>
    </Flex>
  )
}