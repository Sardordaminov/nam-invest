import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import { headerSliderData } from "../../../data/data";

import { EffectCoverflow, Pagination } from "swiper/modules";

export default function HomeSlider() {
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"2"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={false}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {headerSliderData.map((el) => (
                    <SwiperSlide key={el.id}>
                        <h1>{el.name}</h1>
                        <p>{el.descr}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
