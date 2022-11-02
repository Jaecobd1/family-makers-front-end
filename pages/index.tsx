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
      <div className="flex justify-center relative z-2">
        <div className="w-9/12 h-96 z-0">
          <Image src="/group-cheering.jpeg" className="object-cover w-full h-full" height={1920} width={1920} alt="Group of people around computer"></Image>
          <div className="lg:text-6xl md:text-4xl text-2xl flex justify-center absolute bottom-0">
      <h1 className="bg-secondary/70 rounded-lg p-4  mr-5 ml-5 mb-5 text-white " >Welcome to Family Makers!</h1>

      </div>
        </div>
        
      </div>
      
      <div className="flex md:justify-start justify-center w-9/12 mx-auto" >
        <p className="w-1/2 text-center md:text-left m-2 w-96">Family Makers is a series of online engineering program for elementary-aged children and their caregivers to empower children to become problem solvers. Facilitated by library staff at a rural library, Family Makers provide tablets, hotspots, and engineering tools to support families to design and make engineering solutions for their communities.  </p>
      </div>
      <div className="md:text-4xl  text-2xl flex  justify-center w-8/12 mx-auto md:justify-end">
       
        <h1 className="bg-secondary/70 rounded-lg p-4 m-5 md:mr-20 text-center h-fit text-grey" >How Will Family Makers Benefit Children?</h1>
        

      </div>
      <div className="w-9/12 flex lg:justify-between flex-col lg:flex-row mx-auto" >


         <div className="w-96 h-96 place-self-center">
          <Image src="/Kids-writing.jpeg" height={1080} width={1920} alt={"Image of kids writing"} className="object-cover w-full h-full"></Image>
        </div>


        <span className="flex flex-col md:items-end items-center mr-20 ml-10">
          <p className="w-96 text-center m-2">Children and caregivers will participate in a series of six 1.5-hour online engineering programs. Within these programs, families will see how engineering is relevant to their lives by connecting with engineers who grew up and currently work in a rural community. Families will collaborate to make and design for the community and celebrate solutions they have designed. 
        </p>
        <p className="w-96 text-center m-2"> 
          Children in rural communities find it challenging to access educational resources related to engineering. Even when children engage in engineering learning, it may be difficult to see how engineering is relevant to their lives living in a rural community. Family Makers bring engineering relevant to children and caregivers by connecting with rural engineers’ stories and lived experiences and building relationships with library professionals who can support with lifelong learning at their community. 
        </p>
        </span>
      </div>

      <div className="flex w-9/12 justify-center flex-col mx-auto">
        <div className="text-2xl flex justify-start">
        <h1 className="bg-secondary/80 rounded-lg p-4 m-5 text-center text-grey" >How Will Family Makers Strengthen Rural Libraries?</h1>
        

      </div>
      <div className="flex justify-center md:flex-row flex-col items-center">
        <div className="w-96 h-96 ml-5 mr-5">
          <Image src="/kid-math.jpeg" className="h-full object-cover w-full" height={1920} width={1920} alt="Image of kid learning math"/>
        </div>
        <p className="w-96 text-center ml-5 mr-5 mt-2"> 
          Family Makers work closely with eight rural library partners throughout the project to provide input and co-design the online engineering program. The Family Makers curriculum will be tested and refined through several cycles across eight rural library settings to ensure that we design a curriculum that is replicable and scalable. Once it is finalized, Family Makers which will be freely accessible under a Creative Commons license for any rural library to use and implement. We will also provide facilitation and technology guides as well as webinars to support rural libraries to get familiar with engineering concepts and design thinking approach. 
        </p>
        </div>
      </div>
        
    </div>
    
  )
}

export default Home
