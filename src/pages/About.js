import React, { useContext} from 'react';
// import image
import { Woman } from "../img"
// import Link
import { Link } from "react-router-dom"
// import motion
import { motion } from "framer-motion"
// import transition
import { transition1 } from "../transitions"
// import CursorProvider
import { CursorContext } from '../context/CursorContext';

const About = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)
  return(
  <motion.section
    initial={{ opacity:0, y:'100%' }}
    animate={{ opacity:1, y: 0 }}
    exit={{ opacity:0, y: "100%" }}
    transition={transition1}
    className='section'>
    <div 
    onMouseEnter={mouseEnterHandler}
    onMouseLeave={mouseLeaveHandler}
    className='container mx-auto h-full relative'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
        {/*---- Kiri[Image] ----*/}
        <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
          <img src={Woman} alt='woman'/>
        </div>
        {/*---- Kanan[Text] ----*/}
        <motion.div
          initial={{ opacity:0, y:'-80%' }}
          animate={{ opacity:1, y: 0 }}
          exit={{ opacity:0, y: "-80%" }}
          transition={transition1}
          className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
          <h1 className='h1'>About Me</h1>
          <p className='mb-12 max-w-sm'>bled it to make a type specimen book. <b>It has survived</b> not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the .
          <br />
          <br />
          bled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the .
          </p>

          <Link to={'/portofolio'} className='btn'>View my work</Link>
        </motion.div>
      </div>
    </div>
  </motion.section>
  )
};

export default About;
