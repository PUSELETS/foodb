import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen text-gray-900">
        <Head>
          <title>Tweeter</title>
        </Head>
        <header className='flex items-center px-4 py-3 border-b'>
          <p className='ml-6 text-lg font-extrabold'>
            FOOD
          </p>
        </header>
        <main className='flex-1'>
          <section className={inter.className}>{children}</section>
        </main>
        <footer className='flex justify-center p-3 border-t relative'>
          <div className='p-4 bg-gray-400 absolute bottom-16 right-6 rounded-full shadow'>
            <div
              className=' flex flex-col justify-between  w-6 h-5 sm:hidden' >
              <span className='h-1 w-full bg-black rounded-lg'></span>
              <span className='h-1 w-full bg-black rounded-lg'></span>
              <span className='h-1 w-full bg-black rounded-lg'></span>
            </div>
          </div>
          icon
        </footer>
      </body>

    </html>
  )
}
