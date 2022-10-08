import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Demo = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://www.bakuelectronics.az/assets/cache_image/products/7685/1_260x220_172.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.bakuelectronics.az/assets/cache_image/products/96837/6905-terra-1_260x220_172.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.bakuelectronics.az/assets/cache_image/products/101313/xiaomi-haylou-ls02-l-black-1_260x220_172.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.bakuelectronics.az/assets/cache_image/products/7685/1_260x220_172.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.bakuelectronics.az/assets/cache_image/products/96837/6905-terra-1_260x220_172.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.bakuelectronics.az/assets/cache_image/products/101313/xiaomi-haylou-ls02-l-black-1_260x220_172.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.bakuelectronics.az/assets/cache_image/products/7685/1_260x220_172.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.bakuelectronics.az/assets/cache_image/products/96837/6905-terra-1_260x220_172.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.bakuelectronics.az/assets/cache_image/products/101313/xiaomi-haylou-ls02-l-black-1_260x220_172.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Demo