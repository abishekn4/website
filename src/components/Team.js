import React from 'react'
import "./Team.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Team = (props) => {

    return (


        <div className='team'>
            <div className='team-title' >
                <h2>Our <span>Team</span></h2>

                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Scrollbar, A11y, FreeMode]}
                    freeMode={true}
                    grabCursor={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 50,
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1440: {
                            slidesPerView: 4,
                            spaceBetween: 10,

                        }

                    }
                    }
                    navigation

                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}

                >

                    {props.value.content
                        ? props.value.content.map((d, i) => (
                            <SwiperSlide key={`${d.name}-${i}`} >


                                <div class="team-container">
                                    <input type="radio" name="dot" id="one" />
                                    <input type="radio" name="dot" id="two" />
                                    <div class="main-card">
                                        <div class="cards">
                                            <div class="card">
                                                <div class="content">
                                                    <div class="img">
                                                        <img src={d.imgSrc} alt="" />
                                                    </div>
                                                    <div class="details">
                                                        <div class="name">{d.name}</div>
                                                        <div class="job">{d.designation}</div>
                                                    </div>
                                                    <div class="media-icons">
                                                      
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </SwiperSlide>


                        ))
                        : 'loading'}

                </Swiper>
            </div>
        </div>
    )
}
