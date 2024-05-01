import React from "react";
import { Box, useTheme, Stack, Typography, Button } from "@mui/material";
import { tokens } from "../theme";
import MyProfilePic from "../assets/images/Me.png";

const PatientCard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorStyle =
    theme.palette.mode === "dark" ? `${colors.blueAccent[700]}` : "gray";
  return (
    <Box
      sx={{
        maxWidth: "345",
        display: "flex",
        flexDirection: "column",
        backgroundColor: `${colorStyle}`,
        p: "8%",
        borderRadius: "12px",
      }}
    >
      <Stack
        sx={{ mb: "8%", mt: "-4%", display: "flex", flexDirection: "row" }}
      >
        <img
          src={MyProfilePic}
          alt="MS"
          width={"100px"}
          style={{
            borderRadius: "50%",
          }}
        />
        <Stack display={"flex"} flexDirection={"column"} mt={"4%"} ml={"10%"}>
          <Typography variant="h4">Name</Typography>
          <Typography variant="h4">ID</Typography>
        </Stack>
      </Stack>
      <Stack display={"flex"} flexDirection={"column"} gap={2}>
        <Typography>Address</Typography>
        <Typography>Phone</Typography>
      </Stack>
      <Stack display={"flex"} flexDirection={"column"} gap={2} mb={"4%"}>
        <Typography>Blood Group</Typography>
        <Typography>Last Visit Reason</Typography>
      </Stack>
      <Stack display={"flex"} flexDirection={"row"} gap={2}>
        <Button variant="contained">Diagnose & Prescribe</Button>
        <Button variant="contained">Make an appointment</Button>
      </Stack>
    </Box>
  );
};

export default PatientCard;
