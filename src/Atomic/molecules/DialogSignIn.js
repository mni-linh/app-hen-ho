import { darken } from "@mui/material";
import React from "react";
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
import AtomIconButton from "../atoms/AtomIconButton";
import AtomIconHover from "../atoms/AtomIconHover";
import AtomInputAdornment from "../atoms/AtomInputAdornment";
import AtomInputLabel from "../atoms/AtomInputLabel";
import AtomOutlinedInput from "../atoms/AtomOutlinedInput";
import AtomStyledButton from "../atoms/AtomStyleButton";
import AtomStyleIconHover from "../atoms/AtomStyleIconHover";
import AtomTextField from "../atoms/AtomTextField";
import AtomToolbar from "../atoms/AtomToolbar";
import AtomVisibilityIcon from "../atoms/AtomVisibilityIcon";
import AtomVisibilityOffIcon from "../atoms/AtomVisibilityOffIcon";
import AtomWhatshotIcon from "../atoms/AtomWhatshotIcon";
import { grey } from "@mui/material/colors";
import AtomStyleDialogTitle from "../atoms/AtomStyleDialogTitle";
const DialogSignIn = () => {
  const [openSignIn, setOpenSignIn] = React.useState(false);
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    showPassword: false,
  });

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
    <>
      <AtomBox
      // sx={{
      //   flexGrow: 0,
      // }}
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
            <AtomStyleIconHover
              size="large"
              edge="end"
              onClick={handleCloseSignIn}
            >
              <AtomHighlightOffIcon fontSize="large" />
            </AtomStyleIconHover>
          </AtomToolbar>
          <AtomStyleDialogTitle>Đăng nhập</AtomStyleDialogTitle>
          <AtomDivider variant="middle" />
          <AtomDialogContent
            sx={{
              textAlign: "center",
            }}
          >
            <AtomDialogContentText>
              Khi bấm vào Đăng Nhập, bạn đồng ý với Điều khoản của chúng tôi.
              Tìm hiểu về cách chúng tôi xử lý dữ liệu của bạn trong Chính sách
              Quyền Riêng Tư và Chính sách Cookie của chúng tôi.
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
                autoFocus
                vargiant="outlined"
                margin="dense"
              />
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
              <AtomStyledButton variant="contained">Đăng nhập</AtomStyledButton>
            </AtomDialogActions>
          </AtomDialogContent>
        </AtomDialog>
        {/* </Tooltip> */}
      </AtomBox>
    </>
  );
};

export default DialogSignIn;
