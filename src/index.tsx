import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import store from "./redux/store";

// Define what props.theme will look like
const theme = {
  text: {
    primary: "#ffffff",
    secondary: "#b9d2f4",
    tertiary: "#FBAE2A",
    quaternary: "#8ca2e5",
    quinary: "#415076",
  },
  button: {
    text: "#2c0243",
    background: "linear-gradient(90deg, #fce21d 0%, #f9820b 100%)",
  },
  background: "#29013e",
  darkNav: "#08103b",
  inputBackground: "#7303b0",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
