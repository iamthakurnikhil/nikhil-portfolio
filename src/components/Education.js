import React from 'react'
import { SlCalender } from "react-icons/sl";

const Education = () => {
  return (
    <section id='education' className="w-full min-h-screen overflow-hidden">
      <div className='flex flex-col md:mt-0 justify-center items-center mb-4'>
          <div className='text-4xl font-bold '>QUALIFICATION</div>
          <div className='text-xl mt-1 text-teal-500'>My personal journey</div>
      </div>

      <div className='flex'>
        <div className='w-2/5 '>
          <div className='flex justify-end mt-[42px]'>
            <div>
              <h2 className='w-full text-center font-semibold text-xl'>C.B.S.E 10th</h2>
              <h4 className='text-lg ml-3 mt-1'>B.R.T School</h4>
              <div className='flex items-center space-x-2 justify-center'>
                <SlCalender/>
                <span>2014-16</span>
              </div>
            </div>
          </div>
          <div className='flex justify-end mt-[140px]'>
            <div>
              <h2 className='w-full text-center font-semibold text-xl'>B.C.A</h2>
              <h4 className='text-lg mt-1'>Apex University</h4>
              <div className='flex items-center space-x-2 justify-center'>
                <SlCalender/>
                <span>2019-22</span>
              </div>
            </div>
          </div>
        </div>
        <div className='w-1/5  relative' >
          <div className='flex justify-center'>
            <span className='mt-20 w-2 h-[240px] bg-teal-100 absolute'></span>
            <span className='mt-20 w-4 h-4 rounded-full  bg-teal-500 absolute'></span>
            <span className='mt-48 w-4 h-4 rounded-full  bg-teal-500 absolute'></span>
            <span className='mt-[304px] w-4 h-4 rounded-full  bg-teal-500 absolute'></span>
          </div>
          
        </div>
        <div className='w-2/5 '>
        <div className='flex justify-start mt-[152px]'>
            <div>
              <h2 className='w-full text-center font-semibold text-xl'>C.B.S.E 12th</h2>
              <h4 className='text-lg mt-1'>R.S.V No.4 Roop Nagar </h4>
              <div className='flex items-center space-x-2 justify-center'>
                <SlCalender/>
                <span>2016-18</span>
              </div>
            </div>
        </div>
        </div>
      </div>       

    </section>
  )
}

export default Education