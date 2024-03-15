import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { partners } from '../../data/data'

const HomePartners = () => {
    return (
        <div className='home-partners'>
            <div className="container">
                <div className="home-partners-title"><h1>Партнеры о нас</h1><Link to='/about-uzbekistan/partners-about'>Смотреть всех</Link></div>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {partners.map((el) => (
                    <SwiperSlide>
                        <img src={el} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HomePartners