import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Navigation } from 'swiper/modules';
import './header.scss'
import 'swiper/css/effect-creative';
import 'swiper/swiper-bundle.css';

const Header = () => {
    return (
        <div id='header' className="header">
            <div className="container">
                <h2 className="header__title">About Me</h2>
                <a href="" className="header__main-link">personal career</a>
                <div className="header__box">
                    <div className='header__title-box'>
                        <h2 className="header__box-title">My name is <span className="header__span">Zukhriddin</span></h2>
                        <p className="header__box-txt">I am a marketing and brand manager with 3 years of experience in the media
                            industry. Throughout my career, I’ve had the privilege of working with companies like MaxMedia, Baraka
                            Corporation, Infinity, Airbooking, and over 10 other leading organizations. My approach is grounded in
                            teamwork, innovation, and a commitment to delivering outstanding results. I am passionate about driving
                            brand growth and achieving success through strategic thinking and creativity.</p>
                    </div>
                    <>
                        <Swiper
                            spaceBetween={30}
                            loop={true}
                            speed={500}

                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false
                            }}
                            keyboard={{
                                enabled: true,
                                onlyInViewport: true,
                            }}
                            modules={[Pagination, Autoplay, Keyboard]}
                            className="mySwiper swiper__img-box"
                        >
                            <SwiperSlide><img className='header__box-img' src="24.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='header__box-img' src="23.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='header__box-img' src="3.png" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='header__box-img' src="25.png" alt="" /></SwiperSlide>
                        </Swiper>
                    </>
                </div>
                <iframe className='header__box-img2' width="1126" height="633" src="https://www.youtube.com/embed/nBIYKK8AskE" title="Zukhriddin&#39;s Portofolio | ENG" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Header