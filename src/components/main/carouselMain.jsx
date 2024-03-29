import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

//import tes carousel
import bannerTes from "../../asset/img/banner/Banner-Tes.png";

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
        className="mySwiper col-md-11"
      >
        <SwiperSlide>
          <img src={bannerTes} />

          {/* <img src={'./logo.jpeg'}/> */}
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerTes} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerTes} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
