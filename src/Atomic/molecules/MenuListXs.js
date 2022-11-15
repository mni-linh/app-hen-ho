import React from "react";
import AtomBox from "../atoms/AtomBox";
import AtomDrawer from "../atoms/AtomDrawer";
import AtomIconButton from "../atoms/AtomIconButton";
import AtomMenuIcon from "../atoms/AtomMenuIcon";
import { styled } from "@mui/material/styles";
import AtomToolbar from "../atoms/AtomToolbar";
import AtomImageLogo from "../atoms/AtomImageLogo";
import AtomTypography from "../atoms/AtomTypography";
import AtomLink from "../atoms/AtomLink";
import AtomStyleIconHover from "../atoms/AtomStyleIconHover";
import AtomList from "../atoms/AtomList";
import AtomHighlightOffIcon from "../atoms/AtomHighlightOffIcon";
import AtomDivider from "../atoms/AtomDivider";
import AtomListItem from "../atoms/AtomListItem";
import AtomListItemButton from "../atoms/AtomListItemButton";
import AtomListItemText from "../atoms/AtomListItemText";
import AtomIconExpandMore from "../atoms/AtomIconExpandMore";
import AtomExpandLess from "../atoms/AtomIconExpandLess";
import AtomCollapse from "../atoms/AtomCollapse";
import AtomStyledButton from "../atoms/AtomStyleButton";
import AtomDialog from "../atoms/AtomDialog";
import AtomWhatshotIcon from "../atoms/AtomWhatshotIcon";
import AtomGrid from "../atoms/AtomGrid";
import AtomIconHover from "../atoms/AtomIconHover";
import AtomDialogContentText from "../atoms/AtomDialogContentText";
import AtomDialogContent from "../atoms/AtomDialogContent";
import AtomStyleDialogTitle from "../atoms/AtomStyleDialogTitle";
import AtomTextField from "../atoms/AtomTextField";
import AtomFormControl from "../atoms/AtomFormControl";
import AtomInputLabel from "../atoms/AtomInputLabel";
import AtomOutlinedInput from "../atoms/AtomOutlinedInput";
import AtomInputAdornment from "../atoms/AtomInputAdornment";
import AtomVisibilityIcon from "../atoms/AtomVisibilityIcon";
import AtomVisibilityOffIcon from "../atoms/AtomVisibilityOffIcon";
import AtomDialogActions from "../atoms/AtomDialogActions";
import DialogChangeLanguageDraw from "./ButtonLanguageDraw";
import ButtonSignInDrawer from "./ButtonSignInDrawer";
import ButtonLanguageDraw from "./ButtonLanguageDraw";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpansionPanel from "./ExpansionPanel ";
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
const MenuListXs = () => {
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
  // Click chuột mở rộng List
  const handleClick = () => {
    setExtend(!extend);
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
                fontSize: theme.spacing(4),
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
        {/* ////////////////////////////////Chỉnh //////////////////////////////////// */}
        <ExpansionPanel />

        {/* ////////////////////////////////Chỉnh //////////////////////////////////// */}

        <AtomDivider />
        <AtomBox
          sx={(theme) => ({
            padding: theme.spacing(4),
            flexGrow: 1,
          })}
        >
          <ButtonSignInDrawer />
          <ButtonLanguageDraw />
        </AtomBox>
      </AtomDrawer>
    </>
  );
};

export default MenuListXs;
