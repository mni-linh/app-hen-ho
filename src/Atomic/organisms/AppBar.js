import React from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import DialogChangeLanguage from "../molecules/DialogChangeLanguage";
import DialogSignIn from "../molecules/DialogSignIn";
import DialogChangeLanguageDraw from "../molecules/DialogChangeLanguageDraw";

import AtomAppBar from "../atoms/AtomAppBar";
import AtomImageLogo from "../atoms/AtomImageLogo";
import AtomLink from "../atoms/AtomLink";
import AtomToolbar from "../atoms/AtomToolbar";
import AtomTypography from "../atoms/AtomTypography";
import AtomBox from "../atoms/AtomBox";
import dataDating from "../../routes/dataDating";
import AtomButton from "../atoms/AtomButton";
import AtomIconButton from "../atoms/AtomIconButton";
import AtomDrawer from "../atoms/AtomDrawer";
import AtomHighlightOffIcon from "../atoms/AtomHighlightOffIcon";
import AtomDivider from "../atoms/AtomDivider";
import AtomList from "../atoms/AtomList";
import AtomListItem from "../atoms/AtomListItem";
import AtomListItemButton from "../atoms/AtomListItemButton";
import AtomListItemText from "../atoms/AtomListItemText";
import AtomStyleIconHover from "../atoms/AtomStyleIconHover";
import AtomStyledButton from "../atoms/AtomStyleButton";
import AtomDialogActions from "../atoms/AtomDialogActions";
import AtomVisibilityOffIcon from "../atoms/AtomVisibilityOffIcon";
import AtomVisibilityIcon from "../atoms/AtomVisibilityIcon";
import AtomInputAdornment from "../atoms/AtomInputAdornment";
import AtomInputLabel from "../atoms/AtomInputLabel";
import AtomOutlinedInput from "../atoms/AtomOutlinedInput";
import AtomFormControl from "../atoms/AtomFormControl";
import AtomGrid from "../atoms/AtomGrid";
import AtomTextField from "../atoms/AtomTextField";
import AtomDialogContentText from "../atoms/AtomDialogContentText";
import AtomDialogContent from "../atoms/AtomDialogContent";
import AtomStyleDialogTitle from "../atoms/AtomStyleDialogTitle";
import AtomIconHover from "../atoms/AtomIconHover";
import AtomWhatshotIcon from "../atoms/AtomWhatshotIcon";
import AtomDialog from "../atoms/AtomDialog";
import AtomMenuIcon from "../atoms/AtomMenuIcon";
import AtomExpandLess from "../atoms/AtomIconExpandLess";
import AtomIconExpandMore from "../atoms/AtomIconExpandMore";
import AtomCollapse from "../atoms/AtomCollapse";
const listExtend = [
  {
    text: "Sản phẩm",
    extend: ["Tính năng cao cấp", "Các Cấp Gói Đăng Ký", "Swipe Night"],
  },
  {
    text: "Tìm hiểu",
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
const AppBar = (props) => {
  const navigate = useNavigate();
  const [extend, setExtend] = React.useState(true);
  const [openSignIn, setOpenSignIn] = React.useState(false);
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    showPassword: false,
  });
  const handleClick = () => {
    setExtend(!extend);
  };
  const handleSignIn = (bool) => {
    setOpenSignIn(bool);
  };

  const handleCloseSignIn = () => {
    handleSignIn(false);
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // 240
  const drawerWidth = "100%";
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // Cần thiết để chữ nằm dưới thanh appbar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <AtomAppBar
        position="sticky"
        sx={{
          background: "rgba(32, 29, 28, 0.8)",
          backgroundSize: "cover",
          display: "flex",
        }}
        elevation={0}
        open={open}
      >
        {/* <AtomBox sx={{ display: "flex", justifyContent: "space-between" }}></> */}
        {/* <AtomBox> */}
        <AtomToolbar>
          <AtomBox sx={{ display: "flex" }}>
            {/* Icon (lúc màn hình lớn) */}
            <AtomImageLogo
              alt="logo"
              src="/images/logoTinder.png"
              sx={{
                display: { xs: "flex", md: "flex" },
                alignSelf: "center",
              }}
            />
            {/* Chữ tinder (lúc màn hình lớn) */}
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
                display: { xs: "flex" },
              })}
            >
              tinder
            </AtomTypography>
          </AtomBox>
          {/* Menu */}
          {/* <MenuBar /> */}
          {/* List menu bar lúc màn hình lớn */}
          <AtomBox
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            {dataDating.map((page, index) => (
              <AtomButton
                key={index}
                onClick={() => {
                  navigate(`${page.path}`);
                }}
                sx={(theme) => ({
                  marginY: theme.spacing(2),
                  color: theme.typography.color,
                  "&:hover": {
                    color: theme.palette.primary.main,
                  },
                  display: "block",
                  fontSize: theme.spacing(2),
                  textAlign: "start",
                  lineHeight: theme.spacing(2.6),
                  textTransform: theme.typography.textTransform,
                })}
              >
                {page.name}
              </AtomButton>
            ))}
          </AtomBox>

          {/* cục ngôn ngữ - đăng nhập */}
          <AtomBox
            sx={{
              // display: "flex",
              justifyContent: "space-around",
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            {/* Dialog language */}
            <DialogChangeLanguage />
            {/* Button Login */}
            <DialogSignIn />
          </AtomBox>
        </AtomToolbar>
        {/* List menu lúc màn hình nhỏ */}
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
            // aria-controls="menu-appbar"
            // aria-haspopup="true"
          >
            <AtomMenuIcon fontSize="large" />
          </AtomIconButton>
        </AtomBox>
        {/* </AtomBox> */}
        {/* </AtomContainer> */}
      </AtomAppBar>
      <AtomDrawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
          overflowY: "hidden",
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
            sx={{ display: "flex", justifyContent: "space-between" }}
            component="div"
          >
            <AtomImageLogo
              alt="logo"
              src="/images/logoTinderLight.png"
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            />
            {/* Chữ tinder */}
            <AtomTypography
              variant="h6"
              noWrap
              component={AtomLink}
              href="/"
              sx={(theme) => ({
                marginRight: theme.spacing(2),
                fontFamily: theme.typography.fontFamily,
                fontWeight: theme.typography.fontWeightBold,
                color: theme.palette.common.black,
                textDecoration: "none",
                fontSize: theme.spacing(5),
                display: { xs: "flex", md: "none" },
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
        {/* ////////////////////////////////Chỉnh logic sau//////////////////////////////////// */}

        <AtomList
          sx={{
            width: "100%",
            bgcolor: "background.paper",
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          {listExtend.map((list, index) => (
            <AtomListItem key={index}>
              <AtomListItemButton onClick={handleClick}>
                <AtomListItemText primary={listExtend[index].text} />
                {extend ? <AtomIconExpandMore /> : <AtomExpandLess />}
                {/* Sử dụng chẵn lẻ sau */}
                {/* {index % 2 === 0 ? <ExpandMore /> : <AtomBox />} */}
              </AtomListItemButton>
            </AtomListItem>
          ))}

          {/* {listExtend.map((list, index) => ( */}
          <AtomCollapse in={!extend} timeout="auto" unmountOnExit>
            <AtomList component="div" disablePadding>
              <AtomListItemButton sx={{ paddingLeft: 4 }}>
                <AtomListItemText primary={"Started"} />
              </AtomListItemButton>
            </AtomList>
          </AtomCollapse>
          {/* ))} */}
        </AtomList>
        <AtomDivider />
        {/* <AtomList> */}
        <AtomBox
          sx={(theme) => ({
            padding: theme.spacing(4),
            flexGrow: 1,
            // position: "fixed",
            // bottom: 0,
            // right: 0,
            // left: 0,
          })}
        >
          <AtomBox
            sx={{
              flexGrow: 0,
              alignSelf: "center",
            }}
          >
            <AtomStyledButton
              variant="contained"
              sx={{ width: "100%" }}
              onClick={() => {
                handleSignIn(true);
              }}
            >
              Đăng nhập
            </AtomStyledButton>
            <AtomDialog
              fullScreen
              open={openSignIn}
              onClose={handleCloseSignIn}
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
                // backgroundColor: "red",
              }}
            >
              <AtomToolbar>
                <AtomGrid container justifyContent="center">
                  <AtomGrid item>
                    <AtomWhatshotIcon
                      fontSize="large"
                      sx={(theme) => ({ color: theme.palette.primary.main })}
                    />
                  </AtomGrid>
                </AtomGrid>
                <AtomIconHover
                  size="large"
                  edge="end"
                  onClick={handleCloseSignIn}
                  sx={(theme) => ({
                    position: "absolute",
                    right: theme.spacing(3.5),
                    top: theme.spacing(0),
                  })}
                >
                  <AtomHighlightOffIcon fontSize="large" />
                </AtomIconHover>
              </AtomToolbar>
              <AtomStyleDialogTitle>Đăng nhập</AtomStyleDialogTitle>
              <AtomDivider variant="middle" />
              <AtomDialogContent
                sx={{
                  textAlign: "center",
                }}
              >
                <AtomDialogContentText>
                  Khi bấm vào Đăng Nhập, bạn đồng ý với Điều khoản của chúng
                  tôi. Tìm hiểu về cách chúng tôi xử lý dữ liệu của bạn trong
                  Chính sách Quyền Riêng Tư và Chính sách Cookie của chúng tôi.
                </AtomDialogContentText>
                <AtomBox
                  component="form"
                  sx={(theme) => ({
                    "& .MuiTextField-root": {
                      margin: theme.spacing(1),
                      width: theme.spacing(50),
                    },
                  })}
                  noValidate
                  autoComplete="off"
                >
                  {/* email */}
                  <AtomTextField
                    id="outlined-search"
                    label="Email Address *"
                    type="email"
                    autoFocus
                    vargiant="outlined"
                    margin="dense"
                  />
                  <AtomTextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    //
                  />
                  {/* password */}
                  {/* Grid ở ngoài  */}

                  <AtomGrid item>
                    <AtomFormControl
                      sx={(theme) => ({
                        margin: theme.spacing(1),
                        width: theme.spacing(50),
                      })}
                      variant="outlined"
                    >
                      <AtomInputLabel htmlFor="outlined-adornment-password">
                        Password *
                      </AtomInputLabel>
                      <AtomOutlinedInput
                        margin="none"
                        id="outlined-adornment-password"
                        type={values.showPassword ? "text" : "password"}
                        value={values.password}
                        onChange={handleChange("password")}
                        endAdornment={
                          <AtomInputAdornment position="end">
                            <AtomIconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {values.showPassword ? (
                                <AtomVisibilityIcon />
                              ) : (
                                <AtomVisibilityOffIcon />
                              )}
                            </AtomIconButton>
                          </AtomInputAdornment>
                        }
                        label="Password *"
                      />
                    </AtomFormControl>
                  </AtomGrid>
                </AtomBox>
                <AtomDialogActions>
                  <AtomStyledButton variant="contained">
                    Đăng nhập
                  </AtomStyledButton>
                </AtomDialogActions>
              </AtomDialogContent>
            </AtomDialog>
          </AtomBox>
          <DialogChangeLanguageDraw />
        </AtomBox>
        {/* </AtomList> */}
      </AtomDrawer>
    </>
  );
};

export default AppBar;
