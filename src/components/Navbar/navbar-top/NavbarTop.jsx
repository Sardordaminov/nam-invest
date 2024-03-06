import React, { useState } from 'react'
import { NavbarTopStlyes, Container, LogoBx, ContainerItem, SearchBx, SearchIcon } from '../navbar.styles.js'
import Gerb from '../../../assets/logo/gerb.png'
import Logo from '../../../assets/logo/logo.png'
import { NavLink } from 'react-router-dom'

function NavbarTop() {
  const [lang, setLang] = useState(false)
  return (
    <NavbarTopStlyes>
      <Container>
        <LogoBx>
          <div className='logotype'>
            <NavLink to='/'><img className='gerb-logo' src={Gerb} alt="Gerb" /></NavLink>
            <NavLink to='/'><img className='nav-logo' src={Logo} alt="Logo" /></NavLink>
          </div>
          <div onClick={() => setLang(!lang)} className='multi-lang'>RU<i className={`fa-regular fa-chevron-down ${lang && "active"}`}></i></div>
        </LogoBx>
        <ContainerItem>
          <NavLink to='/'>Как мы помогаем</NavLink>
          <NavLink to='/'>Направить запрос</NavLink>
          <NavLink to='/'>Общенациональный пул инвестиционных проектов</NavLink>
        </ContainerItem>
        <SearchBx>
          <NavLink to='/search'><i className="fa-regular fa-magnifying-glass"></i></NavLink>
        </SearchBx>
      </Container>
    </NavbarTopStlyes>
  )
}

export default NavbarTop