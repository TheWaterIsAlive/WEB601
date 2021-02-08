import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Provider } from "react-redux";
import App from "./react/app";
// import index from "./components/Js/index"
import store from "./redux/store/index";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
