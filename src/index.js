/**
 * Application entry point
 */

import "./styles/global.css";

// requestAnimationFrame polyfill needed for react 16
import "raf/polyfill";

// Import react
import React from "react";
import ReactDOM from "react-dom";

// Render to dom
ReactDOM.render(<h1>Hello Odisee</h1>, document.getElementById("root"));
