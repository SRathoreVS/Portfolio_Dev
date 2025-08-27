import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#0ea5e9",
      },
      secondary: {
        main: "#06b6d4",
      },
      background: {
        default: mode === "light" ? "#f9fafb" : "#0f172a", // ✅ lighter bg for light, dark navy for dark
        paper: mode === "light" ? "#ffffff" : "#1e293b",
      },
      text: {
        primary: mode === "light" ? "#111827" : "#f9fafb", // ✅ darker in light mode
        secondary: mode === "light" ? "#374151" : "#9ca3af",
      },
    },
    typography: {
      fontFamily: ["Inter", "Segoe UI", "Roboto", "Arial", "sans-serif"].join(
        ","
      ),
      allVariants: {
        color: mode === "light" ? "#111827" : "#f9fafb", // ✅ ensure all text adjusts
      },
    },
  });
