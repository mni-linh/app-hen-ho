import { darken } from "@mui/material";
import React from "react";
import AtomAppBar from "../atoms/AtomAppBar";
import AtomImageLogo from "../atoms/AtomImageLogo";
import AtomLink from "../atoms/AtomLink";
import AtomToolbar from "../atoms/AtomToolbar";
import AtomTypography from "../atoms/AtomTypography";
import DialogChangeLanguage from "../molecules/DialogChangeLanguage";
import DialogSignIn from "../molecules/DialogSignIn";
import MenuBar from "../molecules/MenuBar";

const AppBar = () => {
  return (
    <AtomAppBar
      position="sticky"
      sx={{
        // `linear-gradient(180deg, ${darken(
        //   "rgba(32,29,28,1)",
        //   0.2
        // )} 0%, ${darken("rgba(96,91,90,1, 1)", 0.2)} 69%, ${darken(
        //   "rgba(153,153,153, 1)",
        //   0.2
        // )} 100%)`,
        background: "rgba(32, 29, 28, 0.8)",
        backgroundSize: "cover",
      }}
      elevation={0}
    >
      <AtomToolbar disableGutters>
        <AtomImageLogo alt="logo" src="/images/logoTinder.png" />
        <AtomTypography
          variant="h6"
          noWrap
          component={AtomLink}
          href="/"
          sx={(theme) => ({
            marginRight: theme.spacing(2),
            fontFamily: theme.typography.fontFamily,
            fontWeight: theme.typography.fontWeightBold,
            color: theme.typography.color,
            textDecoration: "none",
            fontSize: theme.spacing(5),
          })}
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
