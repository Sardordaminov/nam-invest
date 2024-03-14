import React, { useState } from 'react'
import './style.css'
import NewsCart from './news-cart/NewsCart'
import { faqData, news } from '../../data/data'

const News = () => {
    const [tab, setTab] = useState(1)
    console.log(tab);
    return (
        <div className='news'>
            <div className="container">
                <div className="news-title">Новости</div>
                <div className='tab-changers'>
                    <div className={`tab-changer ${tab === 1 && 'active'}`} onClick={() => setTab(1)}>Инвестиции</div>
                    <div className={`tab-changer ${tab === 2 && 'active'}`} onClick={() => setTab(2)}>Мероприятия</div>
                    <div className={`tab-changer ${tab === 3 && 'active'}`} onClick={() => setTab(3)}>Бизнес, экономика, финансы</div>
                    <div className={`tab-changer ${tab === 4 && 'active'}`} onClick={() => setTab(4)}>Изменения и обновления нормативно-правовых актов</div>
                </div>
                <div className='show-section'>
                    <div className={`show-section-item carts ${tab === 1 && 'active'}`}>
                        {news.map((item, index) => (
                            <NewsCart
                                key={item.id}
                                news={item}
                                index={index}
                            />
                        ))}
                    </div>
                    <div className={`show-section-item not ${tab === 2 && 'active'}`}>
                        <h1>Ничего не найдено :(</h1>
                    </div>
                    <div className={`show-section-item not ${tab === 3 && 'active'}`}>
                        <h1>Ничего не найдено :(</h1>
                    </div>
                    <div className={`show-section-item faqdata ${tab === 4 && 'active'}`}>
                        {faqData.slice(0, 3).map((el) => (
                            <div className='faqdata-cart' key={el.id}>
                                <h4>{el.name}</h4>
                                <p>01.01.2024</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News