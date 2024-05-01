import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import Topbar from "../components/Topbar";
import DoctorSidebar from "../components/doctor/DoctorSidebar";
import { tokens } from "../theme";

import { Outlet } from "react-router-dom"; //placing this component is equivalent to placing nested route in that same place in the page.

const DoctorDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorStyle =
    theme.palette.mode === "dark" ? `${colors.blueAccent[700]}` : "red";

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box>
        <DoctorSidebar />
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
          {/* <Typography ml={"2%"}>
            <Header title={"DASHBOARD"} subtitle={"Welcome back, Doctor"} />
          </Typography> */}
        </Box>
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default DoctorDashboard;
