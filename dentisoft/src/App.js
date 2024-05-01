import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
//Importing Components
// import Topbar from "./components/Topbar"; // will be called inside dashboard pages

//Importing Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import PatientInfo from "./pages/PatientInfo";
import AdminDashboard from "./pages/AdminDashboard";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
//Importing Admin components (Sidebar Items)
import AdminDoctors from "./components/admin/AdminDoctors";
import AdminAppointments from "./components/admin/AdminAppointments";
import AdminPatients from "./components/admin/AdminPatients";
import Inventory from "./components/admin/Inventory";
import AdminSettings from "./components/admin/AdminSettings";
//Importing Patient components (Sidebar Items)
import PatientPortal from "./components/patient/PatientPortal";
import PatientAppointments from "./components/patient/PatientAppointments";
import PatientPrescriptions from "./components/patient/PatientPrescriptions";
import Billing from "./components/patient/Billing";
import PatientSettings from "./components/patient/PatientSettings";
//Importing Doctor components (Sidebar Items)
import DoctorAppointments from "./components/doctor/DoctorAppointments";
import DoctorPatients from "./components/doctor/DoctorPatients";
import DoctorSettings from "./components/doctor/DoctorSettings";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Routes>
              <Route index path="login" element={<Login />} />
              <Route path="login/register" element={<Register />} />
              <Route
                path="login/register/patientinfo"
                element={<PatientInfo />}
              />
              <Route path="login/adminDashboard" element={<AdminDashboard />}>
                <Route path="adminDoctors" element={<AdminDoctors />} />
                <Route
                  path="adminAppointments"
                  element={<AdminAppointments />}
                />
                <Route path="settings" element={<AdminSettings />} />
                <Route path="inventory" element={<Inventory />} />
                <Route path="patients" element={<AdminPatients />} />
              </Route>
              <Route
                path="login/patientDashboard"
                element={<PatientDashboard />}
              >
                <Route path="patientPortal" element={<PatientPortal />} />
                <Route
                  path="patientAppointments"
                  element={<PatientAppointments />}
                />
                <Route
                  path="patientPrescriptions"
                  element={<PatientPrescriptions />}
                />
                <Route path="Billing" element={<Billing />} />
                <Route path="patientSettings" element={<PatientSettings />} />
              </Route>
              <Route path="login/doctorDashboard" element={<DoctorDashboard />}>
                <Route
                  path="doctorAppointments"
                  element={<DoctorAppointments />}
                />
                <Route path="doctorPatients" element={<DoctorPatients />} />
                <Route path="doctorSettings" element={<DoctorSettings />} />
              </Route>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
