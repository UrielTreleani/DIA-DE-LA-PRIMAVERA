import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { flowers } from '../flowers/flowers';
import Card from '../Card/Card';
import "./Cards.css"

function Cards() {
  return (
    <section className='cards__container' id='card'>
      <h2 className='cards__title'>
        Tu ramo virtual
      </h2>
      <Swiper
      modules={[Navigation, Pagination]}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={50}
      centeredSlides={true}
      >
        {
          flowers.map((flower)=>(
            <SwiperSlide key={flower.id}>
              <Card flower={flower}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  )
}

export default Cards