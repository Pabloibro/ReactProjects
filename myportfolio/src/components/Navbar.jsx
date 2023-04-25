import React, { useState } from "react";
import { FaBars, FaTimes } from  "react-icons/fa"

function Navbar() {
    const [nav, setNav] = useState(false)
    const links = [
        {
            id:1,
            link: 'home'
        },
        {
            id:2,
            link: 'about us'
        },
        {
            id:3,
            link: 'project'
        },
        {
            id:4,
            link: 'experience'
        },
        {
            id:5,
            link: 'contact'
        },
    ]
    return (
        <>
           <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
            <div>
                <h1 className="text-5xl ml-2">Ibro</h1>
            </div>
            <ul className="hidden md:flex">
                {links.map(({ id, link}) => (
                    <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500"> {link} </li>

                ))}
            </ul>
            <div onClick = {() => setNav(!nav)} 
            className="cursor-pointer pr-4 z-10 text-gray-500">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
           </div>
        </>
    )
}

export default Navbar;





      