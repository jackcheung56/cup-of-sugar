import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { useState } from "react";

export default function Dashboard() {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    },
  });
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div> Sample Text </div>
    </ThemeProvider>
  );
}
