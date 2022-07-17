import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import tw from 'tailwind-styled-components'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="overflow-x-hidden w-full h-full">
      <Head>
        <title>// Bruno Merez | Home</title>
      </Head>
      <Navbar />
      <Main className="">
        <Component {...pageProps} />
      </Main>
    </div>
  )
}


const Main = tw.main`
  min-h-[calc(100vh_-_51px)]
  py-2
  px-[3%]
  lg:[5%]
  xl:px-[10%]
  2xl:px-[20%]
  bg-[#333]
`