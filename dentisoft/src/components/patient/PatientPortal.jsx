import React from "react";
import Header from "../../components/Header";

import {
  useTheme,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
  Paper,
} from "@mui/material";
import { mockPatientData } from "../../data/mockData"; // Import the mock data

const PatientPortal = () => {
  const patient = mockPatientData[1];

  const theme = useTheme();
  const colorStyle = theme.palette.mode === "dark" ? "#141b2d" : "#fff";
  return (
    <Box m="20px">
      <Header title="Medical History" />
      <Box m="40px 0 0 0" height="75vh">
        <Box className="medical-history-page">
          <Box className="patient-info" borderBottom="1px solid #ddd" pb="20px">
            <Typography variant="h2" mb={"4%"}>
              General Information
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                mb: "6%",
              }}
            >
              <Stack>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  mb="5px"
                  fontSize={"20px"}
                  fontWeight={"bold"}
                >
                  Date of Birth: {patient.dateOfBirth}
                </Typography>

                <Typography
                  variant="body1"
                  color="textSecondary"
                  fontSize={"20px"}
                  fontWeight={"bold"}
                >
                  Address: {patient.address}
                </Typography>
              </Stack>
              <Stack>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  fontSize={"20px"}
                  fontWeight={"bold"}
                >
                  Blood Group: {patient.bloodGroup}
                </Typography>{" "}
                <Typography
                  variant="body1"
                  color="textSecondary"
                  mb="5px"
                  fontSize={"20px"}
                  fontWeight={"bold"}
                >
                  Gender: {patient.gender}
                </Typography>
              </Stack>
              <Stack>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  mb="5px"
                  fontSize={"20px"}
                  fontWeight={"bold"}
                >
                  Smoking: {patient.smokingStatus}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  mb="5px"
                  fontSize={"20px"}
                  fontWeight={"bold"}
                >
                  Aclohol Intake: {patient.alcoholStatus}
                </Typography>
              </Stack>
            </Box>
          </Box>
          <Box className="medical-history">
            <Typography variant="h2" mb={"4%"} mt={"4%"}>
              Medical Records
            </Typography>
            <TableContainer
              component={Paper}
              sx={{ backgroundColor: `${colorStyle}` }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontSize: "20px" }}>Date</TableCell>
                    <TableCell sx={{ fontSize: "20px" }}>
                      Visit Reason
                    </TableCell>
                    <TableCell sx={{ fontSize: "20px" }}>Diagnosis</TableCell>
                    <TableCell sx={{ fontSize: "20px" }}>Treatment</TableCell>
                    <TableCell sx={{ fontSize: "20px" }}>Surgeries</TableCell>
                    <TableCell sx={{ fontSize: "20px" }}>Allergies</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {patient.medicalRecords.map((record, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{ fontSize: "15px" }}>
                        {record.date}
                      </TableCell>
                      <TableCell sx={{ fontSize: "15px" }}>
                        {record.visitReason}
                      </TableCell>
                      <TableCell sx={{ fontSize: "15px" }}>
                        {record.diagnosis}
                      </TableCell>
                      <TableCell sx={{ fontSize: "15px" }}>
                        {record.treatment}
                      </TableCell>
                      <TableCell sx={{ fontSize: "15px" }}>
                        {record.surgeries}
                      </TableCell>
                      <TableCell sx={{ fontSize: "15px" }}>
                        {record.allergies}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PatientPortal;
