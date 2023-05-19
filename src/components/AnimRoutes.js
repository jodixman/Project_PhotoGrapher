import React from 'react'
import { Home, About, Portfolio, Contact } from "../pages"

import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/contact' element={<Contact />}/>
    </Routes>
    </AnimatePresence>
  )
}

export default AnimRoutes