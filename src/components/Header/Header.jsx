import { useState, useEffect } from "react"
import { NavLink, Link } from "react-router-dom";
import { FiDownload } from 'react-icons/fi';

function Header(){
    // console.log("Navbar component is rendering");
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll = ()=>{
            // console.log("Scroll detected");
            if(window.scrollY > 20){
                setIsScrolled(true);
            }
            else{
                setIsScrolled(false);
            }
        }

        // Add event listener for scroll
        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener on component unmount
        return ()=>{
            // console.log("Removing scroll event listener");
            window.removeEventListener("scroll", handleScroll)
        }
        
    }, [])

    return(
        <div className="w-full fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-violet-500 to-fuchsia-500 overflow-hidden">
        <nav className={`pb-3 pt-3 md:pb-0 md:pt-0 transition-all duration-300 relative flex w-full items-center justify-between shadow-lg ${
          isScrolled ? "bg-zinc-900" : "bg-zinc-950"
        }`}>
            <h1 className="text-3xl ml-3 text-yellow-400"><Link to="/">Saniya</Link></h1>
            <ul className="hidden md:flex gap-8 items-center p-4 text-xl">
                <li className="rounded-lg px-2 py-2 hover:rotate-3 transition ease-in-out hover:bg-yellow-400 hover:rounded-lg">
                <NavLink className={({isActive})=> `${isActive? "border-b-2 border-yellow-400  py-2 px-2 text-white hover:text-black": " text-gray-400 hover:text-black"}`} to="/">Home</NavLink>
                </li>
                <li className="rounded-lg px-2 py-2 hover:rotate-3 transition ease-in-out hover:bg-yellow-400 hover:px-2 hover:py-2 hover:rounded-lg">
                <NavLink className={({isActive})=> `${isActive? "border-b-2 border-yellow-400  py-2 px-2 text-white hover:text-black": " text-gray-400 hover:text-black"}`} to="skills">Skills</NavLink>
                </li>
                <li className="rounded-lg px-2 py-2 hover:rotate-3 transition ease-in-out hover:bg-yellow-400 hover:px-2 hover:py-2 hover:rounded-lg">
                <NavLink className={({isActive})=> `${isActive? "border-b-2 border-yellow-400  py-2 px-2 text-white hover:text-black": " text-gray-400 hover:text-black"}`} to="projects">Projects</NavLink>
                </li>
                <li className="rounded-lg px-2 py-2 hover:rotate-3 transition ease-in-out hover:bg-yellow-400 hover:px-2 hover:py-2 hover:rounded-lg">
                <NavLink className={({isActive})=> `${isActive? "border-b-2 border-yellow-400  py-2 px-2 text-white hover:text-black": " text-gray-400 hover:text-black"}`} to="experience">Experience</NavLink>
                </li>
                <li className="rounded-lg px-2 py-2 hover:rotate-3 transition ease-in-out hover:bg-yellow-400 hover:px-2 hover:py-2 hover:rounded-lg">
                <NavLink className={({isActive})=> `${isActive? "border-b-2 border-yellow-400  py-2 px-2 text-white hover:text-black": " text-gray-400 hover:text-black"}`} to="contact">Contact</NavLink>
                </li>
            </ul>
             {isOpen && (
                <div className="fixed z-500 top-0 right-0 w-60 h-svh bg-white p-4 shadow md:hidden flex flex-col gap-2">
                 <button onClick={() => setIsOpen(!isOpen)} className="md:hidden mr-3">
                <svg className="w-6 h-6 ml-44" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? "M6 18L18 6M6 6l18 18" : "M4 6h16M4 12h16M4 18h16"}
                />
                </svg>
                </button>
                <div className="flex flex-col gap-6">
                <NavLink className={({isActive})=> `${isActive? "border-b-2 border-gray-950  py-2 px-2": " "}`} to="/">Home</NavLink>
                <NavLink className={({isActive})=> `${isActive? "border-b-2 border-gray-950  py-2 px-2": " "}`} to="skills">Skills</NavLink>
                <NavLink className={({isActive})=> `${isActive? "border-b-2 border-gray-950  py-2 px-2": " "}`} to="projects">Projects</NavLink>
                <NavLink className={({isActive})=> `${isActive? "border-b-2 border-gray-950  py-2 px-2": " "}`} to="experience">Experience</NavLink>
                <NavLink className={({isActive})=> `${isActive? "border-b-2 border-gray-950  py-2 px-2": " "}`} to="contact">Contact</NavLink>
                {/* <button className="px-3 py-2 rounded-3xl font-bold mr-3 bg-gray-950 text-white">Download CV</button> */}
                <a
                href="/Saniya_CV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-950 text-white px-4 py-2 rounded-3xl font-bold hover:bg-gray-800 transition duration-200"
                >
                <FiDownload className="text-white" />
                Download CV
                </a>
                </div>
                </div>
            )}
            {/* <button className="hidden md:block bg-white px-5 py-2 rounded-3xl font-bold mr-3 hover:bg-gray-950 hover:text-white">Download CV</button> */}
              <a
                href="/Saniya_CV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block bg-white px-5 py-2 rounded-3xl font-bold mr-3 hover:bg-gray-950 hover:text-white text-gray-950 transition duration-200"
                >
                <FiDownload className="inline pr-2 text-lg"/> Download CV
                </a>
              <button onClick={() => setIsOpen(!isOpen)} className="md:hidden mr-3">
                <svg className="w-6 h-6" fill="none" stroke={isOpen ? "currentColor" : "yellow"} viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? "M6 18L18 6M6 6l18 18" : "M4 6h16M4 12h16M4 18h16"}
                />
                </svg>
            </button>
        </nav>
        </div>
    )
}
export default Header