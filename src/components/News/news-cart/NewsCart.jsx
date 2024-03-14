import React from 'react'
import './style.css'

const NewsCart = ({ news }) => {
    return (
        <div className='news-cart'>
            <div className="news-cart-imgBx">
                <img src={news.image} alt={news.name} />
            </div>
            <p className='uploaded-date'>{news.uploaded_date}</p>
            <h4 className='name'>{news.name}</h4>
        </div>
    )
}

export default NewsCart