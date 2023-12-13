"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import photo from './photo.jpeg'
import it from './it.jpeg'
import work from './work.jpeg'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade'




export default function Home({ data }) {



  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination, A11y, Autoplay, EffectFade]}
      pagination={{ clickable: true }}
      effect='fade'
      fadeEffect={{
        crossFade: true
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
    >
      <SwiperSlide>
        <div className='relative'>
          <Image
            src={photo}
            maxwidth={'100%'} height={'auto'}
            alt=''
          ></Image>
          <div className="slick-bottom ">
            <div className='container'>
              <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-10'>
                  <h1 className="slick-title sm:text-[42px] sm:mb-0">Cool Fashion</h1>

                  <p className="lead text-white mt-3 mb-5">Little fashion template comes with total 8 HTML pages provided by Tooplate website.</p>

                  <a href="about.html" className="btn custom-btn">Learn more about us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative'>
          <Image
            src={work}
            maxwidth={'100%'} height={'auto'}
            alt=''
          ></Image>
          <div className="slick-bottom ">
            <div className='container'>
              <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-10'>
                  <h1 className="slick-title sm:text-[42px] sm:mb-0">New Design</h1>

                  <p className="lead text-white mt-3 mb-5">Please share this Little Fashion template to your friends. Thank you for supporting us.</p>

                  <a href="about.html" className="btn custom-btn">Explore products</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative'>
          <Image
            src={it}
            maxwidth={'100%'} height={'auto'}
            alt=''
          ></Image>
          <div className="slick-bottom ">
            <div className='container'>
              <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-10'>
                  <h1 className="slick-title sm:text-[42px] sm:mb-0">Talk to us</h1>

                  <p className="lead text-white  mt-3 mb-5">Tooplate is one of the best HTML CSS template websites for everyone.</p>

                  <a href="about.html" className="btn custom-btn">Work with us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper >
  )
}




