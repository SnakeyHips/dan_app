import React from "react";
import ReactDOM from "react-dom";
import "./dotenv";
import "./aws-amplify";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import App from "./components/App";
import theme from "./styles/light-theme";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.querySelector("#root"));

serviceWorker.unregister();
