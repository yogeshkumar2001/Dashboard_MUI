import React, { useState } from "react";
import { Breadcrumbs, Button, createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import ClippedDrawer from "./ClippedDrawer";
function App() {
  const [mode, setMode] = useState('dark')

  const theme = createTheme({
    palette: {
      mode: mode
    }, breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  })
  const buttonHandler = (e) => {
    setMode(mode == "light" ? "dark" : "light")
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ClippedDrawer />
    </ThemeProvider>
  );
}

export default App;
