import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ColorModeContext } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Topbar = ({ personSettings }) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <NavLink to={`${personSettings}`}>
          <IconButton>
            <SettingsOutlinedIcon />
          </IconButton>
        </NavLink>
      </Box>
    </Box>
  );
};

export default Topbar;
