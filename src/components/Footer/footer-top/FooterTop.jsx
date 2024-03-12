import React from 'react'
import { FooterTopStyle, Container, LogoBx, Item, SecItem } from '../footer.styles'
import Gerb from '../../../assets/logo/gerb.png'
import Logo from '../../../assets/logo/logo_blk.png'
import { Link } from 'react-router-dom'
import { navbarData } from '../../../data/data'
const FooterTop = () => {
    return (
        <FooterTopStyle>
            <Container>
                <LogoBx>
                    <Link to='/'><img className='gerb-logo' src={Gerb} alt="Gerb" /></Link>
                    <Link to='/'><img className='nav-logo' src={Logo} alt="Logo" /></Link>
                </LogoBx>
                <Item>
                    {navbarData.map((el) => (
                        <Link to={el.pathName} key={el.id}>{el.name}</Link>
                    ))}
                </Item>
                <SecItem>
                    <h3>Пользователю</h3>
                    <p>Как мы помогаем</p>
                    <p>Направить запрос</p>
                    <p>Общенациональный пул <br /> инвестиционных проектов</p>
                    <p>Контакты</p>
                </SecItem>
            </Container>
        </FooterTopStyle>
    )
}

export default FooterTop