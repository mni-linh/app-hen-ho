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

const ButtonSignUp = () => {
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
        {/* Grid button */}
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
          <AtomStyledButton
            variant="contained"
            onClick={() => {
              handleSignUp(true);
            }}
            sx={(theme) => ({
              fontSize: theme.spacing(2),
            })}
          >
            Tạo tài khoản
          </AtomStyledButton>
          {/* đây */}
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
                  right: theme.spacing(3.5),
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
                  label="Email Address *"
                  type="email"
                  values={values.email}
                  onChange={handleChange("email")}
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
                    onChange={(e) => {
                      setValues({ ...values, password: e.target.value });
                      console.log(e.target.value);
                    }}
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
                <AtomStyledButton
                  onClick={() => handleRegister()}
                  variant="contained"
                >
                  Đăng ký
                </AtomStyledButton>
              </AtomDialogActions>
            </AtomDialogContent>
          </AtomDialog>
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
          <AtomGrid>
            <AtomStyledButton
              variant="contained"
              onClick={() => {
                handleSignUp(true);
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
                  )} 57%, ${darken(
                    "rgba(255, 255, 255, 1)",
                    0.2
                  )} 100%, ${darken("rgba(158, 158,158, 0.5)", 0.2)} 100%)`,
                },
                transition: "all 0.5s",
                marginBottom: theme.spacing(2),
              })}
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
                    right: theme.spacing(3.5),
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
                    label="Email Address *"
                    type="email"
                    value={values.email}
                    onChange={handleChange("email")}
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
                  <AtomStyledButton
                    onClick={() => handleRegister()}
                    variant="contained"
                  >
                    Đăng ký
                  </AtomStyledButton>
                </AtomDialogActions>
              </AtomDialogContent>
            </AtomDialog>
            <AtomDialog
              fullScreen
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
              open={openSignUp}
              onClose={handleCloseSignUp}
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
                  onClick={handleCloseSignUp}
                  sx={(theme) => ({
                    position: "absolute",
                    right: theme.spacing(3.5),
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
                  {/* <AtomTextField
                    id="outlined-search"
                    label="Tên đăng nhập *"
                    type="name"
                    autoFocus
                    vargiant="outlined"
                    margin="dense"
                  /> */}
                  <AtomTextField
                    id="outlined-search"
                    label="Email Address *"
                    type="email"
                    value={values.email}
                    onChange={handleChange("email")}
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
                  <AtomStyledButton
                    onClick={() => handleRegister()}
                    variant="contained"
                  >
                    Đăng ký
                  </AtomStyledButton>
                </AtomDialogActions>
              </AtomDialogContent>
            </AtomDialog>
          </AtomGrid>
          {/* Đăng nhập */}
          <AtomGrid>
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
                  )} 57%, ${darken(
                    "rgba(255, 255, 255, 1)",
                    0.2
                  )} 100%, ${darken("rgba(158, 158,158, 0.5)", 0.2)} 100%)`,
                },
                transition: "all 0.5s",
                marginBottom: theme.spacing(2),
              })}
            >
              Đăng nhập
            </AtomStyledButton>
            <AtomDialog open={openSignIn} onClose={handleCloseSignIn}>
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
                    value={values.email}
                    onChange={handleChange("email")}
                    autoFocus
                    vargiant="outlined"
                    margin="dense"
                  />
                  {/* <AtomTextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    value={values.password}
                    onChange={handleChange("password")}
                    autoComplete="current-password"
                    //
                  /> */}
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

            <AtomDialog
              fullScreen
              open={openSignIn}
              onClose={handleCloseSignIn}
              sx={{
                display: {
                  xs: "block",
                  sm: "none",
                },
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
                    values={values.email}
                    onChange={handleChange("email")}
                    autoFocus
                    vargiant="outlined"
                    margin="dense"
                  />
                  {/* <AtomTextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    values={values.password}
                    onChange={handleChange("password")}
                    autoComplete="current-password"
                    //
                  /> */}
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
          </AtomGrid>
          {/* cài app */}
          <InstallAppXs />
        </AtomGrid>
      </AtomGrid>
    </>
  );
};

export default ButtonSignUp;