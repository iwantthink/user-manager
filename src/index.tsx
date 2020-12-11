import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";

const element = document.createElement("div");
element.classList.add("root");
document.body.appendChild(element);
ReactDOM.render(<App></App>, element);