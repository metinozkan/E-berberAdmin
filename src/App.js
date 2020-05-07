import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import history from "./services/history";
import Routes from "./routes";
import GlobalStyles from "./styles/global";
import "./styles/main.scss";

import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const newTheme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
});

function App() {
  return (
    <Router history={history}>
      <ThemeProvider theme={newTheme}>
        <Routes />
      </ThemeProvider>
      <GlobalStyles />
    </Router>
  );
}

export default App;
