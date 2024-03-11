import React, { useEffect, useState } from 'react'
import NavbarTop from '../navbar-top/NavbarTop'
import { NavbarMain } from '../navbar.styles'
import NavbarBottom from '../navbar-bottom/NavbarBottom'

function Navbar() {
  const [nav, setNav] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1) {
        setNav(true);
      } else {
        setNav(false)
      }
    });
  }, []);
  return (
    <NavbarMain className={`main-nav ${nav && 'active'}`}>
      <NavbarTop />
      <NavbarBottom />
    </NavbarMain>
  )
}

export default Navbar