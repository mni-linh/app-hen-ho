import React from "react";

import AtomBox from "../atoms/AtomBox";
import AtomDialog from "../atoms/AtomDialog";
import AtomDialogActions from "../atoms/AtomDialogActions";
import AtomDialogContent from "../atoms/AtomDialogContent";
import AtomDialogContentText from "../atoms/AtomDialogContentText";
import AtomDivider from "../atoms/AtomDivider";
import AtomFormControl from "../atoms/AtomFormControl";
import AtomGrid from "../atoms/AtomGrid";
import AtomHighlightOffIcon from "../atoms/AtomHighlightOffIcon";
import AtomInputAdornment from "../atoms/AtomInputAdornment";
import AtomInputLabel from "../atoms/AtomInputLabel";
import AtomOutlinedInput from "../atoms/AtomOutlinedInput";
import AtomTextField from "../atoms/AtomTextField";
import AtomToolbar from "../atoms/AtomToolbar";
import AtomTypography from "../atoms/AtomTypography";
import AtomIconButton from "../atoms/AtomIconButton";
import AtomVisibilityIcon from "../atoms/AtomVisibilityIcon";
import AtomVisibilityOffIcon from "../atoms/AtomVisibilityOffIcon";
import AtomWhatshotIcon from "../atoms/AtomWhatshotIcon";
import AtomIconHover from "../atoms/AtomIconHover";
import AtomStyledButton from "../atoms/AtomStyleButton";
import AtomStyleDialogTitle from "../atoms/AtomStyleDialogTitle";
import AtomLink from "../atoms/AtomLink";
import AtomImageApp from "../atoms/AtomImageApp";

import { darken } from "@mui/material";
import InstallAppXs from "./InstallAppXs";
import ButtonDialogSignUp from "./Dialog/ButtonDialogSignUp";
import ButtonDialogSignIn from "./Dialog/ButtonDialogSignIn";

const ButtonActionAccount = () => {
  const [openSignUp, setOpenSignUp] = React.useState(false);
  const [openSignIn, setOpenSignIn] = React.useState(false);

  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleRegister = () => {
    if (localStorage.getItem("user") === null) {
      localStorage.setItem(
        "user",
        JSON.stringify({ email: values.email, password: values.password })
      );
      setOpenSignUp(false);
    } else {
      let user = JSON.parse(localStorage.getItem("user"));
      user.push({ email: values.email, password: values.password });
      localStorage.setItem("user", JSON.stringify(user));
    }
    window.location.reload();
  };

  const handleSignUp = (bool) => {
    setOpenSignUp(bool);
  };

  const handleCloseSignUp = () => {
    handleSignUp(false);
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

  return (
    <>
      {/* Quẹt phải & Tạo tài khoản */}
      <AtomGrid
        container
        alignItems="center"
        direction="column"
        sx={{
          justifyContent: "center",
          minHeight: "100vh",
          opacity: 0.9,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Quẹt Phải */}
        <AtomGrid item>
          <AtomTypography
            sx={(theme) => ({
              color: theme.palette.primary.contrastText,
              fontWeight: theme.typography.fontWeightBold,
              margin: "0 auto",
              [theme.breakpoints.up("xs")]: {
                fontSize: theme.spacing(8),
                display: "flex",
                justifyContent: "center",
                fontStyle: "italic",
              },
              [theme.breakpoints.up("md")]: {
                fontSize: theme.spacing(15),
                display: "flex",
                justifyContent: "center",
                fontStyle: "normal",
              },
            })}
          >
            Quẹt Phải
          </AtomTypography>
        </AtomGrid>

        {/* Tạo tài khoản */}
        {/* màn hình lớn */}
        <AtomGrid
          item
          xs={12}
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <ButtonDialogSignUp />
        </AtomGrid>
        {/* màn hình nhỏ */}
        {/* Cục đăng ký - đăng nhập */}
        <AtomGrid
          item
          xs={12}
          sx={(theme) => ({
            display: {
              xs: "block",
              md: "none",
            },
            justifyContent: "space-around",
            marginTop: theme.spacing(20),
          })}
        >
          {/* Đăng ký */}
          <AtomGrid sx={(theme) => ({ marginBottom: theme.spacing(2) })}>
            <ButtonDialogSignUp />
          </AtomGrid>
          {/* Đăng nhập */}
          <AtomGrid>
            <ButtonDialogSignIn />
          </AtomGrid>
          {/* cài app */}
          <InstallAppXs />
        </AtomGrid>
      </AtomGrid>
    </>
  );
};

export default ButtonActionAccount;
