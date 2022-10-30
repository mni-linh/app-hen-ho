import React from "react";
import DialogSignUp from "../Atomic/molecules/DialogSignUp";
import AppBar from "../Atomic/organisms/AppBar";
import "swiper/css";
import CommentItem from "../Atomic/molecules/CommentItem";

const Home = () => {
  return (
    <>
      <AppBar />
      <DialogSignUp />
      <CommentItem />
    </>
  );
};

export default Home;
