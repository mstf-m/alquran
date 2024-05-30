"use client";

import { Image } from "@nextui-org/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

// import required modules
// import { Pagination } from "swiper/modules";

export default function CarouselBooks() {
  const [screenWidth, setScreenWidth] = useState(0);  

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);
  
  return (
    <>
    {screenWidth >= 768 ? ( 
    <Swiper
      slidesPerView={5}
      spaceBetween={40}
      pagination={false}
      // modules={[Pagination]}
      className="mySwiper h-fit max-w-6xl !overflow-visible"
  >
      <SwiperSlide><Image src="/book.png" alt="" className="w-full object-cover" removeWrapper/></SwiperSlide>
      <SwiperSlide><Image src="/book.png" alt="" className="w-full object-cover" removeWrapper/></SwiperSlide>
      <SwiperSlide><Image src="/book.png" alt="" className="w-full object-cover" removeWrapper/></SwiperSlide>
      <SwiperSlide><Image src="/book.png" alt="" className="w-full object-cover" removeWrapper/></SwiperSlide>
      <SwiperSlide><Image src="/book.png" alt="" className="w-full object-cover" removeWrapper/></SwiperSlide>
      <SwiperSlide><Image src="/book.png" alt="" className="w-full object-cover" removeWrapper/></SwiperSlide>
      <SwiperSlide><Image src="/book.png" alt="" className="w-full object-cover" removeWrapper/></SwiperSlide>
    </Swiper>) : (
    <div className="grid grid-cols-2 gap-4">
      <Image src="/book.png" alt="" className="w-4/5 object-cover" removeWrapper/>
      <Image src="/book.png" alt="" className="w-4/5  object-cover" removeWrapper/>
      <Image src="/book.png" alt="" className="w-4/5  object-cover" removeWrapper/>
      <Image src="/book.png" alt="" className="w-4/5  object-cover" removeWrapper/>
    </div>
  ) }
   
  </>
  );
}
