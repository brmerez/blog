import '../styles/globals.css'
import type { AppProps } from 'next/app'
import tw from 'tailwind-styled-components'
import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="overflow-x-hidden w-full h-full">
      <Head>
        <title>// Bruno Merez | Home</title>
      </Head>
      <Main>
        <Navbar />
        <div>
          <Component {...pageProps} />
        </div>
      </Main>
    </div>
  )
}

// min-h-[calc(100vh_-_71px)]

const Main = tw.main`
  min-h-screen
  py-2
  px-[3%]
  lg:px-[5%]
  xl:px-[10%]
  2xl:px-[20%]
  bg-[#282A36]
`