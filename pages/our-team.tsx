import Image from 'next/image'
import Link from 'next/link'
import { getClient, sanityClient } from '../lib/sanity.server'
import groq from 'groq'
import { Libraries, Researchers } from '../lib/typings'
import { urlFor } from '../lib/sanity'

interface Props{
    researchers: [Researchers];
    libraries: [Libraries];
}

function ourTeam({ researchers, libraries }: Props) {

    console.log(libraries)
    return (
        <div>
            <div id="title" className="text-2xl flex justify-center">
                <div className="flex flex-col mt-2">
                    <h1>
                    Meet the Family Makers Team
                </h1>
                <div className="underline"></div>
                </div>
            </div>
             <div id="subTitle" className="flex justify-center mt-20">
                <h2 className="text-4xl">Our Libraries</h2>
            </div>

            <div className="flex flex-wrap justify-center ">
                {libraries.map((libarary) =>
                (
                    <div className="flex flex-col w-96 items-center m-5  border-2 border-primary rounded-xl">
                        <h1 className="text-2xl underline">{libarary.title }</h1>
                        <h2>{libarary.city},  {libarary.state}</h2>
                        
                        <div className="flex justify-between flex-col  w-96 h-52 p-2 m-5">
                              <h1 className="text-xl">Library Contact:</h1>
                            <div className="flex justify-between h-24">
                                
                                 <h2 className="p-5 w-42">{libarary.librarian}</h2>
                            <h2 className="w-1/2 text-right p-5">{libarary.contactTitle}</h2>
                          </div>
                            
                            <a className="underline text-primary hover:text-grey p-5"
                                href={"mailto:" + libarary.email}>{libarary.email}</a>
                        </div>
                    

                </div>

               ))}
            </div>
            
           
            <div id="subTitle" className="flex justify-center mt-20">
                <h2 className="text-4xl">Research Team</h2>
            </div>
            <div className="researchers drop-shadow-lg">
                {researchers.map(researcher => (
                    <div className="researcher-item w-96 lg:w-1/4  m-20 p-25 rounded-lg" key={researcher.name}>
                        <div className="title">
                            <h1 className="text-3xl m-5">{researcher.name}</h1>
                            
                            
                        </div>
                        <div className="">
                            <img src={urlFor(researcher.image).url()!} alt={researcher.name} className="mx-auto rounded-xl object-cover h-56 w-56" />
                            </div>
                        <div className="bio">
                            <span>
                                <p className="text-sm">{researcher.bio}</p>
                            </span>
                        </div>
                        <div className="buttons flex justify-between md:flex-row flex-col items-center ">
                            <Link className="p-5 rounded-xl bg-secondary text-primary w-48 text-center drop-shadow-lg m-5" href={researcher.linkOnehref}>{researcher.linkOnename}</Link>
                            {researcher.linkTwohref ? <Link className="p-5  border-2 border-black rounded-xl w-48 text-center drop-shadow-lg" href={researcher.linkTwohref}>{researcher.linkTwoName}</Link>: null}
                           
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export const getServerSideProps = async () => {
    const query = `*[_type == "researcher"]{
  bio,
  image,
  linkOnehref,
  linkOnename,
  linkTwohref,
  linkTwohref,
  linkTwoName,
  name,
}`;
    
    const libraryQuery = `*[_type == "libraries"]{
  location{
  lat,
  lng
},
 city,
 email,
 librarian,
 contactTitle,
 state,
 title,
 address
}`
    
    const researchers = await sanityClient.fetch(query);

    const libraries = await sanityClient.fetch(libraryQuery);
    return {
        props: {
            researchers,
            libraries
        }
    }
}

export default ourTeam


//  <Image src="/library.svg" height={40} width={40} alt="Library image"></Image>