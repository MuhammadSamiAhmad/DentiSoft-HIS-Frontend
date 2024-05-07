import React from "react";
import { Outlet } from "react-router-dom";
import { Box, useTheme } from "@mui/material";

import PatientSidebar from "../components/patient/PatientSidebar";
import AdminSidebar from "../components/admin/AdminSidebar";
import DoctorSidebar from "../components/doctor/DoctorSidebar";
import Topbar from "../components/Topbar";

const Layout = ({ person }) => {
  const theme = useTheme();
  const colorStyle = theme.palette.mode === "dark" ? "#868dfb" : "#a4a9fc";

  return (
    <div
      className="app"
      style={{ display: "flex", flexDirection: "row", height: "100vh" }}
    >
      {person === "patient" ? (
        <PatientSidebar />
      ) : person === "doctor" ? (
        <DoctorSidebar />
      ) : (
        <AdminSidebar />
      )}
      <main
        className="content"
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          overflowY: "auto",
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"end"}
          sx={{ borderBottom: `10px solid ${colorStyle}` }}
        >
          <Topbar personSettings={"patientSettings"} />
        </Box>
        <Outlet />{" "}
      </main>
    </div>
  );
};

export default Layout;
