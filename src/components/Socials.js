import React, { useContext} from 'react'
// import icons
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube
} from "react-icons/im"
import { CursorContext } from '../context/CursorContext'

const Socials = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)
  return (
    <div 
    onMouseEnter={mouseEnterHandler}
    onMouseLeave={mouseLeaveHandler}
    className='hidden xl:flex ml-24'>
      <ul className='flex gap-x-4'>

        {/* Facebook */}
        <li>
          <a href='https://www.facebook.com/' target="_blank">
            <ImFacebook></ImFacebook>
          </a>
        </li>

        {/* Twitter */}
        <li>
          <a href='https://www.twitter.com/' target="_blank">
            <ImTwitter></ImTwitter>
          </a>
        </li>

        {/* Pinterest */}
        <li>
          <a href='https://www.pinterest.com/' target="_blank">
            <ImPinterest></ImPinterest>
          </a>
        </li>

        {/* Instagram */}
        <li>
          <a href='https://www.instagram.com/' target="_blank">
            <ImInstagram></ImInstagram>
          </a>
        </li>

        {/* Youtube */}
        <li>
          <a href='https://www.youtube.com/' target="_blank">
            <ImYoutube></ImYoutube>
          </a>
        </li>

      </ul>
    </div>
  )
}

export default Socials