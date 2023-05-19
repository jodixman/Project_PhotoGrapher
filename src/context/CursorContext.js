import React, { useState, useEffect, createContext } from 'react'

// create context
export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  //cursor position state
  const [ cursorPos, setCursorPos ] = useState({
    x:0,
    y:0,
  })
  // cusor bg state
  const [cursorBG, setCursorBG] = useState('default');

  const mobileViewportIsActive = window.innerWidth < 768;

  useEffect(() => {
    if (!mobileViewportIsActive) {
      const move = (e) => {
        setCursorPos({
          x: e.clientX,
          y: e.clientY,
        })
      }
  
      window.addEventListener('mousemove', move);
      // remove event
      return () => {
        window.removeEventListener('mousemove', move);
      }
    } else {
      setCursorBG('none')
    }

  });
    // mouse enter handler
    const mouseEnterHandler = () => {
      setCursorBG('text')
    };
    // mouse Leaver handler
    const mouseLeaveHandler = () => {
      setCursorBG('default')
    }
//cursor variants
  const cursorVariants = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor: "#0e1112"
    },
    text: {
      width: '150px',
      height: '150px',
      x: cursorPos.x - 72,
      y: cursorPos.y - 72,
      backgroundColor: '#fff',
      mixBlendMode: 'difference',
    },
    none: {
      width: 0,
      height: 0,
      backgroundColor: 'rgba(255,255,255, 1)',
    }
  }


  return (
    <CursorContext.Provider value={{ cursorVariants, cursorBG, mouseEnterHandler, mouseLeaveHandler }}>
      {children}
    </CursorContext.Provider>
  )
}

export default CursorProvider