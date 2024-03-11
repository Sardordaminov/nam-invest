import React from 'react'
import { FooterTopStyle, Container, LogoBx } from '../footer.styles'
import Gerb from '../../../assets/logo/gerb.png'
import Logo from '../../../assets/logo/logo.png'
import { Link } from 'react-router-dom'
const FooterTop = () => {
    return (
        <FooterTopStyle>
            <Container>
                <LogoBx>
                    <Link to='/'><img className='gerb-logo' src={Gerb} alt="Gerb" /></Link>
                    <Link to='/'><img className='nav-logo' src={Logo} alt="Logo" /></Link>
                </LogoBx>
            </Container>
        </FooterTopStyle>
    )
}

export default FooterTop