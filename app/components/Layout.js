"use client"
import React from 'react'
import { useStateContext } from '../context/StateContext'

export default function Layout({ children }) {

    const { menu, setMenu } = useStateContext();

    return (
        <>
            <header className='flex items-center px-4 py-3 border-b'>
                <p className='ml-6 text-lg font-extrabold'>
                    FOOD
                </p>
            </header>
            <main className='flex-1'>
                {children}
            </main>
            <footer className='flex justify-center p-3 border-t relative'>
                <div
                    onClick={() => setMenu(!menu)}
                    className='p-4 bg-gray-400 absolute bottom-16 right-6 rounded-full shadow'>
                    <div
                        className=' flex flex-col justify-between  w-6 h-5 sm:hidden' >
                        <span className='h-1 w-full bg-black rounded-lg'></span>
                        <span className='h-1 w-full bg-black rounded-lg'></span>
                        <span className='h-1 w-full bg-black rounded-lg'></span>
                    </div>
                </div>
                icon
            </footer>
        </>
    )
}
