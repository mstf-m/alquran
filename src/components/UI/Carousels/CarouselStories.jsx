"use client";

import { Image } from "@nextui-org/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function CarouselStories({ screenWidth }) {
  return (
    <Swiper
      {...(screenWidth >= 768 ? {
        initialSlide: 2,
        loop: true,
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 2,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 3,
          slideShadows: false,
        }
      } : {})}
      
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper h-fit max-w-xs md:max-w-2xl !overflow-visible"
    >
      <SwiperSlide className="">
        <Image
          src="/slide1.png"
          alt=""
          className="w-full object-cover"
          removeWrapper
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/slide2.png"
          alt=""
          className="w-full object-cover"
          removeWrapper
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/slide3.png"
          alt=""
          className="w-full object-cover"
          removeWrapper
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/slide1.png"
          alt=""
          className="w-full object-cover"
          removeWrapper
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/slide2.png"
          alt=""
          className="w-full object-cover"
          removeWrapper
        />
      </SwiperSlide>
    </Swiper>
  );
}
