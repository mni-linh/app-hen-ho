import React from "react";
import AtomBox from "../../atoms/AtomBox";
import AtomDialog from "../../atoms/AtomDialog";
import AtomDialogActions from "../../atoms/AtomDialogActions";
import AtomDialogContent from "../../atoms/AtomDialogContent";
import AtomDialogContentText from "../../atoms/AtomDialogContentText";
import AtomDivider from "../../atoms/AtomDivider";
import AtomFormControl from "../../atoms/AtomFormControl";
import AtomGrid from "../../atoms/AtomGrid";
import AtomHighlightOffIcon from "../../atoms/AtomHighlightOffIcon";
import AtomIconButton from "../../atoms/AtomIconButton";
import AtomIconHover from "../../atoms/AtomIconHover";
import AtomInputAdornment from "../../atoms/AtomInputAdornment";
import AtomInputLabel from "../../atoms/AtomInputLabel";
import AtomOutlinedInput from "../../atoms/AtomOutlinedInput";
import AtomStyledButton from "../../atoms/AtomStyleButton";
import AtomStyleDialogTitle from "../../atoms/AtomStyleDialogTitle";
import AtomTextField from "../../atoms/AtomTextField";
import AtomToolbar from "../../atoms/AtomToolbar";
import AtomVisibilityIcon from "../../atoms/AtomVisibilityIcon";
import AtomVisibilityOffIcon from "../../atoms/AtomVisibilityOffIcon";
import AtomWhatshotIcon from "../../atoms/AtomWhatshotIcon";
import useMediaQuery from "@mui/material/useMediaQuery";
import { darken, useTheme } from "@mui/material/styles";
import AtomStyleButtonSignIn from "../../atoms/AtomStyleButtonSignIn";

const ButtonDialogSignIn = () => {
  const [open, setOpen] = React.useState(false);
  ////////////

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isComputer = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <AtomBox
      sx={{
        flexGrow: 0,
        alignSelf: "center",
      }}
    >
      {/* Nút Đăng nhập ở màn hình mobile */}
      <AtomStyleButtonSignIn
        variant="contained"
        sx={{
          width: "100%",
          color: "white",
          backgroundImage:
            "linear-gradient(212deg, rgba(253,38,122,1) 0%, rgba(255,96,54,1) 69%, rgba(255,68,88,1) 100%)",
          "&:hover": {
            background: `linear-gradient(212deg, ${darken(
              "rgba(253, 38, 122, 1)",
              0.2
            )} 0%, ${darken("rgba(255, 96, 54, 1)", 0.2)} 69%, ${darken(
              "rgba(255, 68, 88, 1)",
              0.2
            )} 100%)`,
          },
          display: isMobile ? "none" : "block",
        }}
        onClick={() => {
          handleSignIn(true);
        }}
      >
        Đăng nhập
      </AtomStyleButtonSignIn>
      {/* Nút Đăng nhập ở màn hình máy tính */}
      <AtomStyledButton
        variant="contained"
        onClick={() => {
          handleSignIn(true);
        }}
        sx={(theme) => ({
          fontSize: theme.spacing(2),
          color: theme.palette.common.black,
          fontWeight: theme.typography.fontWeightBold,
          background: "rgb(216, 216, 216)",
          "&:hover": {
            background: `linear-gradient(180deg, ${darken(
              "rgba(216, 216, 216, 1)",
              0.2
            )} 57%, ${darken("rgba(255, 255, 255, 1)", 0.2)} 100%, ${darken(
              "rgba(158, 158,158, 0.5)",
              0.2
            )} 100%)`,
          },
          display: isComputer ? "none" : "block",
          transition: "all 0.5s",
          marginBottom: theme.spacing(2),
        })}
      >
        Đăng nhập
      </AtomStyledButton>
      {/* Dialog  */}
      <AtomDialog
        fullScreen={isMobile}
        open={openSignIn}
        onClose={handleCloseSignIn}
        aria-labelledby="responsive-dialog-title"
      >
        {/* icon lửa + icon close */}
        <AtomToolbar>
          <AtomGrid container justifyContent="center">
            {/* icon app */}
            <AtomGrid item>
              <AtomWhatshotIcon
                fontSize="large"
                sx={(theme) => ({ color: theme.palette.primary.main })}
              />
            </AtomGrid>
          </AtomGrid>
          {/* icon close */}
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
            Khi bấm vào Đăng Nhập, bạn đồng ý với Điều khoản của chúng tôi. Tìm
            hiểu về cách chúng tôi xử lý dữ liệu của bạn trong Chính sách Quyền
            Riêng Tư và Chính sách Cookie của chúng tôi.
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
            {/* password */}
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
            <AtomStyledButton variant="contained">Đăng nhập</AtomStyledButton>
          </AtomDialogActions>
        </AtomDialogContent>
      </AtomDialog>
    </AtomBox>
  );
};

export default ButtonDialogSignIn;
