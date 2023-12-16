"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import photo from './photo.jpg'
import it from './it.jpg';
import work from './work.jpeg';



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade'




export default function Home({ data }) {



  return (
    <>
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
                    <h1 className="slick-title sm:text-[12px] sm:mb-0">Cool Fashion</h1>

                    <p className="lead text-white mt-1 mb-3">Little fashion template comes with total 8 HTML pages provided by Tooplate website.</p>

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
              src={it}
              maxwidth={'100%'} height={'auto'}
              alt=''
            ></Image>
            <div className="slick-bottom ">
              <div className='container'>
                <div className='grid grid-cols-12 gap-4'>
                  <div className='col-span-10'>
                    <h1 className="slick-title sm:text-[12px] sm:mb-0">Talk to us</h1>

                    <p className="lead text-white  mt-1 mb-3">Tooplate is one of the best HTML CSS template websites for everyone.</p>

                    <a href="about.html" className="btn custom-btn">Work with us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper >
      <section className='w-full pt-28 pb-28'>
        <div className='grid grid-cols-12'>
          <div className='col-span-12 text-center'>
            <h2 className='mb-5'>Get started with<span>Little</span>Fashion</h2>
          </div>
          <div className='sm:col-span-2 col-span-12 '>
            <ul className='nav-pills mb-5 mx-auto justify-center items-center '>
              <li className='w-full'>
                <button className='nav-link'>Introduction</button>
              </li>
              <li className="w-full">
                <button className="nav-link" >How we work?</button>
              </li>

              <li className="w-full" >
                <button className="nav-link" >Capabilites</button>
              </li>
            </ul>
          </div>
          <div className='sm:col-span-10 col-span-12 grid grid-cols-12'>
            <div className=' sm:col-span-7 col-span-12 '>
              <Image
                src={work}
                maxwidth={'100%'} height={'auto'}
                alt=''
              ></Image>
            </div>
            <div className='sm:col-span-5 col-span-12'>
              <div className='flex flex-col h-full p-5 '>
                <h4 className="mb-3">Life at Studio</h4>

                <p>Over three years in business, We’ve had the chance to work on a variety of projects, with companies</p>

                <p>Custom work is branding, web design, UI/UX design</p>

              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}




