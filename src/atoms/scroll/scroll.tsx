import React, { FunctionComponent, useEffect, useState } from 'react'
import throttle from 'lodash/throttle'
import './scroll.css'

const Scroll: FunctionComponent = ({ children }) => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    console.log('add scroll event')
    return () => {
      window.removeEventListener('scroll', handleScroll)
      console.log('remove scroll event')
    };
  }, [])

  const [scrollYPos, setScrollYPos] = useState(window.pageYOffset)
  const [vis, setVis] = useState(true)

  const handleScroll = () => {
    console.log('handle scroll')
    const currentScrollPos = window.pageYOffset;
    const visible = scrollYPos > currentScrollPos;

    setScrollYPos(currentScrollPos)
    setVis(visible)
  };
  
  return (
      <section id='navbar' className={vis ? 'nav-show' : 'nav-hide'}>
        {children}
      </section>
  )
}

export default Scroll