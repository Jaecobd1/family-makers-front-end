import Image from 'next/image'


function ourTeam() {

    function Profile() {
        return (
            <>
                

                </>
        )
    }


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
            <Image src="/library.svg" height={40} width={40} alt="Library image"></Image>
            <div id="subTitle" className="flex justify-center mt-20">
                <h2>Research Team</h2>
            </div>
        </div>
    )
}

export default ourTeam
