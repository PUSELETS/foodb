import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export default function Navber() {


  return (
   <Swiper
   spaceBetween={50}
   slidesPerView={2}
   onSlideChange={()=> console.log('slide change')}
   onSwiper={(swiper)=>console.log(swiper)}
   >
    <SwiperSlide>slide1</SwiperSlide>
    <SwiperSlide>slide2</SwiperSlide>
    <SwiperSlide>slide3</SwiperSlide>
    <SwiperSlide>slide4</SwiperSlide>
    <SwiperSlide>slide5</SwiperSlide>
   </Swiper>
  )
}