import React from 'react'
import NavbarTop from '../navbar-top/NavbarTop'
import { NavbarMain } from '../navbar.styles'
import NavbarBottom from '../navbar-bottom/NavbarBottom'

function Navbar() {
  return (
    <NavbarMain>
      <NavbarTop />
      <NavbarBottom />
    </NavbarMain>
  )
}

export default Navbar