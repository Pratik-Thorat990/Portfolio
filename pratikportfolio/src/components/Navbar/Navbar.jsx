import React, { useEffect } from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("");

  const [isScrolled, setIsScrolled] = useState(false);

  // Check scroll and change navbar background

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[]);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(SectionId);
    setIsOpen(false); // Close the menu after clicking an item
  }

  const menuItems = [
    {id: "about", label: "About"},
    {id: "skills", label: "Skills"},
    {id: "experience", label: "Experience"},
    {id: "work", label: "Work"},
    {id: "projects", label: "Projects"},
    {id: "education", label: "Education"},
    {id: "contact", label: "Contact"},

  ]

  return (
    <nav className={'fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled ? "bg-[#050414] bg-opacity-50 background-blur-md shadow-md":"bg-transparent"} '}>
      <div className='md:flex space-x-20 text-white py-5 justify-beetween items-center'> 
        {/* Logo */}
        <div className='text-lg font-semibold cursor-pointer'>
          <span className='text-[#8245ec]'>&lt;</span>
          <span className='text-white'>Pratik</span>
          <span className='text-[#8245ec]'>/</span>
          <span className='text-white'>Thorat</span>
          <span className='text-[#8245ec]'>&gt;</span>
        </div>
        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-8 text-gray-300'> 
          {menuItems.map((item) => (
            <li key={item.id} className="cursor-pointer hover:text-[#8245ec] ${activeSection ===item.id ? 'text-[#8245ec]' : ''}">
                <button onClick={()  => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
            </li>
          ))}
        </ul>

        <div className='hidden md:flex space-x-4'> 
          <a 
            href='https://github.com/Pratik-Thorat990'
            target='_blank'
            rel='noopener noreferrer'
            className= "text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24}/>
          </a>

          <a 
            href='https://www.linkedin.com/in/pratik-thorat14/'
            target='_blank'
            rel='noopener noreferrer'
            className= "text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24}/>
          </a>
        </div>

        {/* Mobile Menu Icons */}
        <div className ='md:hidden'>
          {
            isOpen ? (
              <FiX className='text-3xl text-[#8245ec] cursor-pointer'
              onClick={() => setIsOpen(false)} />
            ) : (
              <FiMenu className='text-3xl text-[#8245ec] cursor-pointer'
              onClick={() => setIsOpen(true)} />
            )
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar
