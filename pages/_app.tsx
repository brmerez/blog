import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import tw from 'tailwind-styled-components'
import Footer from '../components/Footer'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="overflow-x-hidden w-full h-full">
      <Navbar />
      <Main className="">
        <Component {...pageProps} />
      </Main>
      <Footer />
    </div>
  )
}


const Main = tw.main`
  min-h-[calc(100vh_-_69px)]
  py-4
  px-[3%]
  lg:[5%]
  xl:px-[10%]
  2xl:px-[20%]
  bg-[#e4e4e4]
  pb-[15vh]

`