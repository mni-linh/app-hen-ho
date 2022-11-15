import React from "react";

import AtomAppBar from "../atoms/AtomAppBar";
import AtomToolbar from "../atoms/AtomToolbar";

import LogoApp from "../molecules/LogoApp";
import MenuListSm from "../molecules/MenuListSm";
import BoxLangLogin from "../molecules/BoxLangLogin";
import MenuListXs from "../molecules/MenuListXs";
import { darken } from "@mui/material";

const AppBar = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <AtomAppBar
        position="sticky"
        elevation={0}
        open={open}
        sx={{
          background: "rgba(32, 29, 28, 0.8)",
          // backgroundImage:
          //   "linear-gradient(180deg, rgba(32,29,28,1) 0%, rgba(32,29,28,1) 40%, rgba(133,131,131,0.5) 100%)",
          // "&:hover": {
          //   background: `linear-gradient(212deg, ${darken(
          //     "rgba(253, 38, 122, 1)",
          //     0.2
          //   )} 0%, ${darken("rgba(255, 96, 54, 1)", 0.2)} 69%, ${darken(
          //     "rgba(255, 68, 88, 1)",
          //     0.2
          //   )} 100%)`,
          // },
          backgroundSize: "cover",
          display: "flex",
        }}
      >
        <AtomToolbar>
          {/* Logo + Tinder */}
          <LogoApp />
          {/* List menu (màn hình lớn) */}
          <MenuListSm />
          {/* Button ngôn ngữ + Đăng nhập (màn hình lớn)*/}
          <BoxLangLogin />
        </AtomToolbar>
        {/* List menu + drawer(màn hình nhỏ) */}
        <MenuListXs />
      </AtomAppBar>
    </>
  );
};

export default AppBar;
