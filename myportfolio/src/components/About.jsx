
function About(){
    return (
        <>
            <div name='about'className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
                <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                    <div className="pb-8">
                        <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                    </div>
                    <p className="text-xl mt-20">
                        I am Ibrahim Ogundipe from Lagos, Nigeria. I have a Bachelor degree in Statistics from Ekiti State University, I Currently work as an Audit Associate from Truluck International Limited.
                    </p>
                    <br />
                    <p className="text-xl">
                        I started coding in 2021. I have 2 years of experience building and designing applications.
                            I love to work on web application using technology like React, Tailwind, Django and GraphQl.
                            Currently, I learning Docker and Cloud Technologies (like Google cloud). 
                            I am available for internship and project opportunities 
                    </p>
                </div>

            </div>
        </>
    )
}

export default About;