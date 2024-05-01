import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "../Login.css";
import { Typography, Box, Button } from "@mui/material";
const Login = () => {
  let navigate = useNavigate();
  const [patientButtonColor, setPatientButtonColor] = useState(undefined);
  const [doctorButtonColor, setDoctorButtonColor] = useState(undefined);
  const [adminButtonColor, setAdminButtonColor] = useState("red");
  const [person, setPerson] = useState("admin");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minWidth: "100%",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          background: "#ECECECED 0% 0% no-repeat padding-box",
          width: "30%",
          minWidth: "550px",
          minHeight: "720px",
          height: "80%",
          opacity: "1",
          borderRadius: "8px",
        }}
      >
        <Typography
          sx={{
            minWidth: "75%",
            minHeight: "7%",
            textAlign: "left",
            font: "normal normal bold 40px/48px Roboto",
            color: "#142B43",
            opacity: "1",
            ml: "9%",
            mr: "9%",
            mt: "14%",
          }}
        >
          Welcome to DentiSoft
        </Typography>
        {person === "patient" && (
          <Box display={"flex"} flexDirection={"row"} ml={"8%"} mr={"8%"}>
            <Typography
              sx={{
                ml: "2%",
                width: "50%",
                font: "normal normal normal 25px/30px Roboto",
                color: "#9D9D9D",
                textAlign: "left",
              }}
            >
              New to DentiSoft?
            </Typography>
            <Typography
              sx={{
                width: "20%",
                height: "4vh",
                font: "normal normal normal 25px/30px Roboto",
                color: "#2F9BA2",
                textAlign: "left",
                "&:hover": {
                  color: "#868dfb",
                  cursor: "pointer",
                },
              }}
            >
              <NavLink to={"register"} className="nav_link">
                Sign Up
              </NavLink>
            </Typography>
          </Box>
        )}

        <Box
          className="Person"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: `${adminButtonColor}`,
              "&:hover": {
                backgroundColor: "#868dfb",
              },
            }}
            onClick={() => {
              setPatientButtonColor("rgb(14, 18, 31)");
              setDoctorButtonColor("rgb(14, 18, 31)");
              setAdminButtonColor("red");
              setPerson("admin");
            }}
          >
            Admin
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: `${doctorButtonColor}`,
              "&:hover": {
                backgroundColor: "#868dfb",
              },
            }}
            onClick={() => {
              setPatientButtonColor("rgb(14, 18, 31)");
              setDoctorButtonColor("red");
              setAdminButtonColor("rgb(14, 18, 31)");
              setPerson("doctor");
            }}
          >
            Doctor
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: `${patientButtonColor}`,
              "&:hover": {
                backgroundColor: "#868dfb",
              },
            }}
            onClick={() => {
              setPatientButtonColor("red");
              setDoctorButtonColor("rgb(14, 18, 31)");
              setAdminButtonColor("rgb(14, 18, 31)");
              setPerson("patient");
            }}
          >
            Patient
          </Button>
        </Box>
        <Box
          className="Sign In Form"
          sx={{
            ml: "8%",
            mr: "2%",
            mt: "6%",
          }}
        >
          <form>
            <fieldset style={{ border: "none" }}>
              <legend
                style={{
                  color: "#142A42",
                  height: "47px",
                  font: "normal normal bold 25px/30px Roboto",
                }}
              >
                Sign In
              </legend>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mr: "7%",
                }}
              >
                <input
                  className="login-input"
                  type="text"
                  name="text"
                  id="name"
                  placeholder="Email or Username"
                  required
                />
                <input
                  className="login-input"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    mr: "2%",
                    ml: "2%",
                    mt: "10%",
                    width: "100%",
                    height: "59px",
                    fontSize: "23px",
                    textTransform: "capitalize",
                    "&:hover": {
                      backgroundColor: "#868dfb",
                    },
                  }}
                  onClick={() => {
                    person === "patient"
                      ? navigate("patientDashboard")
                      : person === "doctor"
                      ? navigate("doctorDashboard")
                      : navigate("adminDashboard");
                  }}
                >
                  Login
                </Button>
              </Box>
            </fieldset>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
