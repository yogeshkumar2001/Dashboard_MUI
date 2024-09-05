import React, { useState } from "react";
import { Breadcrumbs, Button, createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import ClippedDrawer from "./ClippedDrawer";
import Breadcrumb from "./BreadCrumb";
function App() {
  const [mode, setMode] = useState('dark')

  const theme = createTheme({
    palette: {
      mode: mode
    }
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
