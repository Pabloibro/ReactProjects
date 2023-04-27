import Image from '../assets/image1.jpg'
import { Link } from "react-scroll";
import { BsArrowRight } from 'react-icons/bs'

function Home() {
    return (
        <>
            <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white'>

                <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                    <div className='flex flex-col justify-center h-full'>
                        <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Software Developer</h2>
                        <p className='text-gray-500 py-4 max-w-md'>
                           I love to code beautiful software and I love what I do
                        </p>
                        <div>
                            <Link to='contact' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to blue-500 cursor-pointer'>
                                Contact Me
                                <span className='group-hover:rotate-90 duration-300'><BsArrowRight size={20} className='ml-1'/></span>
                            </Link>
                        </div>
                    </div>
                    <div className='w-1/3'>
                        <img src={Image} alt="my profile" className='rounded-2xl mx-auto h-72 w-auto md:w-full'/>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home