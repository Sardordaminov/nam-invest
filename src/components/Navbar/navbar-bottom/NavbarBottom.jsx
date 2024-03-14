import React from 'react'
import { Container, NavbarBot, NavItems, NavItem, NavItemModal, NavItemModalBx } from '../navbar.styles'
import { navbarData } from '../../../data/data'
import { NavLink } from 'react-router-dom'

const NavbarBottom = () => {
    return (
        <NavbarBot>
            <Container>
                {navbarData.map((el) => (
                    <NavItems key={el.id}>
                        <NavItem>{el.name}<i className={`fa-regular fa-chevron-down`}></i>
                            <NavItemModalBx className='nav-item-modal-box'>
                                {el.modalData.map((modal) => (
                                    <NavItemModal key={modal.id}>
                                        <NavLink to={modal.pathName}>{modal.name}</NavLink>
                                    </NavItemModal>
                                ))}
                            </NavItemModalBx>
                        </NavItem>
                    </NavItems>
                ))}
            </Container>
        </NavbarBot>
    )
}

export default NavbarBottom