import React from 'react'
import './Faculties.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {  Navigation ,  Scrollbar, A11y, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Faculties = (props) => {
    
    return (
        
        
        <div className='team-container'>
            <h1>Our Team</h1>
        <Swiper
      // install Swiper modules
      modules={[Navigation,  Scrollbar, A11y, FreeMode]}
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
                        
                        
                        <div className='slide-container' >
                            <div className='slide-content'>
                                <div className='card-wrapper'>
                                
                                    <div className='card' >
                                        <div className='image-content'>
                                            <span className="overlay"></span>
                                            <div className="card-image">
                                                <img src={d.imgSrc} alt="image" className="card-img" />
                                            </div>
                                        </div>
                                        <div className="card-content"></div>
                                        <h2 className="name">{d.name}</h2>
                                        <p className="description">{d.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                       
                    </SwiperSlide>
                    
                    
                ))
                : 'loading'}

                    </Swiper>
        </div>
    )
}
