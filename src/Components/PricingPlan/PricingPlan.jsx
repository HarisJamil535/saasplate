import React from 'react'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import css from './PricingPlan.module.scss'
import pkgsimg1 from '../../assets/Images/pkgsimg1.png'
import pkgsimg2 from '../../assets/Images/pkgsimg2.png'
import pkgsimg3 from '../../assets/Images/pkgsimg3.png'
import group from '../../assets/Images/group.png'

const PricingPlan = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.headingandpara}>
                <h1>Pricing Plan</h1>
                <p>Join the 50,000+ business professionals who use Bomb bomb video messages to rehumanize their communication.</p>
            </div>
            <div className={css.container}>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={40}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        220: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className={css.mySwiper}
                >
                    <SwiperSlide className={css.slide1} >
                        <div className={css.rectangle}></div>
                        <img src={pkgsimg1} />
                        <div className={css.headingandpara}>
                            <h4>BombBomb Essentials</h4>
                            <p>Quickly and easily second send and track 1 to 1 video messages from Gmail, Chrome browser or your iOS or Android device</p>
                        </div>
                        <div className={css.price}>
                            $29/ <span>mo</span>
                        </div>
                        <button style={{ backgroundColor: '#FF543E' }} >Buy Now</button>
                        <div className={css.btmcontent}>
                            <img src={group} />
                            <p>5 users or more?</p>
                            <p>REquest a demo for your team.</p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={css.slide2} >
                        <div style={{ backgroundColor: '#1E99CC' }} className={css.rectangle}></div>
                        <img src={pkgsimg2} />
                        <div className={css.headingandpara}>
                            <h4>BombBomb Plus</h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        </div>
                        <div className={css.price}>
                            $29/ <span>mo</span>
                        </div>
                        <button style={{ backgroundColor: '#1E99CC' }} >Buy Now</button>
                        <div className={css.btmcontent}>
                            <img src={group} />
                            <p>5 users or more?</p>
                            <p>REquest a demo for your team.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={css.slide3} >
                        <div style={{ backgroundColor: '#254B5A' }} className={css.rectangle}></div>
                        <img src={pkgsimg3} />
                        <div className={css.headingandpara}>
                            <h4>Enterprise</h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content.
                                of a page when looking at its layout.
                            </p>
                        </div>
                        <div className={css.price}>
                            $29/ <span>mo</span>
                        </div>
                        <button style={{ backgroundColor: '#254B5A' }} >Buy Now</button>
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>
    )
}

export default PricingPlan