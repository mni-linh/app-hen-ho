import React from "react";
import AtomAppBar from "../atoms/AtomAppBar";
import AtomImageLogo from "../atoms/AtomImageLogo";
import AtomLink from "../atoms/AtomLink";
import AtomToolbar from "../atoms/AtomToolbar";
import AtomTypography from "../atoms/AtomTypography";
import DialogChangeLanguage from "../molecules/DialogChangeLanguage";
import DialogSignIn from "../molecules/DialogSignIn";
import { useNavigate } from "react-router-dom";
import AtomBox from "../atoms/AtomBox";
import dataDating from "../../routes/dataDating";
import AtomButton from "../atoms/AtomButton";
import AtomIconButton from "../atoms/AtomIconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AtomDrawer from "../atoms/AtomDrawer";
import { styled } from "@mui/material/styles";
import AtomHighlightOffIcon from "../atoms/AtomHighlightOffIcon";
import AtomDivider from "../atoms/AtomDivider";
import AtomList from "../atoms/AtomList";
import AtomListItem from "../atoms/AtomListItem";
import AtomListItemButton from "../atoms/AtomListItemButton";
import AtomListItemText from "../atoms/AtomListItemText";
import AtomStyleIconHover from "../atoms/AtomStyleIconHover";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse } from "@mui/material";
import AtomStyledButton from "../atoms/AtomStyleButton";
import DialogChangeLanguageDraw from "../molecules/DialogChangeLanguageDraw";
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

  const handleClick = () => {
    setExtend(!extend);
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
            <MenuIcon fontSize="large" />
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
                {extend ? <ExpandMore /> : <ExpandLess />}
                {/* Sử dụng chẵn lẻ sau */}
                {/* {index % 2 === 0 ? <ExpandMore /> : <AtomBox />} */}
              </AtomListItemButton>
            </AtomListItem>
          ))}

          {/* {listExtend.map((list, index) => ( */}
          <Collapse in={!extend} timeout="auto" unmountOnExit>
            <AtomList component="div" disablePadding>
              <AtomListItemButton sx={{ paddingLeft: 4 }}>
                <AtomListItemText primary={"Started"} />
              </AtomListItemButton>
            </AtomList>
          </Collapse>
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
          <AtomStyledButton variant="contained" sx={{ width: "100%" }}>
            Đăng nhập
          </AtomStyledButton>
          <DialogChangeLanguageDraw />
        </AtomBox>
        {/* </AtomList> */}
      </AtomDrawer>
    </>
  );
};

export default AppBar;
