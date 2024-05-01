import React from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";
import Card from "../PatientCard";

const DoctorPatients = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Patients" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "500px",
        }}
      >
        <Card />
      </Box>
    </Box>
  );
};

export default DoctorPatients;
