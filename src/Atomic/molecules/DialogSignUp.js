import React, { useState } from "react";
import AtomBox from "../atoms/AtomBox";
import AtomButton from "../atoms/AtomButton";
import AtomDialog from "../atoms/AtomDialog";
import AtomDialogActions from "../atoms/AtomDialogActions";
import AtomDialogContent from "../atoms/AtomDialogContent";
import AtomDialogContentText from "../atoms/AtomDialogContentText";
import AtomDialogTitle from "../atoms/AtomDialogTitle";
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
const DialogSignUp = () => {
  const [openSignUp, setOpenSignUp] = React.useState(false);
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleSignUp = (bool) => {
    setOpenSignUp(bool);
  };

  const handleCloseSignUp = () => {
    handleSignUp(false);
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
      <AtomBox
        sx={{
          // background: "rgba(158, 158, 158,0.5)",
          background: "rgba(33, 38, 46,0.5)",
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          width: "100%",
          height: "100%",
        }}
      />
      {/* Quẹt phải & Tạo tài khoản */}
      <AtomGrid
        container
        alignItems="center"
        direction="column"
        justifyContent="center"
        sx={{
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
              fontSize: theme.spacing(15),
              // fontFamily: "Noto Sans Vai",
              fontWeight: theme.typography.fontWeightBold,
            })}
          >
            Quẹt Phải
          </AtomTypography>
        </AtomGrid>

        {/* Tạo tài khoản */}
        {/* Grid button */}
        <AtomGrid item xs={12}>
          <AtomStyledButton
            variant="contained"
            onClick={() => {
              handleSignUp(true);
            }}
          >
            Tạo tài khoản
          </AtomStyledButton>
          <AtomDialog open={openSignUp} onClose={handleCloseSignUp}>
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
                onClick={handleCloseSignUp}
                sx={(theme) => ({
                  position: "absolute",
                  right: theme.spacing(3),
                  top: theme.spacing(0),
                })}
              >
                <AtomHighlightOffIcon fontSize="large" />
              </AtomIconHover>
            </AtomToolbar>
            <AtomStyleDialogTitle>Đăng ký</AtomStyleDialogTitle>
            <AtomDivider variant="middle" />

            <AtomDialogContent
              sx={{
                textAlign: "center",
              }}
            >
              <AtomDialogContentText>
                Khi bấm vào Đăng Ký, bạn đồng ý với Điều khoản của chúng tôi.
                Tìm hiểu về cách chúng tôi xử lý dữ liệu của bạn trong Chính
                sách Quyền Riêng Tư và Chính sách Cookie của chúng tôi.
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
                <AtomTextField
                  id="outlined-search"
                  label="Tên đăng nhập *"
                  type="name"
                  autoFocus
                  vargiant="outlined"
                  margin="dense"
                />
                <AtomTextField
                  id="outlined-search"
                  label="Email Address *"
                  type="email"
                  autoFocus
                  vargiant="outlined"
                  margin="dense"
                />
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
                  {/*  */}
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
              </AtomBox>
              <AtomDialogActions>
                <AtomStyledButton variant="contained">Đăng ký</AtomStyledButton>
              </AtomDialogActions>
            </AtomDialogContent>
          </AtomDialog>
        </AtomGrid>
      </AtomGrid>
    </>
  );
};

export default DialogSignUp;
