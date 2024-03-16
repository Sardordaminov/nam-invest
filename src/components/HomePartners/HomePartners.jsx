import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { partners } from '../../data/data'
import './style.css'
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

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
                id='home-partners-swiper'
            >
                {partners.map((el) => (
                    <SwiperSlide className='home-partners-slide'>
                        <h1>Partner {el.name}</h1>
                        <p className='slide-descr'>{el.descr.slice(0, 70)}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HomePartners