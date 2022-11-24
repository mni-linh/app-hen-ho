import React from "react";

import { styled } from "@mui/material/styles";

import AtomBox from "../atoms/Box/AtomBox";
import AtomDrawer from "../atoms/Drawer/AtomDrawer";
import AtomIconButton from "../atoms/IconButton/AtomIconButton";
import AtomMenuIcon from "../atoms/MenuIcon/AtomMenuIcon";
import AtomToolbar from "../atoms/Toolbar/AtomToolbar";
import AtomImageLogo from "../atoms/ImageLogo/AtomImageLogo";
import AtomTypography from "../atoms/Typography/AtomTypography";
import AtomLink from "../atoms/Link/AtomLink";
import AtomStyleIconHover from "../atoms/StyleIconHover/AtomStyleIconHover";
import AtomHighlightOffIcon from "../atoms/HighlightOffIcon/AtomHighlightOffIcon";
import AtomDivider from "../atoms/Divider/AtomDivider";

import ExpansionPanel from "./ExpansionPanel ";
import ButtonDialogSignIn from "./Dialog/ButtonDialogSignIn";
import ButtonDialogLanguage from "./Dialog/ButtonDialogLanguage";
import ChangeMode from "./ChangeMode";

const listExtend = [
  {
    text: "Sản phẩm",
    extend: ["Tính năng cao cấp", "Các Cấp Gói Đăng Ký", "Swipe Night"],
  },
  {
    text: "Tìm hiểu",
    extend: "",
  },
  {
    text: "An toàn",
    extend: [
      "Quy tắc Cộng đồng",
      "Bí quyết An toàn",
      "An toàn & Chính sách",
      "An toàn & Báo cáo",
      "Bảo Mật",
    ],
  },
  {
    text: "Hỗ trợ",
  },
  {
    text: "Tải về",
  },
];
const MenuDrawer = () => {
  const drawerWidth = "100%";

  const [open, setOpen] = React.useState(false);
  // Mở Drawer
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  // Đóng Drawer
  const handleDrawerClose = () => {
    setOpen(false);
  };

  // style DrawerHeader
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // Cần thiết để chữ nằm dưới thanh appbar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));
  return (
    <>
      <AtomBox
        sx={{
          flexGrow: 1,
          display: {
            xs: "flex",
            md: "none",
          },
        }}
      >
        <AtomIconButton
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          sx={(theme) => ({
            position: "absolute",
            right: theme.spacing(3),
            top: theme.spacing(0),
            alignSelf: "center",
            ...(open && { display: "none" }),
            color: theme.palette.common.menu,
          })}
          size="large"
        >
          <AtomMenuIcon fontSize="large" />
        </AtomIconButton>
      </AtomBox>

      <AtomDrawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
          display: {
            xs: "flex",
            md: "none",
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <AtomToolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
            }}
          >
            <AtomImageLogo alt="logo" src="/images/logoTinderLight.png" />
            {/* Chữ tinder */}
            <AtomTypography
              variant="h6"
              noWrap
              component={AtomLink}
              href="/"
              sx={(theme) => ({
                fontFamily: theme.typography.fontFamily,
                fontWeight: theme.typography.fontWeightBold,
                color: theme.palette.common.titleDraw,
                textDecoration: "none",
                fontSize: theme.spacing(4),
              })}
            >
              tinder
            </AtomTypography>
          </AtomToolbar>
          <AtomBox sx={{ flexGrow: 1 }}>
            <AtomStyleIconHover onClick={handleDrawerClose}>
              <AtomHighlightOffIcon fontSize="large" />
            </AtomStyleIconHover>
          </AtomBox>
        </DrawerHeader>

        <AtomDivider />

        <ExpansionPanel />

        <AtomDivider />

        {/* Đăng nhập - Ngôn ngữ */}
        <AtomBox
          sx={(theme) => ({
            bottom: theme.spacing(0),
            left: theme.spacing(0),
            right: theme.spacing(0),
            padding: theme.spacing(4),
          })}
        >
          {/* <ButtonSignInDrawer /> */}
          <ButtonDialogSignIn
            sx={{
              width: "100%",
            }}
          />
          {/* <ButtonLanguageDraw /> */}
          <ButtonDialogLanguage />
          {/* button change mode */}
          <ChangeMode />
        </AtomBox>
      </AtomDrawer>
    </>
  );
};

export default MenuDrawer;
