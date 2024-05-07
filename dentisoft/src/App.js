import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Routes, Route } from "react-router-dom";
//Importing Components
// import Topbar from "./components/Topbar"; // will be called inside dashboard pages

//Importing Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import PatientInfo from "./pages/PatientInfo";

import CreateAppointment from "./components/forms/CreateAppointment";
import ProfileSettings from "./components/forms/ProfileSettings";
//Importing Admin components (Sidebar Items)
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminDoctors from "./components/admin/AdminDoctors";
import AddDoctor from "./components/forms/AddDoctor";
import AddPatient from "./components/forms/AddPatient";
import AdminAppointments from "./components/admin/AdminAppointments";
import AdminPatients from "./components/admin/AdminPatients";
import Inventory from "./components/admin/Inventory";
import AddEquipmentForm from "./components/forms/AddEquipment";
//Importing Patient components (Sidebar Items)
import PatientDashboard from "./components/patient/PatientDashboard";
import PatientPortal from "./components/patient/PatientPortal";
import PatientAppointments from "./components/patient/PatientAppointments";
import PatientPrescriptions from "./components/patient/PatientPrescriptions";
import Billing from "./components/patient/Billing";
//Importing Doctor components (Sidebar Items)
import DoctorDashboard from "./components/doctor/DoctorDashboard";
import DoctorAppointments from "./components/doctor/DoctorAppointments";
import DoctorPatients from "./components/doctor/DoctorPatients";

import Topbar from "./components/Topbar";
import PatientSidebar from "./components/patient/PatientSidebar";
import AdminSidebar from "./components/admin/AdminSidebar";
import DoctorSidebar from "./components/doctor/DoctorSidebar";
import { useState } from "react";

function App() {
  const [theme, colorMode] = useMode();
  const colorStyle = theme.palette.mode === "dark" ? "#868dfb" : "#a4a9fc";
  const [person, setPerson] = useState("admin");
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route
            index
            path="login"
            element={<Login person={person} setPerson={setPerson} />}
          />
          <Route path="login/register" element={<Register />} />
          <Route path="login/register/patientinfo" element={<PatientInfo />} />
        </Routes>
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
            <Routes>
              <Route path="login/adminDashboard" element={<AdminDashboard />} />
              <Route path="createAppointment" element={<CreateAppointment />} />
              <Route path="adminDoctors" element={<AdminDoctors />} />
              <Route path="addDoctor" element={<AddDoctor />} />
              <Route path="adminAppointments" element={<AdminAppointments />} />
              <Route path="settings" element={<ProfileSettings />} />
              <Route path="inventory" element={<Inventory />} />
              <Route path="addEquipment" element={<AddEquipmentForm />} />
              <Route path="patients" element={<AdminPatients />} />
              <Route path="addPatient" element={<AddPatient />} />

              <Route
                path="login/patientDashboard"
                element={<PatientDashboard />}
              />
              <Route path="patientPortal" element={<PatientPortal />} />
              <Route path="bookAppointment" element={<CreateAppointment />} />
              <Route
                path="patientAppointments"
                element={<PatientAppointments />}
              />
              <Route
                path="patientPrescriptions"
                element={<PatientPrescriptions />}
              />
              <Route path="Billing" element={<Billing />} />
              <Route path="patientSettings" element={<ProfileSettings />} />
              <Route
                path="login/doctorDashboard"
                element={<DoctorDashboard />}
              />
              <Route
                path="doctorAppointments"
                element={<DoctorAppointments />}
              />
              <Route path="doctorPatients" element={<DoctorPatients />} />
              <Route path="doctorSettings" element={<ProfileSettings />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
