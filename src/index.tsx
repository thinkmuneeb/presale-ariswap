import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Define what props.theme will look like
const theme = {
  text: {
    primary: "#ffffff",
    secondary: "",
    tertiary: "",
  },
  button: {
    text: "#2c0243",
    background: "linear-gradient(90deg, #fce21d 0%, #f9820b 100%)",
  },
  background: "#29013e",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
