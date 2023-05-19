import React, { useContext} from 'react';
// import images
import { Image1, Image2, Image3, Image4} from "../img"
//import Link
import { Link } from "react-router-dom"
// import motion
import { motion } from "framer-motion"
// import transition
import { transition1 } from "../transitions"
//import CurcosrProvider
import { CursorContext } from '../context/CursorContext';
const Portfolio = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)
  return (
  <motion.section
    initial={{ opacity:0, y:'100%' }}
    animate={{ opacity:1, y: 0 }}
    exit={{ opacity:0, y: "100%" }}
    transition={transition1}
    className='section'>
    <div className='container mx-auto h-full relative'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
        {/*---- Top[Text] ----*/}
        <motion.div 
          initial={{ opacity:0, y:'-80%' }}
          animate={{ opacity:1, y: 0 }}
          exit={{ opacity:0, y: "-80%" }}
          transition={transition1}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className='flex flex-col lg:items-start'>
          <h1 className='h1'>Portoflio</h1>
          <p className='mb-12 max-w-sm'>bled it to make a type specimen book. <b>It has survived</b> not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the .
          <br />
          <br />
          bled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the .
          </p>
          <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>Hire Me</Link>
        </motion.div>
        {/*---- Bottom[Images] ----*/}
        <div 
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='grid grid-cols-2 lg:gap-2'>
          {/* 1 */}
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img src={Image1} alt='image' className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'/>
          </div>

          {/* 2 */}
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img src={Image2} alt='image' className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'/>
          </div>

          {/* 3 */}
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img src={Image3} alt='image' className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'/>
          </div>

          {/* 4 */}
          <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
            <img src={Image4} alt='image' className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'/>
          </div>
        </div>

      </div>
    </div>
  </motion.section>
  )
};

export default Portfolio;
