import React from 'react'
import { FiPhoneIncoming } from 'react-icons/fi'
import { HiMail } from 'react-icons/hi'

const Contact = () => {
  return (
    <section id='contact' className="w-full min-h-screen mt-24">
      <div className='flex flex-col mt-12 md:mt-0  justify-center items-center mb-4'>
          <div className='text-4xl font-bold '>CONTACT</div>
          <div className='text-xl mt-1 text-teal-500'>Get in touch</div>
      </div>
 
      <div className='flex flex-col md:flex-row'>
        <div className=' md:w-1/2 p-6 md:p-8 sm:ml-6 md:mt-8'>
              <div>
              <form
              action="https://formspree.io/f/xknawrqn"
              method="POST"
              className=" flex flex-col w-full md:w-4/5"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="p-2 bg-transparent border-2 rounded-md  focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                required
                className="my-4 p-2 bg-transparent border-2 rounded-md  focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                minLength={5}
                required
                className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
              ></textarea>

              <button className=" bg-gradient-to-r from-cyan-500 to-teal-500 font-semibold px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300" type='submit'>
                Let's talk
              </button>
            </form>
              </div>
        </div>
        <div className='w-2/2 bg-gray-700 text-white md:text-black md:bg-white flex flex-col items-center -mt-6 md:mt-32'>
            <div className='w-60 m-2'>
                <div className='flex p-2 items-center space-x-4'>
                  <span  className='md:text-xl text-teal-500'><FiPhoneIncoming/></span>
                  <span className='md:text-xl'>+91 9069301074</span>
                  
                </div>
            </div>
            <div className='w-60 m-2'>
                <div className='flex p-2 items-center space-x-4'>
                  <span className='md:text-xl text-teal-500'><HiMail/></span>
                  <span className='md:text-xl'>iamthakurnikhil@hotmail.com</span>
                  
                </div>
            </div>
        </div>
        
      </div>

    </section>
  )
}

export default Contact