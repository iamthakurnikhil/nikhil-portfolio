import React from 'react'
import Dp from '../assests/nikhil.png'
import Typed from "react-typed"
import resume from '../assests/Nikhil-Resume.pdf'


const Home = () => {

  return (
    <home >
        <div className='w-full h-screen overflow-hidden grid grid-rows-2 md:grid-cols-2'>
            <div className=' flex flex-col w-full h-full items-center justify-center overflow-hidden md:h-screen'>
                <h2 className='font-semibold text-2xl md:text-3xl  mb-4'>Hi, I'm</h2>
                <h1 className='font-bold text-5xl md:text-5xl lg:text-7xl text-teal-500'>Nikhil Thakur</h1>
                <h3 className='mt-4 text-3xl md:text-3xl lg:text-4xl font-semibold'>
                <Typed 
                        strings = {[
                            'Frontend Developer',
                            "DevOps Developer"
                        ]}
                        loop
                        typeSpeed={150}
                        backSpeed ={150}
                    />
                    
                </h3>

                <div className='flex space-x-4 mt-10'>
                <a href="#contact" >
                    <button className=' border-4 
                   hover:scale-110 ease-out duration-300 border-teal-500 p-2 text-teal-600 font-bold text-lg rounded-xl s'>Contact Me</button>
                </a>
                <a href={resume}
                download={true}
                target="_blank"
                rel="noreferrer">
                    <button className='hover:scale-110 ease-out duration-300  bg-teal-500 text-white p-3 font-bold text-lg rounded-xl'> Download CV</button>
                </a>
                </div>

                
            </div>
            <div className='w-full h-full items-center flex overflow-hidden md:h-screen'>
                <div className="mx-auto mt-4 bg-gradient-to-b from-teal-600 rounded-full w-80 h-80 relative overflow-hidden md:mt-[-2rem] md:h-96 md:w-96">
                    <img className='ml-[-15px] ' src={Dp} layout="fill" objectFit="left"></img>
                </div>
            </div>
        </div>
    </home>
  )
}

export default Home