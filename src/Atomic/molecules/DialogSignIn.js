import React from "react";
import AtomBox from "../atoms/AtomBox";
import AtomButton from "../atoms/AtomButton";
import AtomDialog from "../atoms/AtomDialog";
import AtomDialogActions from "../atoms/AtomDialogActions";
import AtomDialogContent from "../atoms/AtomDialogContent";
import AtomDialogContentText from "../atoms/AtomDialogContentText";
import AtomDialogTitle from "../atoms/AtomDialogTitle";
import AtomFormControl from "../atoms/AtomFormControl";
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
    <AtomBox
      sm={{
        flexGrow: 0,
        // width: 500,
        // maxWidth: "100%",
      }}
    >
      <AtomTooltip title="Sign In">
        <AtomButton
          variant="outlined"
          onClick={() => {
            handleSignIn(true);
          }}
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            marginRight: 1,
            fontSize: 15,
            color: "white",
            textTransform: "capitalize",
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
          ></AtomWhatshotIcon>
          <AtomIconButton edge="end" onClick={handleCloseSignIn}>
            <AtomHighlightOffIcon />
          </AtomIconButton>
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
          Bắt đầu{" "}
        </AtomDialogTitle>

        <AtomDialogContent>
          <AtomDialogContentText
            // fullWidth
            sx={{
              textAlign: "center",
              // width: 400,
              // maxWidth: "100%",
            }}
          >
            Khi bấm vào Đăng Nhập, bạn đồng ý với Điều khoản của chúng tôi. Tìm
            hiểu về cách chúng tôi xử lý dữ liệu của bạn trong Chính sách Quyền
            Riêng Tư và Chính sách Cookie của chúng tôi.
          </AtomDialogContentText>
          <AtomBox
            component="form"
            // fullWidth
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
            <div>
              <AtomTextField
                id="outlined-search"
                label="Email Address *"
                type="email"
                autoFocus
                vargiant="outlined"
                margin="dense"
              />
            </div>
            {/* <div> */}
            {/* <TextField
                    id="outlined-password-input"
                    label="Password *"
                    type="password"
                    autoComplete="current-password"
                  /> */}
            {/* </div> */}
            <div>
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
            </div>
          </AtomBox>
        </AtomDialogContent>
        <AtomDialogActions>
          <AtomButton>Đăng nhập</AtomButton>
        </AtomDialogActions>
      </AtomDialog>
      {/* </Tooltip> */}
    </AtomBox>
  );
};

export default DialogSignIn;
