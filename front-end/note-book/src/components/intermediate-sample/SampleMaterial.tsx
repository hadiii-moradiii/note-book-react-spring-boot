import { Box, Button } from "@mui/material";
import ToggleThemeSwitch from "./my-material/ToggleThemeSwitch";
import { AccessAlarm, Timer } from "@mui/icons-material";

const SampleMaterial = () => {
  return (
    <Box>
      <main>This app is using the dark mode</main>

      <h3>material ui</h3>
      <code>npm install @mui/material @emotion/react @emotion/styled</code>
      <code>npm install @mui/icons-material</code>
      <ToggleThemeSwitch />
      <Button variant="contained">Hello World</Button>
      <AccessAlarm />
      <Timer />
    </Box>
    // other code goes here…
  );
};

export default SampleMaterial;
