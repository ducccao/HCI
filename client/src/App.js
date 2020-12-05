import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login/Login";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import RecognizeFaceMask from "./Components/RecognizeFaceMask/RecognizeFaceMask";

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
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />

          <Route path="/login" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/facemask" exact component={RecognizeFaceMask} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
