import React from 'react'
import Link from 'next/link'
import useMeasure from 'react-use-measure'
import { MotionConfig, motion } from 'framer-motion'

export default function Navber() {

  const [ref, { height }] = useMeasure();

  return (
    <MotionConfig transition={{duration: 9}}>
    <motion.div
      animate= {{height}}
      className='w-3/5 h-[100%] bg-red-300 overflow-hidden p-1 py-1'>
      <ul 
      ref={ref}
      className=''>
        <li className='list-none hover:bg-blue-200 text-center w-full rounded-lg '><Link className='no-underline text-black p-4 block' href={'/'}>Burger</Link></li>
        <li className='list-none hover:bg-blue-200 text-center w-full rounded-lg '><Link className='no-underline text-black p-4 block' href={'/'}>Spaghetti</Link></li>
        <li className='list-none hover:bg-blue-200 text-center w-full rounded-lg '><Link className='no-underline text-black p-4 block' href={'/'}>Pizza</Link></li>
        <li className='list-none hover:bg-blue-200 text-center w-full rounded-lg '><Link className='no-underline text-black p-4 block' href={'/'}>Hot-Dog</Link></li>
      </ul>
    </motion.div>
    </MotionConfig>
  )
}