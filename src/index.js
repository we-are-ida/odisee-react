import "./styles/global.css";

// requestAnimationFrame polyfill needed for react 16
import "raf/polyfill";

import React from "react";
import ReactDOM from "react-dom";

import App from "./containers/App/App";

ReactDOM.render(<App />, document.getElementById("root"));
