import React, { useState } from 'react'
import './style.css'
import NewsCart from './news-cart/NewsCart'
import { news } from '../../data/data'

const News = () => {
    const [tab, setTab] = useState(1)
    return (
        <div className='news'>
            <div className="container">
                <div className="news-title">Новости</div>
                <div className='tab-changer'>
                    <div>Инвестиции</div>
                    <div>Мероприятия</div>
                    <div>Бизнес, экономика, финансы</div>
                    <div>Изменения и обновления нормативно-правовых актов</div>
                </div>
                <div className='show-section'>
                    <div className="show-section-item">
                        {news.map((item, index) => (
                            <NewsCart
                                key={item.id}
                                news={item}
                                index={index}
                            />
                        ))}
                    </div>
                    <div className="show-section-item"></div>
                    <div className="show-section-item"></div>
                    <div className="show-section-item"></div>
                </div>
            </div>
        </div>
    )
}

export default News