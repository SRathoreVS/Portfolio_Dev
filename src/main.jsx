import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App.jsx";
import "./utils/i18n.js";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getTheme } from "./theme.jsx";

function Root() {
  const theme = getTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
