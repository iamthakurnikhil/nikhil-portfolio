import React from 'react'
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import frontend from '../assests/frontend.png'
import devops from '../assests/devops.png'


function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 mt-[14px] md:mt-[10px] ml-[-1rem] md:ml-[-15.5rem] transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}


const Skills = () => {

  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <section id='skills' className="w-full min-h-screen mt-16 md:mt-0">
        <Fragment>
        <div className='flex flex-col  md:mt-0 justify-center items-center'>
          <div className='text-4xl font-bold '>SKILLS</div>
          <div className='text-xl mt-1 text-teal-500'>My technical work</div>
        </div>

        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
          <div className='flex items-center justify-between ml-4 md:ml-20 mt-6 '>
            <div className='flex items-center space-x-4 '>
              <img src={frontend} className='w-[3rem] h-[3rem] md:w-[5rem] md:h-[5rem]'></img>
              <div className='text-xl md:text-3xl font-semibold'>Frontend Developer</div>
            </div>
          </div>
          </AccordionHeader>
          <AccordionBody>
            <div>
              <div className='flex justify-between ml-20  md:ml-40 w-[70%]'>
                <div>HTML</div>
                <div>90%</div>
              </div>
              <span style={{}} className='mt-1 ml-20  md:ml-40 absolute  bg-teal-100 w-[70%] h-3 rounded-md'/>
              <span style={{}} className='mt-1 ml-20  md:ml-40 absolute  bg-teal-500 w-[63%] h-3 rounded-md'/>              
            </div>
          </AccordionBody>

          <AccordionBody>
            <div>
              <div className='flex mt-3 ml-20 justify-between md:ml-40 w-[70%]'>
                <div>CSS</div>
                <div>80%</div>
              </div>

              <span style={{}} className='mt-1 ml-20 md:ml-40 absolute  bg-teal-100 w-[70%] h-3 rounded-md'/>
              <span style={{}} className={`mt-1 ml-20 md:ml-40 absolute  bg-teal-500 w-[56%] h-3 rounded-md`}/>              
            </div>
          </AccordionBody>   

          <AccordionBody>
            <div>
              <div className='flex ml-20 mt-4 justify-between md:ml-40 w-[70%]'>
                <div>JavaScript</div>
                <div>95%</div>
              </div>

              <span style={{}} className='mt-1 ml-20 md:ml-40 absolute  bg-teal-100 w-[70%] h-3 rounded-md'/>
              <span style={{}} className={`mt-1 ml-20 md:ml-40 absolute  bg-teal-500 w-[66.5%] h-3 rounded-md`}/>              
            </div>
          </AccordionBody>
          <AccordionBody>
            <div>
              <div className='flex mt-4 ml-20 justify-between md:ml-40 w-[70%]'>
                <div>React and Redux</div>
                <div>85%</div>
              </div>

              <span style={{}} className='mt-1 ml-20 md:ml-40 absolute  bg-teal-100 w-[70%] h-3 rounded-md'/>
              <span style={{}} className={`mt-1 ml-20 md:ml-40 absolute  bg-teal-500 w-[59.5%] h-3 rounded-md`}/>              
            </div>
          </AccordionBody>  

          <AccordionBody>
            <div>
              <div className='flex mt-4 ml-20 justify-between md:ml-40 w-[70%]'>
                <div>Tailwind CSS and Material Ui</div>
                <div>80%</div>
              </div>

              <span style={{}} className='mt-1 ml-20 md:ml-40 absolute  bg-teal-100 w-[70%] h-3 rounded-md'/>
              <span style={{}} className={`mt-1 ml-20 md:ml-40 absolute  bg-teal-500 w-[56%] h-3 rounded-md`}/>              
            </div>
          </AccordionBody> 

          <AccordionBody>
            <div>
              <div className='flex mt-4 ml-20 justify-between md:ml-40 w-[70%]'>
                <div>React Native</div>
                <div>60%</div>
              </div>

              <span style={{}} className='mt-1 ml-20 md:ml-40 absolute  bg-teal-100 w-[70%] h-3 rounded-md'/>
              <span style={{}} className={`mt-1 ml-20 md:ml-40 absolute  bg-teal-500 w-[42%] h-3 rounded-md`}/>              
            </div>
          </AccordionBody> 
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)}>
          <div className='flex items-center justify-between w-[76%] md:ml-12 mt-6 '>
            <div className='flex items-center '>
              <img src={devops} className='w-[5rem] h-[5rem] md:w-[8rem] md:h-[8rem] mt-2 '></img>
              <div className='text-xl md:text-3xl font-semibold '>DevOps Developer</div>
            </div>
            
          </div>
          </AccordionHeader>

          <AccordionBody>
            <div>
              <div className='flex justify-between ml-20 md:ml-40 w-[70%] mt-[-2px]'>
                <div>Linux and Networking</div>
                <div>90%</div>
              </div>
              <span style={{}} className='mt-1 ml-20  md:ml-40 absolute  bg-teal-100 w-[70%] h-3 rounded-md'/>
              <span style={{}} className='mt-1 ml-20  md:ml-40 absolute  bg-teal-500 w-[63%] h-3 rounded-md'/>              
            </div>
          </AccordionBody>

          <AccordionBody>
            <div>
              <div className='flex mt-2.5 ml-20  justify-between md:ml-40 w-[70%]'>
                <div>Docker</div>
                <div>80%</div>
              </div>

              <span style={{}} className='mt-1 ml-20  md:ml-40 absolute  bg-teal-100 w-[70%] h-3 rounded-md'/>
              <span style={{}} className={`mt-1 ml-20 md:ml-40 absolute  bg-teal-500 w-[56%] h-3 rounded-md`}/>              
            </div>
          </AccordionBody>   

          <AccordionBody>
            <div>
              <div className='flex mt-3 ml-20  justify-between md:ml-40 w-[70%]'>
                <div>Jenkins</div>
                <div>80%</div>
              </div>

              <span style={{}} className='mt-1 ml-20  md:ml-40 absolute  bg-teal-100 w-[70%] h-3 rounded-md'/>
              <span style={{}} className={`mt-1 ml-20  md:ml-40 absolute  bg-teal-500 w-[56%] h-3 rounded-md`}/>              
            </div>
          </AccordionBody>
          <AccordionBody>
            <div>
              <div className='flex mt-3 ml-20  justify-between md:ml-40 w-[70%]'>
                <div>Kubernetes</div>
                <div>50%</div>
              </div>

              <span style={{}} className='mt-1 ml-20  md:ml-40 absolute  bg-teal-100 w-[70%] h-3 rounded-md'/>
              <span style={{}} className={`mt-1 ml-20  md:ml-40 absolute  bg-teal-500 w-[35%] h-3 rounded-md`}/>              
            </div>
          </AccordionBody>  

          <AccordionBody>
            <div>
              <div className='flex mt-3 ml-20  justify-between md:ml-40 w-[70%]'>
                <div>AWS</div>
                <div>70%</div>
              </div>

              <span style={{}} className='mt-1 ml-20  md:ml-40 absolute  bg-teal-100 w-[70%] h-3 rounded-md'/>
              <span style={{}} className={`mt-1 ml-20  md:ml-40 absolute  bg-teal-500 w-[49%] h-3 rounded-md`}/>              
            </div>
          </AccordionBody>
        </Accordion>
      </Fragment>
    </section>
  )
}

export default Skills