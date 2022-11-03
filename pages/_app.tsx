import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      
      <Nav />
      <Component className="z-0"{...pageProps} />
      <Footer />
      <Script async src = "https://www.googletagmanager.com/gtag/js?id=G-4D9LGJVHQQ" > </Script> 
      <Script src="../scripts/googleAnalytics.js"></Script>

      </>
  )
}
export default MyApp
