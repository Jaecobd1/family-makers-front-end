import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Script from 'next/script'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google Analytics */}
      <Script strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}` }id="G-Tag1"
      />
      <Script strategy='lazyOnload' id="G-Tag2">
        {`
        window.dataLayer = window.dataLayer ||[];
        function gtag(){dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
        `}
      </Script>
      <Nav />
      <Component className="z-0"{...pageProps} />
      <Footer />
      
      </>
  )
}
export default MyApp
