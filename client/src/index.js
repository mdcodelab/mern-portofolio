import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { AppProvider } from "./useContext";

import App from "./App";
import "./App.css";

const root = document.getElementById("root");
createRoot(root).render(
  <AppProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppProvider>
);
