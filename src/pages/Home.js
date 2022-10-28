import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import DialogSignUp from "../Atomic/molecules/DialogSignUp";
import AppBar from "../Atomic/organisms/AppBar";
import "swiper/css";
import AtomSwiperSlide from "../Atomic/atoms/AtomSwiperSlide";
import AtomTypography from "../Atomic/atoms/AtomTypography";

const Home = () => {
  return (
    <>
      <AppBar />
      {/* <AtomContainer maxWidth="xl" sx={{ margin: 0 }}> */}
      <DialogSignUp />
      {/* </AtomContainer> */}
      {/* Comment Slider */}
      {/* Slider comment */}
      <Swiper slidesPerView={3} spaceBetween={30} freeMode={true} height={300}>
        <SwiperSlide>

          <AtomTypography sx={{ color: "red" }}>Comment 1</AtomTypography>
        </SwiperSlide>
        <SwiperSlide> Comment 2</SwiperSlide>
        <SwiperSlide> Comment 3</SwiperSlide>

        <SwiperSlide> Comment 4</SwiperSlide>
        <SwiperSlide> Comment 5</SwiperSlide>
        <SwiperSlide> Comment 6</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Home;
