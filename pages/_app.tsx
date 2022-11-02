import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      
      <Nav ></Nav>
      <Component className="z-0"{...pageProps} />
      

      </>
  )
}
export default MyApp
