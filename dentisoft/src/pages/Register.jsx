import { Typography, Box, Button, Stack } from "@mui/material";
import "../Register.css";
import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();

  const [selectedGender, setSelectedGender] = useState("");

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

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
        <Box
          className="Register Form"
          sx={{
            ml: "8%",
            mr: "2%",
            mt: "6%",
          }}
        >
          <form>
            <fieldset style={{ border: "none", marginTop: "12%" }}>
              <legend
                style={{
                  color: "#142A42",
                  height: "47px",
                  font: "normal normal bold 25px/30px Roboto",
                }}
              >
                Sign Up
              </legend>
              <Typography
                sx={{
                  width: "414px",
                  height: "47px",
                  font: "normal normal normal 25px/30px Roboto",
                  color: "#9D9D9D",
                }}
              >
                Enter Details to Create Your Account
              </Typography>
              <Box
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-between"}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                  <input
                    type="number"
                    name="SSN"
                    id="SSN"
                    placeholder="SSN"
                    required
                  />
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    required
                  />
                  <span id="gender-radio">
                    <h3>Gender</h3>

                    <input
                      className="radio-input"
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={selectedGender === "Male"}
                      onChange={handleGenderChange}
                      required
                    />
                    <label className="registerlabels" htmlFor="male">
                      Male
                    </label>

                    <input
                      className="radio-input"
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={selectedGender === "Female"}
                      onChange={handleGenderChange}
                    />
                    <label className="registerlabels" htmlFor="female">
                      Female
                    </label>
                  </span>
                </Box>
                <Stack>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    required
                  />
                  <input
                    type="password"
                    name="Password"
                    id="Password"
                    placeholder="Password"
                    required
                  />
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="City"
                    required
                  />
                  <input
                    type="date"
                    name="birthDate"
                    id="birthDate"
                    placeholder="Birth Date"
                    required
                  />
                </Stack>
              </Box>
              <Box>
                <Typography
                  sx={{
                    font: "normal normal normal 25px/30px Roboto",
                    color: "#9D9D9D",
                    mt: "7%",
                  }}
                >
                  Already Registered?
                  <span
                    style={{
                      font: "normal normal normal 25px/30px Roboto",
                      color: "#2F9BA2",
                      marginLeft: "2%",
                    }}
                  >
                    <NavLink to={"../login"} className={"nav_link"}>
                      Login
                    </NavLink>
                  </span>
                </Typography>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    mt: "5%",
                    width: "100%",
                    height: "59px",
                    fontSize: "23px",
                    textTransform: "capitalize",
                    "&:hover": {
                      backgroundColor: "#868dfb",
                    },
                  }}
                  onClick={() => navigate("patientinfo")}
                >
                  Register
                </Button>
              </Box>
            </fieldset>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
