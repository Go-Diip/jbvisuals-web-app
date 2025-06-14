import React from "react"
import * as S from "./home-hero.styles"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination } from "swiper"

import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/autoplay"
import "swiper/css/pagination"

const HomeHero = ({ images }) => {
  if (!images) return null
  return (
    <S.Wrapper>
      <h1 className="visuallyhidden">
        Premium 3D Architectural Visualizations by JB Visuals
      </h1>
      <h2 className="visuallyhidden">
        Transform Your Projects with Stunning Renders"
      </h2>
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        // spaceBetween={50}
        // pagination={{ clickable: true }}
        slidesPerView={1}
        speed={600}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={`home-img-${index}`}>
            <S.BgImage img={image.image} tag="div" />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.Wrapper>
  )
}
export default HomeHero
