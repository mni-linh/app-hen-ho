import React from "react";

import AtomBox from "../atoms/AtomBox";
import AtomDrawer from "../atoms/AtomDrawer";
import AtomIconButton from "../atoms/AtomIconButton";
import AtomMenuIcon from "../atoms/AtomMenuIcon";
import AtomToolbar from "../atoms/AtomToolbar";
import AtomImageLogo from "../atoms/AtomImageLogo";
import AtomTypography from "../atoms/AtomTypography";
import AtomLink from "../atoms/AtomLink";
import AtomStyleIconHover from "../atoms/AtomStyleIconHover";
import AtomHighlightOffIcon from "../atoms/AtomHighlightOffIcon";
import AtomDivider from "../atoms/AtomDivider";

import ButtonSignInDrawer from "./ButtonSignInDrawer";
import ButtonLanguageDraw from "./ButtonLanguageDraw";
import ExpansionPanel from "./ExpansionPanel ";

import { darken, styled } from "@mui/material/styles";
import ButtonDialogSignIn from "./Dialog/ButtonDialogSignIn";
import AtomStyledButton from "../atoms/AtomStyleButton";
import ButtonDialogLanguage from "./Dialog/ButtonDialogLanguage";
import { grey } from "@mui/material/colors";
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
  const [extend, setExtend] = React.useState(true);
  const [openSignIn, setOpenSignIn] = React.useState(false);
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const [open, setOpen] = React.useState(false);
  // Mở Drawer
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  // Đóng Drawer
  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Click chuột mở Dialog SignIn
  const handleSignIn = (bool) => {
    setOpenSignIn(bool);
  };
  // Click chuột đóng Dialog SignIn
  const handleCloseSignIn = () => {
    handleSignIn(false);
  };
  // Thay đổi cách hiển thị mật khẩu
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  // Click chuột hiển thị mật khẩu
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  // Click chuột ẩn mật khẩu
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
  const StyleButtonDialogLanguage = styled(ButtonDialogLanguage)(
    ({ theme }) => ({
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: grey[200],
      },
      width: "100%",
      height: theme.spacing(5.5),
      borderRadius: "2.2rem",
      // margin: "0 auto",
      fontSize: theme.spacing(2),
      color: grey[600],
      textTransform: theme.typography.textTransform,
      marginTop: theme.spacing(2),
    })
  );
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
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          sx={(theme) => ({
            position: "absolute",
            right: theme.spacing(3),
            top: theme.spacing(0),
            alignSelf: "center",
            ...(open && { display: "none" }),
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
                color: theme.palette.common.black,
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
            // position: "fixed",
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
        </AtomBox>
      </AtomDrawer>
    </>
  );
};

export default MenuDrawer;
