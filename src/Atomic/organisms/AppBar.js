import React from "react";
import AtomAppBar from "../atoms/AtomAppBar";
import AtomContainer from "../atoms/AtomContainer";
import AtomImageLogo from "../atoms/AtomImageLogo";
import AtomToolbar from "../atoms/AtomToolbar";
import AtomTypography from "../atoms/AtomTypography";
import DialogChangeLanguage from "../molecules/DialogChangeLanguage";
import DialogSignIn from "../molecules/DialogSignIn";
import MenuBar from "../molecules/MenuBar";

const AppBar = () => {
  return (
    <AtomAppBar position="static">
      {/* <AtomContainer
        maxWidth="xl"
        sx={{
          // backgroundColor: "rgb(192,192,192,0.7)",
          backgroundColor: "rgba(117, 117, 117)",
        }}
      > */}
      <AtomToolbar
        disableGutters
        sx={{
          // backgroundColor: "rgb(192,192,192,0.7)",
          backgroundColor: "rgba(117, 117, 117)",
        }}
      >
        <AtomImageLogo alt="logo" src="/images/logoTinder.png" />
        <AtomTypography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            marginRight: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "Noto Sans Warang Citi",
            fontWeight: 600,
            letterSpacing: ".0.5rem",
            color: "white",
            textDecoration: "none",
            fontSize: "40px",
          }}
        >
          tinder
        </AtomTypography>
        {/* Menu */}
        <MenuBar />
        {/* Dialog language */}
        <DialogChangeLanguage />
        {/* Button Login */}
        <DialogSignIn />
      </AtomToolbar>
      {/* </AtomContainer> */}
    </AtomAppBar>
  );
};

export default AppBar;
