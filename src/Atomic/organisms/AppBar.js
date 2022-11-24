import React from "react";

import AtomAppBar from "../atoms/AppBar/AtomAppBar";
import AtomToolbar from "../atoms/Toolbar/AtomToolbar";

import LogoApp from "../molecules/LogoApp";
import BoxLangLogin from "../molecules/BoxLangLogin";
import MenuDrawer from "../molecules/MenuDrawer";
import MenuList from "../molecules/MenuList";
import AtomIconButton from "../atoms/IconButton/AtomIconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import { Menu } from "@mui/material";
import AtomBrightness4Icon from "../atoms/Brightness4Icon/AtomBrightness4";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const AppBar = () => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

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
          {/* setting */}
          <AtomIconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            aria-label="Open to show settings"
            title="Open to show settings"
            color="inherit"
          >
            <AtomBrightness4Icon />
          </AtomIconButton>

          {/* Button ngôn ngữ + Đăng nhập (màn hình lớn)*/}
          <BoxLangLogin />
        </AtomToolbar>
      </AtomAppBar>
    </>
  );
};

export default AppBar;
