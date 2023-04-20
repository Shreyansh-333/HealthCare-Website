import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

import "bootstrap/dist/css/bootstrap.min.css";

import Cards from "../Cards/cards";


const carousel1 = () => {
  return (
    <div className="container py-4 px-4 justify-content-center ">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
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
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <Cards
            data={{
              imgSrc: "http://localhost:3000/image-2.jpg",
              price: "Value",
              title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            data={{
              imgSrc: "http://localhost:3000/image-3.jpg",
              price: "Value",
              title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Cards
            data={{
              imgSrc: "http://localhost:3000/image-4.jpg",
              price: "Value",
              title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            data={{
              imgSrc: "http://localhost:3000/image-5.jpg",
              price: "Value",
              title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            data={{
              imgSrc: "http://localhost:3000/image-2.jpg",
              price: "Value",
              title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            data={{
              imgSrc: "http://localhost:3000/image-3.jpg",
              price: "Value",
              title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            data={{
              imgSrc: "http://localhost:3000/image-4.jpg",
              price: "Value",
              title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Cards
            data={{
              imgSrc: "http://localhost:3000/image-5.jpg",
              price: "Value",
              title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default carousel1;
