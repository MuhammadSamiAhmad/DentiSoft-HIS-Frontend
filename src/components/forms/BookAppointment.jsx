import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Stack,
  useTheme,
} from "@mui/material";

import { mockDataTeam } from "../../data/mockData";
import { mockDoctorData } from "../../data/mockData";

import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import TimeButtons from "../TimeButtons";

const BookAppointment = () => {
  const theme = useTheme();

  const doctorBorderColor =
    theme.palette.mode === "dark" ? "#868dfb" : "#a4a9fc";

  const visitReason = ["Examination", "Consultation", "Surgery"];
  const genders = ["Male", "Female"];

  const [selectedDoctor, setSelectedDoctor] = React.useState("");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const consultingDoctor = mockDataTeam.map((doctor) => doctor.name);
  const doctorImage = mockDoctorData[0].Image;

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const checkoutSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string(),
    email: yup.string().email("invalid email").required("required"),
    contact: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("required"),
    gender: yup.string().required("required"),
    address: yup.string().required("required"),
    dateOfBirth: yup.string().required("required"),
    doctor: yup.string().required("required"),
    dateOfAppointment: yup.date().required("required"),
    visitReason: yup.string().required("required"),
    cost: yup
      .number()
      .required("Cost is required")
      .positive("Cost must be a positive number"),
  });
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "",
    address: "",
    dateOfBirth: "",
    doctor: "",
    dateOfAppointment: "",
    visitReason: "",
    cost: "",
  };

  return (
    <Box m="20px">
      <Header title="Create Appointment" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 2" }}
              />
              <FormControl
                fullWidth
                variant="filled"
                sx={{ gridColumn: "span 2" }}
              >
                <InputLabel>Gender</InputLabel>
                <Select
                  sx={{ height: "100%" }}
                  value={values.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="gender"
                  error={!!touched.gender && !!errors.gender}
                >
                  {genders.map((gender) => (
                    <MenuItem key={gender} value={gender}>
                      {gender}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="Date of Birth"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.dateOfBirth}
                name="dateOfBirth"
                error={!!touched.dateOfBirth && !!errors.dateOfBirth}
                helperText={touched.dateOfBirth && errors.dateOfBirth}
                sx={{ gridColumn: "span 4" }}
              />
              <Typography variant="h4" sx={{ gridColumn: "span 4" }}>
                Appointment Details
              </Typography>
              <FormControl
                fullWidth
                variant="filled"
                sx={{ gridColumn: "span 2" }}
              >
                <InputLabel>Consulting Doctor</InputLabel>
                <Select
                  value={selectedDoctor ? selectedDoctor.name : ""}
                  onChange={(e) => {
                    const doctorName = e.target.value;
                    const doctor = mockDataTeam.find(
                      (doctor) => doctor.name === doctorName
                    );
                    setSelectedDoctor(doctor);
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  error={!!touched.doctor && !!errors.doctor}
                  name="doctor"
                >
                  {consultingDoctor.map((doctor) => (
                    <MenuItem key={doctor.id} value={doctor}>
                      {doctor}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Box sx={{ gridColumn: "span 2" }} ml={18} mt={-7}>
                {" "}
                <img
                  width={"200px"}
                  height={"200px"}
                  style={{
                    borderRadius: "15px",
                    border: `5px solid ${doctorBorderColor}`,
                  }}
                  src={require(`../../assets/doctors/${doctorImage}`)}
                  alt=""
                />
              </Box>
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="Date Of Appointment"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.dateOfAppointment}
                name="dateOfAppointment"
                error={
                  !!touched.dateOfAppointment && !!errors.dateOfAppointment
                }
                helperText={
                  touched.dateOfAppointment && errors.dateOfAppointment
                }
                sx={{ gridColumn: "span 4" }}
              />
              <Stack direction={"column"} gap={2}>
                <Typography variant="h6">Time of Appointment</Typography>
                <TimeButtons
                  workingHours={
                    selectedDoctor && selectedDoctor.workingHours
                      ? selectedDoctor.workingHours
                      : ""
                  }
                  displayDirection={"row"}
                />
              </Stack>
              <FormControl
                fullWidth
                variant="filled"
                sx={{ gridColumn: "span 4" }}
              >
                <InputLabel>Service</InputLabel>
                <Select
                  value={values.visitReason}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="visitReason"
                  error={!!touched.visitReason && !!errors.visitReason}
                >
                  {visitReason.map((visitReason) => (
                    <MenuItem key={visitReason} value={visitReason}>
                      {visitReason}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box display="flex" justifyContent="start" mt="20px">
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                size="large"
              >
                Submit
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default BookAppointment;
