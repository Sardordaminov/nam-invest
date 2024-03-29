import React from 'react'
import { HomeStyles, Header, HomeItem, HomeTitle, HomeItemBtn, HomeSocialIcons, HomeSupport, HomeSupportTitle, HomeSupportItems, HomeSupportItem } from './home.styles'
import { Container } from '../../components/Navbar/navbar.styles'
import HomeSlider from '../../components/Slider/home-slider/HomeSlider'
import News from '../../components/News/News'
import HomePartners from '../../components/HomePartners/HomePartners'
import { support } from '../../data/data'

const Home = () => {
  return (
    <HomeStyles>
      <Container>
        <Header>
          <HomeItem>
            <HomeTitle>ИНВЕСТИРУЙТЕ  В УЗБЕКИСТАН</HomeTitle>
            <a href="https://uzinvest.uz/" target='_blank' rel='noreferrer'><HomeItemBtn>Национальная цифровая инвестиционная платформа </HomeItemBtn></a>
          </HomeItem>
          <HomeSlider />
          <HomeSocialIcons>
            <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'><i class="fa-brands fa-facebook-f"></i></a>
            <a href='https://twitter.com/?lang=ru' target='_blank' rel='noreferrer'><i class="fa-brands fa-x-twitter"></i></a>
            <a href='https://ru.linkedin.com/' target='_blank' rel='noreferrer'><i class="fa-brands fa-linkedin-in"></i></a>
            <a href='https://www.youtube.com/' target='_blank' rel='noreferrer'><i class="fa-brands fa-youtube"></i></a>
            <a href='https://web.telegram.org/' target='_blank' rel='noreferrer'><i class="fa-solid fa-paper-plane"></i></a>
          </HomeSocialIcons>
        </Header>
      </Container>
      <News />
      <HomePartners />
      <Container>
        <HomeSupport>
          <HomeSupportTitle>Поддержка NAM INVEST:</HomeSupportTitle>
          <HomeSupportItems>
            {support.map((el) => (
              <HomeSupportItem key={el.id}>
                <img src={el.image} alt={el.name} />
                <p>{el.name}</p>
              </HomeSupportItem>
            ))}
          </HomeSupportItems>
        </HomeSupport>
      </Container>
    </HomeStyles>
  )
}

export default Home