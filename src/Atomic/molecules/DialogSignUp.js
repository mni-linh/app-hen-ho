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

  //

  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const boxStyle = {
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    backgroundColor: isHover ? "transparent" : "transparent",
    color: isHover ? "#616161" : "grey",
    transform: isHover ? "rotate(90deg)" : "default",
  };
  // const buttonStyle = {
  //   cursor: "pointer",
  //   transition: "all 0.2s ease-in-out",
  //   backgoundColor: isHover ? "pink" : "red",
  //   textTransform: "capitalize",
  //   color: isHover ? "white" : "white",
  //   width: "139px",
  //   height: "44px",
  //   borderRadius: "2.2rem",
  // };
  return (
    <>
      <AtomGrid
        container
        alignItems="center"
        direction="column"
        justifyContent="center"
        sx={{
          minHeight: "100vh",
          opacity: 0.9,
          backgroundImage:
            "url('https://tinder.com/static/build/744fe6d80266616aba687006b7d764ad.webp')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // opacity: 0.5,
        }}
      >
        {/* <Grid item xs container direction="column" spacing={2}> */}

        <AtomGrid item>
          <AtomTypography
            sx={{
              color: "white",
              fontSize: "123px",
              fontFamily: "Noto Sans Vai",
              fontWeight: 600,
            }}
          >
            Quẹt phải
          </AtomTypography>
        </AtomGrid>

        {/* Grid button */}
        <AtomGrid item xs={12}>
          <AtomButton
            variant="contained"
            onClick={() => {
              handleSignUp(true);
            }}
            sx={{
              textTransform: "capitalize",
              backgroundColor: "red",
              width: "260px",
              height: "44px",
              borderRadius: "2.2rem",
            }}
          >
            Tạo tài khoản
          </AtomButton>
          <AtomDialog open={openSignUp} onClose={handleCloseSignUp}>
            <AtomToolbar>
              <AtomGrid container spacing={2}>
                <AtomGrid item xs={11}>
                  <AtomWhatshotIcon
                    sx={{
                      display: {
                        xs: "none",
                        md: "flex",
                      },

                      marginRight: 1,
                      paddingLeft: 34,
                      paddingRight: 25,
                      paddingTop: 3,
                      color: "red",
                      textAlign: "center",
                    }}
                  />
                </AtomGrid>
                <AtomGrid item>
                  <AtomIconButton
                    edge="end"
                    onClick={handleCloseSignUp}
                    sx={boxStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <AtomHighlightOffIcon />
                  </AtomIconButton>
                </AtomGrid>
              </AtomGrid>
            </AtomToolbar>
            <AtomDialogTitle
              sx={{
                textAlign: "center",
                textTransform: "UpperCase",
                fontStyle: "oblique",
                fontWeight: "bold",
                fontSize: 25,
              }}
            >
              {" "}
              Đăng ký{""}
            </AtomDialogTitle>
            <AtomDivider variant="middle" />
            {/* <Grid container spacing={3}>
              <Grid iteam xs={12}> */}
            <AtomDialogContent
              sx={{
                textAlign: "center",
                padding: "10px 60px",
              }}
            >
              <AtomDialogContentText
                sx={{ textAlign: "center", padding: "10px 0" }}
              >
                Khi bấm vào Đăng Nhập, bạn đồng ý với Điều khoản của chúng tôi.
                Tìm hiểu về cách chúng tôi xử lý dữ liệu của bạn trong Chính
                sách Quyền Riêng Tư và Chính sách Cookie của chúng tôi.
              </AtomDialogContentText>
              <AtomBox
                component="form"
                sx={{
                  "& .MuiTextField-root": {
                    m: 1,
                    width: 400,
                    maxWidth: "100%",
                  },
                  alignItems: "center",
                }}
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
                  // fullWidth
                  sx={{ m: 1, width: 400, maxWidth: "100%" }}
                  // sx={{ m: 1 }}
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
                <AtomButton
                  variant="contained"
                  sx={{
                    width: "150px",
                    height: "44px",
                    borderRadius: "2.2rem",
                    backgroundColor: "red",
                    textTransform: "capitalize",
                  }}
                >
                  Đăng ký
                </AtomButton>
              </AtomDialogActions>
            </AtomDialogContent>
          </AtomDialog>
        </AtomGrid>
      </AtomGrid>
    </>
  );
};

export default DialogSignUp;
