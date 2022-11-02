import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      
      <Nav />
      <Component className="z-0"{...pageProps} />
      <Footer/>

      </>
  )
}
export default MyApp
