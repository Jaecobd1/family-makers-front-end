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
      <Script  src = "https://www.googletagmanager.com/gtag/js?id=G-4D9LGJVHQQ" id="Gtag"> </Script> 
      <Script src="../scripts/googleAnalytics.js" id="gAnalytics"></Script>

      </>
  )
}
export default MyApp
