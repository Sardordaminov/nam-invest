import React from 'react'
import { Container, FooterBottomStyle } from '../footer.styles'
import { Link } from 'react-router-dom'

const FooterBottom = () => {
  return (
    <FooterBottomStyle>
      <Container>
        <p>© 2024 АО "НК NAM INVEST”</p>
        <Link to='/anti-corruption/'>Противодействие коррупции</Link>
        <p>Разработано: <a target='_blank' rel='noreferrer' href="https://sd-portfolio.vercel.app/">SD</a></p>
      </Container>
    </FooterBottomStyle>
  )
}

export default FooterBottom