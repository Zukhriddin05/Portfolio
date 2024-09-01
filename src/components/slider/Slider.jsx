import React from 'react'
import './slider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';





const slider = () => {
    return (
        <div className="slider" id='slider'>
            <div className="container">
                <h2 className="header__title">what people say about me</h2>
                <a href="" className="header__main-link">testimonial</a>
                <div className="slider__box">
                    <>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                                delay: 10000,
                                disableOnInteraction: false
                            }}
                            modules={[Pagination, Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                 <div className="slider__box-div">
                                <div className="slider__title-box">
                                    <img src="18.png" className='slider__img' alt="" />
                                    <div>
                                        <h2 className="slider__title">Melikulov Khurshid</h2>
                                        <a href="#!" className="slider__link">CEO company “MaxMediaSS”</a>
                                    </div>
                                </div>
                                <p className="slider__txt">Zukhriddin has been a driving force in our project management at MaxMedia. Their exceptional organizational skills and proactive approach ensured seamless execution of complex campaigns, consistently delivering results on time and within budget.</p>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slider__box-div">
                                    <div className="slider__title-box">
                                        <img src="19.png" className='slider__img' alt="" />
                                        <div>
                                            <h2 className="slider__title">Asrorbek Farhod</h2>
                                            <a href="#!" className="slider__link">Manager IT company “Prosofen”</a>
                                        </div>
                                    </div>
                                    <p className="slider__txt">During their time with Baraka Corporation, Zukhriddin was instrumental in refining our brand strategy. Their deep understanding of market dynamics and consumer behavior helped us strengthen our brand’s positioning and visibility.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slider__box-div">
                                    <div className="slider__title-box">
                                        <img src="20.png" className='slider__img' alt="" />
                                        <div>
                                            <h2 className="slider__title">Azizxon Yusupov</h2>
                                            <a href="#!" className="slider__link">CEO company “infinity agency”</a>
                                        </div>
                                    </div>
                                    <p className="slider__txt">At Infinity, Zukhriddin significantly contributed to our brand management efforts. Their strategic insights and innovative approaches played a crucial role in enhancing our brand identity and increasing market presence.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slider__box-div">
                                    <div className="slider__title-box">
                                        <img src="21.png" className='slider__img' alt="" />
                                        <div>
                                            <h2 className="slider__title">Shukhrat Akhroljonov</h2>
                                            <a href="#!" className="slider__link">CEO company “IX CAPITAL”</a>
                                        </div>
                                    </div>
                                    <p className="slider__txt">Zukhriddin's project management skills at IX CAPITAL were exemplary. They adeptly coordinated between teams, managed resources effectively, and navigated challenges, leading to successful project completions and satisfied clients.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="slider__box-div">
                                    <div className="slider__title-box">
                                        <img src="22.png" className='slider__img' alt="" />
                                        <div>
                                            <h2 className="slider__title">Kozimxon Turaev</h2>
                                            <a href="#!" className="slider__link">CEO company “Tuko Collection”</a>
                                        </div>
                                    </div>
                                    <p className="slider__txt">At Tuko Collection, Zukhriddin excelled in managing projects from concept to execution. Their meticulous planning and ability to adapt to changing circumstances ensured that all projects were delivered to a high standard and aligned with our strategic goals.</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </>
                </div>
            </div>
        </div>
    )
}

export default slider
