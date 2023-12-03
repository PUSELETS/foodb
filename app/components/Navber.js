import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export default function Navber() {


  return (
    <div className='p-4'>
      {
        !data ? (
          <p>Loading...</p>
        ) : (
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {
              data?.map((product) => {
                return (


                  <SwiperSlide>
                    <div
                      className='@container border shadow'
                    >
                      <div className="cursor-pointer text-blue-500">
                        <img
                          alt=''
                          src={product.imageUrl[3]}
                          className="bg-green-200 aspect-[2/2]"
                        />
                        <p className="font-medium">{product.name}</p>
                        <p className="font-extrabold text-black mt-1">R{product.price}</p>
                      </div>
                    </div>
                  </SwiperSlide>


                )
              })
            }
          </Swiper>
        )
      }
    </div>
  )
}




