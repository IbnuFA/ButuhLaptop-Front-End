import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

//import tes carousel
import imgcarol1 from '../../asset/carousel/1123013.jpg'
import imgcarol2 from '../../asset/carousel/1123014.jpg'
import imgcarol3 from '../../asset/carousel/1129497.jpg'


export default function CarouselMain() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={imgcarol1}/>

          {/* <img src={'./logo.jpeg'}/> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgcarol2}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgcarol3}/>
        </SwiperSlide>
      </Swiper>

    </>
  );
}