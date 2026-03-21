import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ThemeState from "./contextapi/ThemeState"; // Context Provider
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeState>
        <App />
      </ThemeState>
    </BrowserRouter>
  </React.StrictMode>
);