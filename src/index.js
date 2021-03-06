import Main from "pages/Main";
import React from "react";
import ReactDOM from "react-dom/client";
import "./setup/global.css";
import reportWebVitals from "./reportWebVitals";
import { initialValue } from "setup/constant";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main initialValue={initialValue} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
