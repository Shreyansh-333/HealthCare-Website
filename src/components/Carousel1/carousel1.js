import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import {  Pagination, Navigation } from "swiper";

import "bootstrap/dist/css/bootstrap.min.css";

import Cards from "../Cards/cards";

SwiperCore.use([Autoplay]);
SwiperCore.use([Pagination]);
SwiperCore.use([Navigation]);

const Carousel1 = () => {
  const divstyle = {
    margin: "20px auto",
  };
  return (
    <div
      style={divstyle}
      className="container py-4 px-4 justify-content-center "
    >
      <h2>Our key features:</h2>
      <Swiper
        // loop={true}
        // speed={500}
        // freeMode={true}
        // grabCursor={true}
        // modules={[FreeMode]}
        // modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false

        }}
        pagination={{
          clickable: true
        }}
        // pagination={{
        //   // el: '.swiper-pagination',
        //   clickable: true,
        // }}
        navigation={true}
        // navigation={{
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // }}
        // pagination= {{
        //   el: '.swiper-pagination',
        //   clickable: true,
        //     // renderBullet: function (index, className) {
        //     //   return '<span class="' + className + '">' + (menu[index]) + '</span>';
        //     // }
        // }}
        
        className="mySwiper"
        // modules={[Navigation, Pagination, Scrollbar, A11y]}
        // navigation
        // pagination={{clickable:true}}
        // scrollbar={{draggable:true}}
        breakpoints={{
          0: {
            slidesPerView: 0,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          769: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <Cards
            data={{
              imgSrc: "Passion.png",
              price: "Passion",
              title: "We care for you and your family",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            data={{
              imgSrc: "Integrity.png",
              price: "Integrity",
              title: "Fairness and honesty first",
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Cards
            data={{
              imgSrc: "Excellence.png",
              price: "Excellence",
              title: "We aim high and excel",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            data={{
              imgSrc: "Support.png",
              price: "Support",
              title: "We support and respect each other",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            data={{
              imgSrc: "Passion.png",
              price: "Passion",
              title: "We care for you and your family",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            data={{
              imgSrc: "Integrity.png",
              price: "Integrity",
              title: "Fairness and honesty first",
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Cards
            data={{
              imgSrc: "Excellence.png",
              price: "Excellence",
              title: "We aim high and excel",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            data={{
              imgSrc: "Support.png",
              price: "Support",
              title: "We support and respect each other",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel1;
