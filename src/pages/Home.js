import AtomAppBar from "../Atomic/atoms/AtomAppBar";
import AtomContainer from "../Atomic/atoms/AtomContainer";
import AtomToolbar from "../Atomic/atoms/AtomToolbar";
import AtomTypography from "../Atomic/atoms/AtomTypography";
import AtomBox from "../Atomic/atoms/AtomBox";
import AtomButton from "../Atomic/atoms/AtomButton";
import AtomTooltip from "../Atomic/atoms/AtomTooltip";
import AtomDialog from "../Atomic/atoms/AtomDialog";
import AtomDialogTitle from "../Atomic/atoms/AtomDialogTitle";
import AtomList from "../Atomic/atoms/AtomList";
import AtomListItemText from "../Atomic/atoms/AtomListItemText";
import AtomListItem from "../Atomic/atoms/AtomListItem";
import AtomDivider from "../Atomic/atoms/AtomDivider";
import AtomIconButton from "../Atomic/atoms/AtomIconButton";
import AtomDialogContent from "../Atomic/atoms/AtomDialogContent";
import AtomDialogContentText from "../Atomic/atoms/AtomDialogContentText";
import AtomTextField from "../Atomic/atoms/AtomTextField";
import AtomDialogActions from "../Atomic/atoms/AtomDialogActions";
import AtomFormControl from "../Atomic/atoms/AtomFormControl";
import AtomInputLabel from "../Atomic/atoms/AtomInputLabel";
import AtomOutlinedInput from "../Atomic/atoms/AtomOutlinedInput";
import AtomInputAdornment from "../Atomic/atoms/AtomInputAdornment";

import React from "react";
import PropTypes from "prop-types";

import AtomWhatshotIcon from "../Atomic/atoms/AtomWhatshotIcon";
import AtomPublicIcon from "../Atomic/atoms/AtomPublicIcon";
import AtomHighlightOffIcon from "../Atomic/atoms/AtomHighlightOffIcon";
import AtomVisibilityIcon from "../Atomic/atoms/AtomVisibilityIcon";
import AtomVisibilityOffIcon from "../Atomic/atoms/AtomVisibilityOffIcon";

import dataDating from "../routes/dataDating";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";
import ImageLogo from "../Atomic/molecules/ImageLogo";

const languages = [
  "English (US)",
  "Tiếng Việt",
  "Afrikaans",
  "العربية",
  "Azeri",
  "Български",
  "বাংলা",
  "Boanski",
  "Català",
  "Čeština",
  "Dansk",
  "Deutsch",
  "Ελληνικά",
  "English(Australia)",
  "English(United Kingdom)",
  "Español",
  "Español(Argentina)",
  "Español(España)",
  "Eesti keel",
  "Euskera",
  "Suomi",
  "Français (France)",
  "Français (Canada)",
  "Galego",
  "עברית",
  "हिन्दी",
  "Hrvatski",
  "Magyar",
  "Bahasa Indonesia",
  "Italiano",
  "日本語",
  "ქართული ენა",
  "қазақ тілі",
  "ខ្មែរ",
  "한국어",
  "Lietuvių kalba",
  "Latviešu valoda",
  "Македонски јазик",
  "Bahasa Melayu",
  "Norsk",
  "Nederlands",
  "Polski",
  "Português (Brasil)",
  "Português (Portugal)",
  "Română",
  "Русский",
  "Slovenčina",
  "Slovenščina",
  "Srpski",
  "Svenska",
  "தமிழ்",
  "తెలుగు",
  "ภาษาไทย",
  "Türkçe",
  "Українська",
  "Filipino",
  "中文 (简体)",
  "中文 (台灣)",
];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <AtomDialog onClose={handleClose} open={open}>
      {/* <> */}
      <AtomToolbar>
        <AtomWhatshotIcon
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            marginRight: 1,
            paddingLeft: 10,
            paddingRight: 10,
            color: "red",
            textAlign: "center",
          }}
        />
        <AtomIconButton edge="end" onClick={handleClose}>
          <AtomHighlightOffIcon />
        </AtomIconButton>
      </AtomToolbar>

      <AtomDialogTitle>Chọn một ngôn ngữ</AtomDialogTitle>
      <AtomTypography
        sx={{
          paddingLeft: 3,
        }}
      >
        {selectedValue}
      </AtomTypography>
      <AtomDivider variant="middle" />
      {/*  */}
      <AtomList>
        {languages.map((language) => (
          <AtomListItem
            button
            onClick={() => handleListItemClick(language)}
            key={language}
          >
            <Stack direction="row" spacing={2}>
              <AtomButton
                sx={{
                  // display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "#424242",
                  textTransform: "capitalize",
                }}
              >
                <AtomListItemText primary={language} />
              </AtomButton>
            </Stack>
          </AtomListItem>
        ))}
      </AtomList>
    </AtomDialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(languages[1]);
  const [openSignIn, setOpenSignIn] = React.useState(false);
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  // const [openSignUp, setOpenSignUp] = React.useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const handleSignIn = (bool) => {
    setOpenSignIn(bool);
  };

  const handleCloseSignIn = () => {
    handleSignIn(false);
  };

  // const handleSignUp = (bool) => {
  //   setOpenSignUp(bool);
  // };

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
    <AtomAppBar position="static">
      <AtomContainer maxWidth="xl">
        <AtomToolbar disableGutters>
          <ImageLogo alt="logo" src="/images/logoTinder.png"></ImageLogo>
          {/* <AtomWhatshotIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          /> */}
          <AtomTypography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              marginRight: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Segoe UI",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            tinder
          </AtomTypography>
          {/* Menu */}
          <AtomBox sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {dataDating.map((page, index) => (
              <AtomButton
                key={index}
                onClick={() => {
                  navigate(`${page.path}`);
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </AtomButton>
            ))}
          </AtomBox>
          {/* dialog language */}
          <AtomBox sm={{ flexGrow: 0 }}>
            <AtomTooltip title="Change language">
              <Stack direction="row" spacing={2}>
                <AtomButton
                  variant="outlined"
                  startIcon={<AtomPublicIcon />}
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
                  onClick={handleClickOpen}
                >
                  {selectedValue}
                </AtomButton>
                <SimpleDialog
                  selectedValue={selectedValue}
                  open={open}
                  onClose={handleClose}
                  sx={{
                    textTransform: "capitalize",
                  }}
                ></SimpleDialog>
              </Stack>
            </AtomTooltip>
          </AtomBox>
          {/* Button Login */}
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
                  Khi bấm vào Đăng Nhập, bạn đồng ý với Điều khoản của chúng
                  tôi. Tìm hiểu về cách chúng tôi xử lý dữ liệu của bạn trong
                  Chính sách Quyền Riêng Tư và Chính sách Cookie của chúng tôi.
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
        </AtomToolbar>
      </AtomContainer>
    </AtomAppBar>
  );
};

export default Home;
