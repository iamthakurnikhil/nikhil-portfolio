import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Social = () => {
  return (
    <div className='hidden lg:flex flex-col top-[35%] right-0 fixed '>
        <ul>
            <li className='w-[130px] h-[55px] mr-[-90px] hover:ml-[-80px] duration-300 bg-gray-700 space-x-3 '>
                <a className='flex justify-between p-3 text-lg font-semibold items-center text-white ' href="https://github.com/iamthakurnikhil"><FaLinkedin size={25}/>LinkedIn</a>
            </li>
            <li className='w-[130px] h-[55px] mr-[-90px]  hover:ml-[-80px] duration-300 bg-gray-700 space-x-3'>
                <a className='flex justify-between p-3 text-lg font-semibold items-center text-white  ' href="https://github.com/iamthakurnikhil"><FaGithub size={25}/>Github</a>
            </li>
            <li className='w-[130px] h-[55px] mr-[-90px] hover:ml-[-80px] duration-300 bg-gray-700 space-x-3'>
                <a className='flex justify-between p-3 text-lg font-semibold items-center text-white ' href="https://github.com/iamthakurnikhil"><FaTwitter size={25}/>Twitter</a>
            </li>
        </ul>
    </div>
  )
}

export default Social