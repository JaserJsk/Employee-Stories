import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./assets/scss/style.scss";

const regular = document.createElement("link");
regular.rel = "stylesheet";
regular.href =
  "https://fonts.googleapis.com/css2?family=Ubuntu:wght@400&display=swap";
document.head.appendChild(regular);

const medium = document.createElement("link");
medium.rel = "stylesheet";
medium.href =
  "https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap";
document.head.appendChild(medium);

const italic = document.createElement("link");
italic.rel = "stylesheet";
italic.href =
  "https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,500;1,400&display=swap";
document.head.appendChild(italic);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
