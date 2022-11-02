import Link from 'next/link'
function Footer() {
    return (
        <div className="bg-primary mt-20">
            <div className="link-container display flex justify-around w-9/12 mx-auto md:flex-row flex-col items-center text-center gap-12 text-white p-5">
                <Link href="/">Home</Link>
                <Link href="/our-team">Our Team</Link>
                <Link href="/curriculum">Family Makers Curriculum</Link>
                <Link href="/training">Training Materials</Link>
                <Link href="gallery">Gallery</Link>
                <Link href="news">News</Link>
                <Link href="contact">Contact Us</Link>
            </div>
            <div className="copyright mx-auto flex w-fit text-white mt-5">
                <span>
                    <p>Copyright &copy; Family Makers 2022 </p>
                </span>
            </div>
        </div>
    )
}

export default Footer
