"use client"
import React from 'react'
import { useStateContext } from '../context/StateContext'
import Link from 'next/link'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import "@radix-ui/themes/styles.css"
import * as Dialog from '@radix-ui/react-dialog';
import { Theme } from '@radix-ui/themes'

export default function Layout({ children }) {

    const { menu, setMenu } = useStateContext();

    return (
        <>
            <header className='flex items-center px-4 py-3 border-b relative '>
                <Dialog.Root>
                    <Dialog.Trigger className='ml-6 text-lg font-extrabold'>
                        FOOD
                    </Dialog.Trigger>
                    <Dialog.Portal className='z-10'>
                        <Dialog.Overlay className='fixed inset-0 bg-black/50 z-10' />
                        <Dialog.Content className='fixed z-10 top-1/2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-8 text-gray-900 shadow'>
                            this is working
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
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


