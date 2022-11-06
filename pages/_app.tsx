import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Script from 'next/script'
import { GoogleAnalytics } from "nextjs-google-analytics"


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Nav />
      <Component className="z-0"{...pageProps} />
      <Footer />
      
      </>
  )
}
export default MyApp
