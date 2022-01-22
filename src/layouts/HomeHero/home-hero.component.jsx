import React from "react"
import * as S from "./home-hero.styles"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination } from "swiper"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/autoplay"
import "swiper/css/pagination"
import CustomBgImage from "../../components/custom-bg-image/custom-bg-image.component"

const HomeHero = ({ images }) => {
  if (!images) return null
  return (
    <S.Wrapper>
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        // spaceBetween={50}
        pagination={{ clickable: true }}
        slidesPerView={1}
        speed={600}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={`home-img-${index}`}>
            <S.BgImage img={image} tag="div" />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Wrapper>
  )
}
export default HomeHero
