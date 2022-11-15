import React, { useEffect } from "react";

import AtomBox from "../atoms/AtomBox";
import AtomButton from "../atoms/AtomButton";
import AtomDialog from "../atoms/AtomDialog";
import AtomDialogActions from "../atoms/AtomDialogActions";
import AtomDialogContent from "../atoms/AtomDialogContent";
import AtomDialogContentText from "../atoms/AtomDialogContentText";
import AtomDivider from "../atoms/AtomDivider";
import AtomFormControl from "../atoms/AtomFormControl";
import AtomGrid from "../atoms/AtomGrid";
import AtomHighlightOffIcon from "../atoms/AtomHighlightOffIcon";
import AtomIconButton from "../atoms/AtomIconButton";
import AtomIconHover from "../atoms/AtomIconHover";
import AtomInputAdornment from "../atoms/AtomInputAdornment";
import AtomInputLabel from "../atoms/AtomInputLabel";
import AtomOutlinedInput from "../atoms/AtomOutlinedInput";
import AtomStyledButton from "../atoms/AtomStyleButton";
import AtomTextField from "../atoms/AtomTextField";
import AtomToolbar from "../atoms/AtomToolbar";
import AtomVisibilityIcon from "../atoms/AtomVisibilityIcon";
import AtomVisibilityOffIcon from "../atoms/AtomVisibilityOffIcon";
import AtomWhatshotIcon from "../atoms/AtomWhatshotIcon";
import AtomStyleDialogTitle from "../atoms/AtomStyleDialogTitle";

import { grey } from "@mui/material/colors";

const ButtonSignIn = () => {
  const [openSignIn, setOpenSignIn] = React.useState(false);
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    } else {
      setUser([]);
    }
  }, []);
  const handleLogin = () => {
    let flag = false;
    user?.map((item) => {
      if (email === item.email && password === item.password) {
        flag = true;
        alert("Đăng nhập thành công");
      }
    });
    return !flag && alert("Đăng nhập thất bại");
  };

  const handleSignIn = (bool) => {
    setOpenSignIn(bool);
  };

  const handleCloseSignIn = () => {
    handleSignIn(false);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    // <>
    <AtomBox
      sx={{
        flexGrow: 0,
        alignSelf: "center",
      }}
    >
      <AtomButton
        variant="contained"
        onClick={() => {
          handleSignIn(true);
        }}
        sx={(theme) => ({
          display: {
            xs: "none",
            md: "flex",
          },
          fontFamily: theme.typography.fontFamily,
          marginRight: theme.spacing(2),

          backgroundColor: grey[50],
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.8)",
          },
          color: theme.palette.primary.grey,
          textTransform: theme.typography.textTransform,
          borderRadius: theme.spacing(3),
          width: theme.spacing(19),
          height: theme.spacing(5),
          fontWeight: theme.typography.fontWeightBold,
        })}
      >
        Đăng nhập
      </AtomButton>
      {/* <DialogSignIn/> */}

      {/* Dialog Sign In ở màn hình lớn */}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  endAdornment={
                    <AtomInputAdornment position="end">
                      <AtomIconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShow(!show)}
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
            <AtomStyledButton onClick={() => handleLogin()} variant="contained">
              Đăng nhập
            </AtomStyledButton>
          </AtomDialogActions>
        </AtomDialogContent>
      </AtomDialog>
      {/* Dialog Sign In ở màn hình nhỏ */}
      <AtomDialog
        fullScreen
        open={openSignIn}
        onClose={handleCloseSignIn}
        sx={{
          display: {
            xs: "flex",
            md: "none",
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              vargiant="outlined"
              margin="dense"
            />
            {/* <AtomTextField
              id="outlined-password-input"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            <AtomStyledButton onClick={() => handleLogin()} variant="contained">
              Đăng nhập
            </AtomStyledButton>
          </AtomDialogActions>
        </AtomDialogContent>
      </AtomDialog>
    </AtomBox>
    // </>
  );
};

export default ButtonSignIn;
