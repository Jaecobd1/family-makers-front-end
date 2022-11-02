import Menu from '../public/menu.svg';
import X from '../public/x.svg'
import { useState } from 'react'
import Link from 'next/link'

function Nav() {
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
        <nav className={!menuActive ? "flex justify-between bg-primary h-24 items-center sticky top-0 z-10" : "h-screen w-screen bg-primary sticky top-0 z-10"} >
            
            <div className="items-center h-24 w-screen flex justify-between">
                <div className="text-white">
          <Link href="/" className="p-4">Family Makers</Link>
        </div>

        <div id="links" className="hidden text-white md:flex justify-around w-8/12 items-center text-center mr-2 h-full ">
                    <Link className="navLink" href="/" >Home</Link>
                    <Link href="our-team" className="navLink" >Our Team</Link>
                    <Link href="curriculum" className="navLink"  >Family Makers Curriculum</Link>
                    <Link href="training-materials" className="navLink" >Training Materials</Link>
                    <Link href="publications" className="navLink" >Publications</Link>
                    <Link href="news"className="navLink"  >News</Link>
                    <Link href="gallery" className="navLink" >Gallery</Link>
                    <Link href="contact" className="navLink" >Contact</Link>
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

export default Nav
