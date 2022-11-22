import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import * as React from "react";
import RoutesDating from "./routes/RoutesDating";
import { amber, grey, deepOrange, pink, red } from "@mui/material/colors";
import theme from "./CustomTheme";
import AtomIconButton from "./Atomic/atoms/IconButton/AtomIconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import AtomBox from "./Atomic/atoms/Box/AtomBox";

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
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <AtomIconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
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
                },
                background: {
                  paper: grey[200],
                  row: grey[400],
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
                divider: grey[200],
                background: {
                  paper: grey[900],
                  default: grey[900],
                },
                text: {
                  primary: "#fff",
                  secondary: grey[200],
                },
                common: {
                  white: "#fff",
                  title: grey[50],
                  titleDraw: grey[200],
                  icon: grey[50],
                  menu: grey[50],
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
