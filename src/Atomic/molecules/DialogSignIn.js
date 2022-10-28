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
import AtomInputAdornment from "../atoms/AtomInputAdornment";
import AtomInputLabel from "../atoms/AtomInputLabel";
import AtomOutlinedInput from "../atoms/AtomOutlinedInput";
import AtomTextField from "../atoms/AtomTextField";
import AtomToolbar from "../atoms/AtomToolbar";
import AtomTooltip from "../atoms/AtomTooltip";
import AtomVisibilityIcon from "../atoms/AtomVisibilityIcon";
import AtomVisibilityOffIcon from "../atoms/AtomVisibilityOffIcon";
import AtomWhatshotIcon from "../atoms/AtomWhatshotIcon";

const DialogSignIn = () => {
  const [openSignIn, setOpenSignIn] = React.useState(false);
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const [isHover, setIsHover] = React.useState(false);

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

  const boxStyle = {
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    backgroundColor: isHover ? "transparent" : "transparent",
    color: isHover ? "#616161" : "grey",
    transform: isHover ? "rotate(90deg)" : "default",
  };
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <>
      <AtomBox
        sx={{
          flexGrow: 0,
          // width: 500,
          // maxWidth: "100%",
        }}
      >
        <AtomTooltip title="Sign In">
          <AtomButton
            variant="contained"
            onClick={() => {
              handleSignIn(true);
            }}
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              fontFamily:
                "Proxima Nova , Helvetica Neue, Arial, Helvetica, sans-serif",
              marginRight: 1,
              // fontSize: "19px",
              lineHeight: "26px",
              backgroundColor: "white",
              color: "#21262e",
              textAlign: "center",
              textTransform: "capitalize",
              borderRadius: "40px",
              width: "140px",
              height: "40px",
            }}
          >
            Đăng nhập
          </AtomButton>
        </AtomTooltip>
        <AtomDialog
          open={openSignIn}
          onClose={handleCloseSignIn}
          // sx={{ width: 400, maxWidth: "100%" }}
        >
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
                  onClick={handleCloseSignIn}
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
            Đăng nhập{" "}
          </AtomDialogTitle>
          <AtomDivider variant="middle" />
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
              Tìm hiểu về cách chúng tôi xử lý dữ liệu của bạn trong Chính sách
              Quyền Riêng Tư và Chính sách Cookie của chúng tôi.
            </AtomDialogContentText>

            {/* </Grid>
        </Grid> */}

            <AtomBox
              component="form"
              // fullWidth
              sx={{
                "& .MuiTextField-root": {
                  margin: 1,
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
                label="Email Address *"
                type="email"
                autoFocus
                vargiant="outlined"
                margin="dense"
              />
              {/* Grid ở ngoài  */}
              <AtomGrid item>
                <AtomFormControl
                  sx={{ m: 1, width: 400, maxWidth: "100%" }}
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
              <AtomButton
                variant="contained"
                sx={{
                  // margin: "10px 0",
                  width: "150px",
                  height: "44px",
                  borderRadius: "2.2rem",
                  backgroundColor: "red",
                  textTransform: "capitalize",
                }}
              >
                Đăng nhập
              </AtomButton>
            </AtomDialogActions>
          </AtomDialogContent>
        </AtomDialog>
        {/* </Tooltip> */}
      </AtomBox>
    </>
  );
};

export default DialogSignIn;
