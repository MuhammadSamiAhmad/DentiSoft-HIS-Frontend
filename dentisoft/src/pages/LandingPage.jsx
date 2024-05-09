import React from "react";

import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { Box, Stack, Typography, Button, useTheme } from "@mui/material";
import ServiceCard from "../components/ServiceCard";
import Logo from "../assets/images/Logo.jpeg";

const LandingPage = () => {
  let navigate = useNavigate();

  const theme = useTheme();
  const colorStyle = theme.palette.mode === "dark" ? "white" : "black";

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
      }}
    >
      <Stack
        className="NavBar"
        flexDirection={"row"}
        justifyContent={"space-between"}
        sx={{ height: "90px" }}
      >
        <img
          src={Logo}
          alt=""
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            margin: "10px 10px 10px 50px",
          }}
        />
        <Stack className="Links" flexDirection={"row"} gap={10}>
          <Link
            smooth={true}
            offset={50}
            duration={500}
            delay={250}
            to={"Banner"}
          >
            <Typography
              variant="h3"
              fontWeight={"bold"}
              sx={{
                ":hover": {
                  color: "red",
                  cursor: "pointer",
                  transition: "all .3s ease-out",
                  transform: "translateY(-5px)",
                },
                color: `${colorStyle}`,
              }}
              mt={"30px"}
            >
              Home
            </Typography>
          </Link>
          <Link
            smooth={true}
            offset={50}
            duration={500}
            delay={250}
            to={"About"}
          >
            <Typography
              variant="h3"
              fontWeight={"bold"}
              sx={{
                ":hover": {
                  color: "red",
                  cursor: "pointer",
                  transition: "all .3s ease-out",
                  transform: "translateY(-5px)",
                },
                color: `${colorStyle}`,
              }}
              mt={"30px"}
            >
              About
            </Typography>
          </Link>
          <Link
            smooth={true}
            offset={50}
            duration={500}
            delay={250}
            to={"Services"}
          >
            <Typography
              variant="h3"
              fontWeight={"bold"}
              sx={{
                ":hover": {
                  color: "red",
                  cursor: "pointer",
                  transition: "all .3s ease-out",
                  transform: "translateY(-5px)",
                },
                color: `${colorStyle}`,
              }}
              mt={"30px"}
            >
              Services
            </Typography>
          </Link>
          {/* <Link
            smooth={true}
            offset={50}
            duration={500}
            delay={250}
            to={"Footer"}
          >
            <Typography
              variant="h3"
              fontWeight={"bold"}
              sx={{
                ":hover": {
                  color: "red",
                  cursor: "pointer",
                  transition: "all .3s ease-out",
                  transform: "translateY(-5px)",
                },
                color: `${colorStyle}`,
              }}
              mt={"30px"}
            >
              Contact Us
            </Typography>
          </Link> */}
          <Button
            variant="contained"
            size="large"
            color="secondary"
            sx={{
              margin: "30px 10px 30px 10px",
              ":hover": {
                backgroundColor: "red",
                transition: "all .3s ease-out",
                transform: "translateY(-5px)",
              },
            }}
            onClick={() => {
              navigate("login");
            }}
          >
            Login
          </Button>
        </Stack>
      </Stack>
      <div id="Banner">
        <Stack className="Banner" position={"relative"}>
          <img src={require(`../assets/images/Dentist.jpeg`)} alt="" />
          <Stack position={"absolute"} left={320} top={300}>
            <Typography variant="h3" color={"#4cceac"}>
              {" "}
              WE USE LATEST MEDICAL TECHNOLOGY
            </Typography>
            <Typography variant="h1" fontWeight={"bold"}>
              Let Us Brighten <br /> Your Smile
            </Typography>
          </Stack>
        </Stack>
      </div>
      <div id="About">
        <Stack className="About">
          <Typography variant="h1" m={"5% auto auto 47%"} color={"#4cceac"}>
            About Us
          </Typography>
          <Typography variant="h4" m={"2% 20% 2% 20%"}>
            Welcome to{" "}
            <span style={{ color: "#4cceac", fontStyle: "italic" }}>
              <strong> Radiant Smiles</strong>
            </span>
            , your trusted dental care provider. Our team is dedicated to
            providing high-quality, compassionate care to patients of all ages.
            With state-of-the-art facilities and a commitment to excellence, we
            strive to create a comfortable and welcoming environment for all
            your dental needs. Trust us to help you achieve a healthy, beautiful
            smile that lasts a lifetime.
          </Typography>
          <hr
            style={{
              width: "80vw",
              borderTop: "3px solid #4cceac",
            }}
          />
        </Stack>
      </div>
      <div id="Services">
        <Typography variant="h1" m={"5% auto auto 46%"} color={"#4cceac"}>
          Our Services
        </Typography>
        <Stack
          className="Services"
          flexDirection={"row"}
          flexWrap={"wrap"}
          gap={4}
          mt={"2%"}
          justifyContent={"center"}
          alignItems={"center"}
          mb={"3%"}
        >
          <ServiceCard
            serviceName={"Teeth Cleaning"}
            serviceDescription={
              "Regular cleaning to remove plaque and tartar, keeping your smile healthy and bright."
            }
          />
          <ServiceCard
            serviceName={"Dental Fillings"}
            serviceDescription={
              "Repair cavities and damage, restoring tooth structure and preventing further decay."
            }
          />
          <ServiceCard
            serviceName={"Teeth Whitening"}
            serviceDescription={
              " Lighten teeth color, remove stains, and enhance your smile's appearance."
            }
          />
          <ServiceCard
            serviceName={"Dental Implants"}
            serviceDescription={
              "Permanent solution for missing teeth, providing a natural look and feel."
            }
          />
        </Stack>
      </div>
      <div id="Footer">
        <Stack className="Footer" sx={{ backgroundColor: "black" }}></Stack>
      </div>
    </Box>
  );
};

export default LandingPage;
