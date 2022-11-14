import React from "react";

import AtomAppBar from "../atoms/AtomAppBar";
import AtomToolbar from "../atoms/AtomToolbar";

import LogoApp from "../molecules/LogoApp";
import MenuListSm from "../molecules/MenuListSm";
import BoxLangLogin from "../molecules/BoxLangLogin";
import MenuListXs from "../molecules/MenuListXs";

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
