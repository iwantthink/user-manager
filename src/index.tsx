import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";
import store from "./redux/usersStore";
import { Provider } from "react-redux";

const element = document.createElement("div");
element.classList.add("root");
document.body.appendChild(element);
store.getState()
ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  element
);
