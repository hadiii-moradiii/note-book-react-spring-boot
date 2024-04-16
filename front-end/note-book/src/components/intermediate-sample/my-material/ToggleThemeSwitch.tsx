import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { useState } from "react";

const ToggleThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div>
        <Switch
          checked={darkMode}
          onChange={handleThemeToggle}
          name="darkModeToggle"
        />
        <label htmlFor="darkModeToggle">Toggle Dark Mode</label>
      </div>
    </ThemeProvider>
  );
};

export default ToggleThemeSwitch;
