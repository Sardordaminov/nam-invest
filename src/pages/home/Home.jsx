import React from 'react'
import { HomeStyles, HomeItem, HomeTitle, HomeItemBtn } from './home.styles'
import { Container } from '../../components/Navbar/navbar.styles'

const Home = () => {
  return (
    <HomeStyles>
      <Container>
        <HomeItem>
          <HomeTitle>ИНВЕСТИРУЙТЕ  В УЗБЕКИСТАН</HomeTitle>
          <a href="https://uzinvest.uz/" target='_blank' rel='noreferrer'><HomeItemBtn>Национальная цифровая инвестиционная платформа </HomeItemBtn></a>
        </HomeItem>
        
      </Container>
    </HomeStyles>
  )
}

export default Home