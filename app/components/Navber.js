"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export default function Navber({data}) {


  return (
    <div className='p-4'>
      {
        !data ? (
          <p>Loading...</p>
        ) : (
          <div className='@container'>
            <div className='grid grid-cols-2 gap-2 mt-5 w-full'>
              {
                data?.map((product , i) => {
                  return (
                    <div
                    key={i}
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
                  )
                })
              }
            </div>
          </div>
        )
      }
    </div>
  )
}




