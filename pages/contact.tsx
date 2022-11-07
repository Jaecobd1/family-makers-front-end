function contact() {
    return (
        <div>
            <div className="flex flex-col items-center">
                <h1 className="text-2xl m-10">Contact Family Makers</h1>
                <h2>Leave us your name, number, email, and message and we will get back to you as soon as we can</h2>
            </div>
            <form action="" className="mx-auto w-9/12 m-20 flex md:flex-row flex-col gap-10 flex-wrap items-center justify-start">
                <div className="flex flex-col w-full lg:w-96"><label htmlFor="fName">First Name:</label>
                <input type="text" name="fName" id="fName" placeholder="First Name..." className="w-full lg:w-96"/></div>
               <div className="flex flex-col w-full lg:w-96"> <label htmlFor="lName">Last Name:</label>
                <input type="text" name="lName" id="lName" placeholder="Last Name..." className="w-full lg:w-96" /></div>
                <div className="flex flex-col w-full lg:w-96">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="Email..." className="w-full lg:w-96" />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="message">Message:</label>
                    <input type="text" name="message" id="message" placeholder="Message..." className="w-full" />
                </div>
                <button className="bg-primary px-20 py-10 rounded-lg
                hover:bg-grey text-white box-shadow-lg">Send Message</button>
            </form>
        </div>
    )
}

export default contact
