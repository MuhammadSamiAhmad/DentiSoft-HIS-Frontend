import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import Topbar from "../components/Topbar";
import PatientSidebar from "../components/patient/PatientSidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom"; //placing this component is equivalent to placing nested route in that same place in the page.

const PatientDashboard = () => {
  const theme = useTheme();
  const colorStyle = theme.palette.mode === "dark" ? "#868dfb" : "red";

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box>
        <PatientSidebar />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        position={"relative"}
        flexGrow={"1"}
      >
        <Box
          display={"flex"}
          justifyContent={"end"}
          sx={{ borderBottom: `10px solid ${colorStyle}` }}
        >
          <Topbar />
        </Box>

        <Box>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default PatientDashboard;
