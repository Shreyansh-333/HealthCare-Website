import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { Pagination, Navigation } from "swiper";

import "bootstrap/dist/css/bootstrap.min.css";

import Cards from "../Cards/cards";

SwiperCore.use([Autoplay]);
SwiperCore.use([Pagination]);
SwiperCore.use([Navigation]);

const PartnerHospitals = () => {
  const divstyle = {
    margin: "20px auto",
  };

  const imgstyle = {
    height: "100px",
    width: "270px",
    // border: "1px solid black",
  };

  return (
    <div
      style={divstyle}
      className="container py-4 px-4 justify-content-center "
    >
      <h3>They always trust us</h3>
      <h2>Our partner Hospitals</h2>
      <hr></hr>
      <Swiper
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
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
          <img style={imgstyle} src="PartnerHospital1.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img style={imgstyle} src="PartnerHospital2.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img style={imgstyle} src="PartnerHospital3.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img style={imgstyle} src="PartnerHospital4.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img style={imgstyle} src="PartnerHospital5.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img style={imgstyle} src="PartnerHospital6.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img style={imgstyle} src="PartnerHospital7.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img style={imgstyle} src="PartnerHospital8.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img style={imgstyle} src="PartnerHospital9.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img style={imgstyle} src="PartnerHospital10.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img style={imgstyle} src="PartnerHospital11.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img style={imgstyle} src="PartnerHospital12.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img style={imgstyle} src="PartnerHospital1.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img style={imgstyle} src="PartnerHospital2.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img style={imgstyle} src="PartnerHospital3.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img style={imgstyle} src="PartnerHospital4.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img style={imgstyle} src="PartnerHospital5.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img style={imgstyle} src="PartnerHospital6.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img style={imgstyle} src="PartnerHospital7.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img style={imgstyle} src="PartnerHospital8.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img style={imgstyle} src="PartnerHospital9.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img style={imgstyle} src="PartnerHospital10.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img style={imgstyle} src="PartnerHospital11.jpg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img style={imgstyle} src="PartnerHospital12.jpg"></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PartnerHospitals;
