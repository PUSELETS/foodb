"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import photo from './photo.jpg'
import it from './it.jpg';
import work from './work.jpg';
import peg from './peg.jpg';



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
        modules={[A11y, Autoplay, EffectFade]}
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
      <section className='bg-[#f0f8ff]'>
        <div className='p-0 container mx-auto'>
          <div className='grid grid-cols-12 items-center'>
            <div className='sm:col-span-6 col-span-12'>
              <Image
                src={peg}
                maxwidth={'100%'} height={'auto'}
                alt=''
              ></Image>
            </div>
            <div className='sm:col-span-6 col-span-12'>
              <div className='px-5 py-5 sm:py-0'>
                <h2 className="mb-4"><span>Retail</span> shop owners</h2>

                <p className="lead mb-4">Credits go to Unsplash and FreePik websites for images used in this Little Fashion by Tooplate.</p>

                <a href="/" className="custom-link">
                  Explore Products
                  <i className="bi-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}




