import React from "react";
import ReactDOM from "react-dom";
import "virtual:svg-icons-register";
import App from "./App";
// import store from "./store";
import "./styles/reset.css";

const render = () =>
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
render();
// store.subscribe(render);
