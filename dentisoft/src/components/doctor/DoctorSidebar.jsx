import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Icon from "@mui/material/Icon";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import SickOutlinedIcon from "@mui/icons-material/SickOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MedicalServicesRoundedIcon from "@mui/icons-material/MedicalServicesRounded";
import MyProfilePic from "../../assets/images/Me.png";

import { Item } from "../../utils/SiderbarItem";

const DoctorSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const colorStyle = theme.palette.mode === "dark" ? "#868dfb" : "red";

  return (
    <Sidebar
      rootStyles={{
        ".ps-sidebar-container": {
          backgroundColor: `${colors.primary[400]}`,
          height: "100vh",
        },
      }}
      collapsed={isCollapsed}
    >
      <Menu
        iconShape="square"
        rootStyles={{
          ".ps-menu-button:hover": {
            backgroundColor: "transparent !important",
            color: `${colorStyle} !important`,
          },
        }}
      >
        {/* LOGO AND MENU ICON */}
        <MenuItem
          onClick={() => setIsCollapsed(!isCollapsed)}
          icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
          style={{
            margin: "10px 0 20px 0",
            color: colors.grey[100],
          }}
        >
          {!isCollapsed && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="15px"
            >
              <Box display={"flex"} flexDirection={"row"}>
                <Icon sx={{ mr: "20px", mt: "3px" }} color="error">
                  <MedicalServicesRoundedIcon />
                </Icon>
                <Typography variant="h3" color={colors.grey[100]}>
                  DentiSoft
                </Typography>
              </Box>
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          )}
        </MenuItem>

        {!isCollapsed && (
          <Box
            mb="25px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection={"column"}
          >
            <img
              src={MyProfilePic}
              alt="MS"
              width={"100px"}
              style={{
                borderRadius: "50%",
              }}
            />
            <Box textAlign="center">
              <Typography
                variant="h4"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                Muhammad Sami
              </Typography>
              <Typography
                variant="h5"
                color={colors.greenAccent[500]}
                mb={"40%"}
              >
                Doctor
              </Typography>
            </Box>
          </Box>
        )}

        <Box paddingLeft={isCollapsed ? undefined : "10%"}>
          <NavLink to={"login/doctorDashboard"}>
            <Item
              title="Dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </NavLink>
          <NavLink to={"doctorAppointments"}>
            <Item
              title="Appointments"
              icon={<FactCheckOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </NavLink>
          <NavLink to={"doctorPatients"}>
            <Item
              title="Patients"
              icon={<SickOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </NavLink>
        </Box>
      </Menu>
    </Sidebar>
  );
};

export default DoctorSidebar;
