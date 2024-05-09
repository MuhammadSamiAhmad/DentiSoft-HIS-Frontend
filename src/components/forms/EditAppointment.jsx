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
} from "@mui/material";
import { mockDataTeam } from "../../data/mockData";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import TimeButtons from "../TimeButtons";

const EditAppointment = ({ handleClickOpen, handleClose }) => {
  const [selectedDoctor, setSelectedDoctor] = React.useState("");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const consultingDoctor = mockDataTeam.map((doctor) => doctor.name);

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const checkoutSchema = yup.object().shape({
    firstName: yup.string(),
    lastName: yup.string(),
    email: yup.string().email("invalid email"),
    contact: yup.string().matches(phoneRegExp, "Phone number is not valid"),
    doctor: yup.string(),
    dateOfAppointment: yup.date(),
    visitReason: yup.string(),
  });
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    doctor: "",
    dateOfAppointment: "",
    visitReason: "",
  };

  return (
    <Box m="20px">
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
              gap="20px"
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
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <FormControl
                fullWidth
                variant="filled"
                sx={{ gridColumn: "span 4" }}
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
              <Stack direction={"column"} gap={2} minWidth={"200px"}>
                <Typography variant="h6">Time of Appointment</Typography>
                <TimeButtons
                  workingHours={
                    selectedDoctor && selectedDoctor.workingHours
                      ? selectedDoctor.workingHours
                      : ""
                  }
                  displayDirection={"column"}
                />
              </Stack>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Condition/Visit Reason"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.visitReason}
                name="visitReason"
                error={!!touched.visitReason && !!errors.visitReason}
                helperText={touched.visitReason && errors.visitReason}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Stack
              gap={1}
              display="flex"
              direction={"row"}
              justifyContent="start"
              mt="20px"
            >
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                size="large"
                onClick={handleClose}
              >
                Submit
              </Button>
            </Stack>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default EditAppointment;
