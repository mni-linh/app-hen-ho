import React from "react";

import AtomAppBar from "../atoms/AppBar/AtomAppBar";
import AtomToolbar from "../atoms/Toolbar/AtomToolbar";

import LogoApp from "../molecules/LogoApp";
import BoxLangLogin from "../molecules/BoxLangLogin";
import MenuDrawer from "../molecules/MenuDrawer";
import MenuList from "../molecules/MenuList";

const AppBar = () => {
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
        }}
      >
        <AtomToolbar>
          {/* Logo + Tinder */}
          <LogoApp />
          {/* List menu (màn hình lớn) */}
          <MenuList />
          {/* List menu + drawer(màn hình nhỏ) */}
          <MenuDrawer />
          {/* Button ngôn ngữ + Đăng nhập (màn hình lớn)*/}
          <BoxLangLogin />
        </AtomToolbar>
      </AtomAppBar>
    </>
  );
};

export default AppBar;
