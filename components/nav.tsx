import Menu from '../public/menu.svg';
import X from '../public/x.svg'
import { useState } from 'react'
import Link from 'next/link'

function nav() {
    const [menuActive, setMenuActive] = useState(false);

    // Checks if the menu is Active
    

    function VerticalMenu() {
        return (
            <>
                <X />
               
            </>
        )
    }

    function clickHandler() {
        setMenuActive(!menuActive)
    }

    function navLinkListener() {
        setMenuActive(false)
    }

    return (
        <nav className={!menuActive ? "flex justify-between bg-primary h-24 items-center" : "h-screen w-screen bg-primary "} >
            
            <div className="items-center h-24 w-screen flex justify-between">
                <div className="text-white">
          <Link href="/" className="p-4">Family Makers</Link>
        </div>

        <div id="links" className="hidden text-white md:flex justify-around w-8/12 items-center text-center gap-3 mr-2">
                    <Link href="/" >Home</Link>
                    <Link href="our-team" >Our Team</Link>
                    <Link href="curriculum" >Family Makers Curriculum</Link>
                    <Link href="training-materials">Training Materials</Link>
                    <Link href="publications">Publications</Link>
                    <Link href="news" >News</Link>
                    <Link href="gallery">Gallery</Link>
                    <Link href="contact">Contact</Link>
            </div>
            
            <div id="menu" className="md:hidden p-5 ">
                <button onClick={clickHandler} >
                    {!menuActive?<Menu/>:<VerticalMenu />}
               </button>
                </div>
               
        </div>
         <div className={!menuActive?"hidden":"flex flex-col items-center justify-around h-5/6 text-white" }>
                    <Link href="our-team" onClick={navLinkListener}>Our Team</Link>
                    <Link href="curriculum" onClick={navLinkListener}>Family Makers Curriculum</Link>
                    <Link href="training-materials" onClick={navLinkListener}>Training Materials</Link>
                    <Link href="publications" onClick={navLinkListener}>Publications</Link>
                    <Link href="news" onClick={navLinkListener}>News</Link>
                    <Link href="gallery" onClick={navLinkListener}>Gallery</Link>
                    <Link href="contact" onClick={navLinkListener}>Contact</Link>
                </div>

      </nav>
    )
}

export default nav
