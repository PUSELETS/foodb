"use client"
import React from 'react'
import { useState } from 'react'

export default function Navber() {
    return (
        <div className='w-3/5 h-screen bg-red-300 '>
            <ul className=''>
                <li className=''>Burgger</li>
                <li className=''>Spaghetti</li>
                <li className=''>Pizza</li>
                <li className=''>Hot-Dog</li>
            </ul>
            <div className='p-4 bg-gray-400 absolute bottom-16 right-6 rounded-full shadow'>
                <div
                    className=' flex flex-col justify-between  w-6 h-5 sm:hidden' >
                    <span className='h-1 w-full bg-black rounded-lg'></span>
                    <span className='h-1 w-full bg-black rounded-lg'></span>
                    <span className='h-1 w-full bg-black rounded-lg'></span>
                </div>
            </div>
        </div>
    )
}
