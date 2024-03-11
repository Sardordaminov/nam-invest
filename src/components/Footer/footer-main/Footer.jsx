import React from 'react'
import { FooterStyle } from '../footer.styles'
import FooterTop from '../footer-top/FooterTop'
import FooterBottom from '../footer-bottom/FooterBottom'

const Footer = () => {
  return (
    <FooterStyle>
      <FooterTop />
      <FooterBottom />
    </FooterStyle>
  )
}

export default Footer