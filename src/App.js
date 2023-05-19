import React, { useContext } from 'react';
// import components
import { Header, AnimRoutes } from "./components"
//import router
import { BrowserRouter as Router } from 'react-router-dom'
// import motion
import { motion } from 'framer-motion';
// import cursorProvider
import { CursorContext } from "./context/CursorContext"

const App = () => {
  // Cursor
  const { cursorVariants, cursorBG } = useContext(CursorContext)
  return( 
    <>
     <Router>
        <Header />
        <AnimRoutes />
      </Router> 
      {/* Cursor */}
      <motion.div 
      variants={cursorVariants}
      animate={cursorBG}
      className='w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full'></motion.div>
    </>
  ) 
};

export default App;
