"use client"
import React from 'react'
import { useStateContext } from '../context/StateContext'
import Link from 'next/link'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import "@radix-ui/themes/styles.css"
import { Theme } from '@radix-ui/themes'

export default function Layout({ children }) {

    const { menu, setMenu } = useStateContext();

    return (
        <>
            <header className='flex items-center px-4 py-3 border-b relative '>
                <p className='ml-6 text-lg font-extrabold'>
                    FOOD
                </p>
                <MotionConfig transition={{ duration: 0.3 }}>
                    <AnimatePresence>
                        <motion.div
                            key={menu}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className='absolute w-3/5 top-14 left-[3px] overflow-hidden '>
                            <ul
                                className={`${menu ? 'flex' : 'hidden'} h-full w-full flex-col h-[svh] bg-red-300 shadow rounded-lg`}>
                                <li className='list-none border-b hover:bg-blue-200 text-center w-full rounded-tl-sm rounded-tr-sm '><Link className='no-underline text-black p-4 block' href={'/'}>Burger</Link></li>
                                <li className='list-none border-b hover:bg-blue-200 text-center w-full '><Link className='no-underline text-black p-4 block' href={'/'}>Spaghetti</Link></li>
                                <li className='list-none border-b hover:bg-blue-200 text-center w-full '><Link className='no-underline text-black p-4 block' href={'/'}>Pizza</Link></li>
                                <li className='list-none border-b hover:bg-blue-200 text-center w-full rounded-bl-sm rounded-br-sm '><Link className='no-underline text-black p-4 block' href={'/'}>Hot-Dog</Link></li>
                            </ul>
                        </motion.div>
                    </AnimatePresence>
                </MotionConfig>
            </header>
            <main className='flex-1 overflow-scroll'>
                {children}
            </main>
        </>
    )
}


