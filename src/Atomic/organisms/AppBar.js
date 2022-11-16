import React from "react";

import AtomAppBar from "../atoms/AtomAppBar";
import AtomToolbar from "../atoms/AtomToolbar";

import LogoApp from "../molecules/LogoApp";
import MenuListSm from "../molecules/MenuList";
import BoxLangLogin from "../molecules/BoxLangLogin";
import MenuListXs from "../molecules/MenuDrawer";
import MenuDrawer from "../molecules/MenuDrawer";
import MenuList from "../molecules/MenuList";
import AtomButton from "../atoms/AtomButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import AtomDialogActions from "../atoms/AtomDialogActions";
import AtomDialogContent from "../atoms/AtomDialogContent";
import AtomDialogContentText from "../atoms/AtomDialogContentText";
import AtomDialogTitle from "../atoms/AtomDialogTitle";
import AtomDialog from "../atoms/AtomDialog";
import AtomBox from "../atoms/AtomBox";
import AtomHighlightOffIcon from "../atoms/AtomHighlightOffIcon";
import AtomIconHover from "../atoms/AtomIconHover";
import AtomWhatshotIcon from "../atoms/AtomWhatshotIcon";
import AtomGrid from "../atoms/AtomGrid";
import AtomDivider from "../atoms/AtomDivider";
import AtomVisibilityOffIcon from "../atoms/AtomVisibilityOffIcon";
import AtomVisibilityIcon from "../atoms/AtomVisibilityIcon";
import AtomIconButton from "../atoms/AtomIconButton";
import AtomInputAdornment from "../atoms/AtomInputAdornment";
import AtomOutlinedInput from "../atoms/AtomOutlinedInput";
import AtomInputLabel from "../atoms/AtomInputLabel";
import AtomFormControl from "../atoms/AtomFormControl";
import AtomTextField from "../atoms/AtomTextField";
import AtomStyledButton from "../atoms/AtomStyleButton";
import AtomStyleDialogTitle from "../atoms/AtomStyleDialogTitle";
import ButtonDialogSignIn from "../molecules/Dialog/ButtonDialogSignIn";

const AppBar = (props) => {
  const [open, setOpen] = React.useState(false);
  ////////////

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [openSignIn, setOpenSignIn] = React.useState(false);
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

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
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
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
