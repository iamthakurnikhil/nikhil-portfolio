import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialMobile = () => {
  return (
    <div className='lg:hidden flex flex-col top-[35%] right-0  bg-gray-700'>
    <ul className='mb-28'>
        <li className='w-full h-[55px] bg-gray-700'>
            <a className='flex space-x-4 justify-center p-3 text-lg font-semibold items-center text-white ' href="https://github.com/iamthakurnikhil"><FaLinkedin size={25}/><span>LinkedIn</span></a>
        </li>
        <li className='w-full h-[55px]  bg-gray-700 space-x-3'>
            <a className='flex space-x-4 justify-center p-3 text-lg font-semibold items-center text-white' href="https://github.com/iamthakurnikhil"><FaGithub size={25}/>
            <span>Github</span></a>
        </li>
        <li className='w-full h-[55px] mr-[-90px] hover:ml-[-80px] duration-300 bg-gray-700 space-x-3'>
            <a className='flex space-x-4 justify-center p-3 text-lg font-semibold items-center text-white ' href="https://github.com/iamthakurnikhil"><FaTwitter size={25}/><span>Twitter</span></a>
        </li>
    </ul>
</div>
  )
}

export default SocialMobile