import React from "react";
import AppBar from "../Atomic/organisms/AppBar";
import Footer from "../Atomic/organisms/Footer";
import "swiper/css";
import BanerDating from "../Atomic/organisms/BanerDating";
import AtomBox from "../Atomic/atoms/Box/AtomBox";
import CommentItem from "../Atomic/organisms/CommentItem";

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
      <AtomBox
        sx={(theme) => ({
          padding: theme.spacing(2),
          [theme.breakpoints.up("sx")]: {
            paddingX: theme.spacing(4),
          },
          [theme.breakpoints.up("md")]: {
            paddingX: theme.spacing(5),
          },
          [theme.breakpoints.up("lg")]: {
            paddingX: theme.spacing(10),
          },
        })}
      >
        <CommentItem />
        <Footer />
      </AtomBox>
    </>
  );
};

export default Home;
