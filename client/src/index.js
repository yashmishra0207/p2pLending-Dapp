import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const mytheme = createMuiTheme({
  palette: {
    primary: {
      main: "#1e90ff",
    },
    secondary: {
      main: "#ff69b4",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={mytheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
