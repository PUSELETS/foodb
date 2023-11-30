"use client"
import React from 'react'
import { useStateContext } from '../context/StateContext'
import Link from 'next/link'
import useMeasure from 'react-use-measure'
import { MotionConfig, motion } from 'framer-motion'

export default function Layout({ children }) {

    const { menu, setMenu } = useStateContext();

    return (
        <>
            <header className='flex items-center px-4 py-3 border-b relative '>
                <p className='ml-6 text-lg font-extrabold'>
                    FOOD
                </p>
                <div className='absolute w-3/5 top-14 left-[0] overflow-hidden'>
                    <div className='relative w-full'>
                        <MotionConfig transition={{ duration: 0.15 }}>
                            <ResisebleDiv>
                                <ul
                                    className={`${menu ? 'flex' : 'hidden'} h-full w-full flex-col bg-red-300 rounded-lg`}>
                                    <li className='list-none hover:bg-blue-200 text-center w-full rounded-lg '><Link className='no-underline text-black p-4 block' href={'/'}>Burger</Link></li>
                                    <li className='list-none hover:bg-blue-200 text-center w-full rounded-lg '><Link className='no-underline text-black p-4 block' href={'/'}>Spaghetti</Link></li>
                                    <li className='list-none hover:bg-blue-200 text-center w-full rounded-lg '><Link className='no-underline text-black p-4 block' href={'/'}>Pizza</Link></li>
                                    <li className='list-none hover:bg-blue-200 text-center w-full rounded-lg '><Link className='no-underline text-black p-4 block' href={'/'}>Hot-Dog</Link></li>
                                </ul>
                            </ResisebleDiv>
                        </MotionConfig>
                    </div>
                </div>
            </header>
            <main className='flex-1'>
                {children}
            </main>
            <footer className='flex justify-center p-3 border-t relative'>
                <div
                    onClick={() => setMenu(!menu)}
                    className='p-4 bg-gray-400 absolute bottom-16 right-6 rounded-full sm:hidden'>
                    <div
                        className=' flex flex-col justify-between  w-6 h-5 ' >
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

function ResisebleDiv({ children }) {

    const [ref, { height }] = useMeasure()

    return (
        <motion.div
            animate={{ height }}
            className='overflow-hidden '>
            <div
                ref={ref}
                className='absolute w-full p-1 py-1 rounded-lg top-0 left-[0]'>
                {children}
            </div>
        </motion.div>
    )
}
