import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff4458",
      light: "#ff7b85",
      dark: "c5002f",
      contrastText: "#ffffff",
      grey: "#424242",
    },
    text: {
      primary: "#21262e",
      secondary: "#939ba7",
    },
    secondary: {
      main: "#d6002f",
      light: "#ff5258",
      dark: "9c0008",
      contrastText: "#ffffff",
    },
    common: {
      black: "#000000",
      white: "#ffffff",
    },
  },
  typography: {
    color: "#ffffff",
    "&:hover": {
      color: "red",
    },
    fontWeightBold: 700,
    fontFamily: "Proxima Nova,Helvetica Neue,Arial,Helvetica,sans-serif",
    textTransform: "capitalize",
    fontSize: 15,
  },
});
export default theme;
