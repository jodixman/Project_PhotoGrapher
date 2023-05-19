import React, { useContext} from 'react'
// import components
import { Socials, MobileNav } from './index'
import { Logo } from "../img"

//import link
import { Link } from 'react-router-dom'
import { CursorContext } from '../context/CursorContext'

const Header = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)
  return (
    <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-row lg:flex-row lg:items-center w-full justify-between'>
        {/*===== Kiri[Logo] =====*/}
        <Link 
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        to={'/'}>
          <img src={Logo} alt=""/>
        </Link>

        {/*===== Kanan =====*/}
        <nav 
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='xl:flex gap-x-12 font-semibold hidden'>
          <Link to={'/'} className='text-[#696c6d] hover:text-primary transition'>
            Home
          </Link>
          <Link to={'/about'} className='text-[#696c6d] hover:text-primary transition'>
            About Me
          </Link>
          <Link to={'/portfolio'} className='text-[#696c6d] hover:text-primary transition'>
            Portfolio
          </Link>
          <Link to={'/contact'} className='text-[#696c6d] hover:text-primary transition'>
            Contact
          </Link>
        </nav>

        {/* Socials */}
        <Socials />
        {/* Mobile Nav */}
        <MobileNav />

      </div>
    </header>
  )
}

export default Header