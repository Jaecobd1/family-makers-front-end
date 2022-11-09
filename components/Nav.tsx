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
        <nav className={!menuActive ? "flex justify-between rounded-br-xl rounded-bl-xl bg-white h-24 items-center sticky top-0 z-10 drop-shadow-lg " : "h-screen w-screen bg-white sticky top-0 z-10"} >
            
            <div className="items-center h-24 w-screen flex justify-between">
                <div className="text-primary">
          <Link href="/" className="p-4">Family Makers</Link>
        </div>

        <div id="links" className="hidden text-primary md:flex justify-around w-8/12 items-center text-center mr-2 h-full text-xs md:text-sm lg:text-base">
                    <Link className="navLink" href="/" >Home</Link>
                    <Link href="our-team" className="navLink" >Our Team</Link>
                    <Link href="curriculum" className="navLink"  >Family Makers Curriculum</Link>
                    <Link href="training-materials" className="navLink" >Training Materials</Link>
                    <Link href="publications" className="navLink" >Publications</Link>
                    <Link href="news"className="navLink"  >News</Link>
                    <Link href="gallery" className="navLink" >Gallery</Link>
                    <Link href="contact" className="navLink" >Contact</Link>
            </div>
            
            <div id="menu" className="md:hidden p-5">
                <button onClick={clickHandler} >
                    {!menuActive?<Menu/>:<VerticalMenu />}
               </button>
                </div>
               
        </div>
            <div className={!menuActive ? "hidden" : "flex flex-col items-center justify-around h-5/6 text-primary"}>
                <Link href="/" onClick={navLinkListener} className="border-b-primary border-b-2 p-5">Home</Link>
                    <Link href="our-team" className="border-b-primary border-b-2 p-5" onClick={navLinkListener}>Our Team</Link>
                    <Link className="border-b-primary border-b-2 p-5" href="curriculum" onClick={navLinkListener}>Family Makers Curriculum</Link>
                    <Link href="training-materials" className="border-b-primary border-b-2 p-5" onClick={navLinkListener}>Training Materials</Link>
                    <Link className="border-b-primary border-b-2 p-5" href="publications" onClick={navLinkListener}>Publications</Link>
                    <Link className="border-b-primary border-b-2 p-5" href="news" onClick={navLinkListener}>News</Link>
                    <Link className="border-b-primary border-b-2 p-5" href="gallery" onClick={navLinkListener}>Gallery</Link>
                    <Link className="border-b-primary border-b-2 p-5" href="contact" onClick={navLinkListener}>Contact</Link>
                </div>

      </nav>
    )
}

export default Nav
