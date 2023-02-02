import React, { useState } from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { BsClipboardData } from "react-icons/bs";
import { MdCastForEducation } from "react-icons/md";
import { MdContactMail } from "react-icons/md";



const Navbar = () => {

    const[activeNav, setActiveNav] = useState("#")

  return (
    <nav>
      <a href='#' onClick={()=> setActiveNav("#")} className={activeNav === "#" ? 'active': ""} ><AiOutlineHome/></a>

      <a href='#skills' onClick={()=> setActiveNav("skills")} className={activeNav === 'skills' ? 'active': ""}><GiSkills/></a>

      <a href='#education' onClick={()=> setActiveNav("education")} className={activeNav === 'education' ? 'active': ""}><MdCastForEducation/></a>

      <a href='#portfolio' onClick={()=> setActiveNav("portfolio")} className={activeNav === 'portfolio' ? 'active': ""}><BsClipboardData/></a>

      <a href='#contact' onClick={()=> setActiveNav("contact")} className={activeNav === 'contact' ? 'active': ""}><MdContactMail/></a>
      
    </nav>
  )
}

export default Navbar