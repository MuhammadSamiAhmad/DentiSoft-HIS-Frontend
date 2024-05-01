import React from "react";
import { Box, useTheme } from "@mui/material";
import Topbar from "../components/Topbar";
import AdminSidebar from "../components/admin/AdminSidebar";
import { Outlet } from "react-router-dom"; //placing this component is equivalent to placing nested route in that same place in the page.

const AdminDashboard = () => {
  const theme = useTheme();
  const colorStyle = theme.palette.mode === "dark" ? "#868dfb" : "red";

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box>
        <AdminSidebar />
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

export default AdminDashboard;
