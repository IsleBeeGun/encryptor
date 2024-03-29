import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
// import "./reset.scss";
import "./index.scss";
import "bootstrap/scss/bootstrap.scss";
import 'bootstrap/dist/js/bootstrap.bundle';
import App from "./components/App/App.jsx";
import * as serviceWorker from "./serviceWorker";
import { store } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
