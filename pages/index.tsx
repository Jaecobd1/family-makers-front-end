import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Family Makers Home</title>
        <meta name="description" content="Family Makers official Website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-2xl flex justify-center">
      <h1 className="bg-secondary rounded-lg p-4 m-5" >Welcome to Family Makers!</h1>

      </div>
      <div className="flex justify-center" >
        <p className="w-96 text-center m-2">Family Makers is a series of online engineering program for elementary-aged children and their caregivers to empower children to become problem solvers. Facilitated by library staff at a rural library, Family Makers provide tablets, hotspots, and engineering tools to support families to design and make engineering solutions for their communities.  </p>
      </div>
      
    </div>
  )
}

export default Home
