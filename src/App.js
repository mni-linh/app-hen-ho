import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import * as React from "react";
import RoutesDating from "./routes/RoutesDating";
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff4458",
      light: "#ff7b85",
      dark: "c5002f",
      contrastText: "#ffffff",
      grey: "#424242",
    },
    secondary: {
      main: "#d6002f",
      light: "#ff5258",
      dark: "9c0008",
      contrastText: "#ffffff",
    },
    common: {
      black: "#000000",
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
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RoutesDating />
    </ThemeProvider>
  );
};

export default App;
