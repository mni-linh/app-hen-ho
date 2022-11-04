import React from "react";
import AppBar from "../Atomic/organisms/AppBar";
import Footer from "../Atomic/organisms/Footer";
import "swiper/css";
import BanerDating from "../Atomic/organisms/BanerDating";
import Comment from "../Atomic/organisms/Comment";
import AtomBox from "../Atomic/atoms/AtomBox";

const Home = () => {
  return (
    <>
      <AtomBox
        sx={{
          position: "relative",
          backgroundImage:
            "url('https://tinder.com/static/build/744fe6d80266616aba687006b7d764ad.webp')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <AppBar />
        <BanerDating />
      </AtomBox>
      <Comment />
      <Footer />
    </>
  );
};

export default Home;
