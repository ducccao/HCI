import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login/Login";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const custom_theme = createMuiTheme({
  palette: {
    primary: {
      //light: "red",
      //  dark: "red",
      main: "#489DEB",
      contrastText: "white",
    },
  },
  props: {
    MuiOutlinedInput: {
      color: "primary",
    },

    MuiInputBase: {
      color: "red;",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={custom_theme}>
      <Login />
    </ThemeProvider>
  );
}

export default App;
