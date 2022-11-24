import * as React from "react";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import theme from "./CustomTheme";
import { grey, red } from "@mui/material/colors";
import { CssBaseline } from "@mui/material";

import RoutesDating from "./routes/RoutesDating";

import AtomBox from "./Atomic/atoms/Box/AtomBox";
import AtomIconButton from "./Atomic/atoms/IconButton/AtomIconButton";
import AtomBrightness4Icon from "./Atomic/atoms/Brightness4Icon/AtomBrightness4";
import AtomBrightness7Icon from "./Atomic/atoms/Brightness7Icon/Brightness7Icon";

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <AtomBox
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        padding: 3,
      }}
    >
      {theme.palette.mode} mode
      <AtomIconButton
        sx={{ marginLeft: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <AtomBrightness7Icon />
        ) : (
          <AtomBrightness4Icon />
        )}
      </AtomIconButton>
    </AtomBox>
  );
}
const App = () => {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = React.useMemo(
    () =>
      createTheme({
        typography: {
          fontWeightBold: 700,
          button: { textTransform: "capitalize" },
        },
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: grey,
                action: {
                  hover: red[500],
                },
                common: {
                  title: grey[800],
                  titleDraw: grey[800],
                  content: grey[50],
                  icon: grey[800],
                  menu: grey[50],
                  white: "#fff",
                  logo: red[500],
                },
                background: {
                  paper: grey[200],
                  row: grey[400],
                  itemLang: grey[400],
                },
                divider: grey[400],
                text: {
                  primary: grey[900],
                  secondary: grey[800],
                },
              }
            : {
                // palette values for dark mode
                primary: { main: "#fff" },
                action: {
                  hover: red[500],
                },
                common: {
                  white: "#fff",
                  title: grey[50],
                  titleDraw: grey[200],
                  icon: grey[50],
                  menu: grey[50],
                  logo: red[500],
                },
                background: {
                  paper: grey[900],
                  default: grey[900],
                  itemLang: grey[400],
                },
                divider: grey[200],
                text: {
                  primary: "#fff",
                  secondary: grey[200],
                },
              }),
        },
      }),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RoutesDating />
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
