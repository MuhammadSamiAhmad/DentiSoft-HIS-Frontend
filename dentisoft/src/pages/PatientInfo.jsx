import { Typography, Box, Button } from "@mui/material";
import "../Patientinfo.css";
import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "react-widgets/styles.css";
import Combobox from "react-widgets/Combobox";
import { preventDefault } from "@fullcalendar/core/internal";

const PatientInfo = () => {
  const navigate = useNavigate();
  const [disease, setDisease] = useState("");
  const [smoking, setSmoking] = useState("");
  const [allergy, setAllergy] = useState("");
  const [alcohols, setAlcohols] = useState("");
  const [bloodType, setBloodType] = useState("");

  const handleDisease = (event) => {
    setDisease(event.target.value);
  };
  const handleSmoking = (event) => {
    setSmoking(event.target.value);
  };
  const handleAllergy = (event) => {
    setAllergy(event.target.value);
  };
  const handleAlcohols = (event) => {
    setAlcohols(event.target.value);
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
          width: "40%",
          minWidth: "700px",
          minHeight: "720px",
          height: "80%",
          opacity: "1",
          borderRadius: "8px",
        }}
      >
        <Box
          className="Info Form"
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
                Medical Info
              </legend>
              <Typography
                sx={{
                  width: "414px",
                  minHeight: "70px",
                  font: "normal normal normal 25px/30px Roboto",
                  color: "#9D9D9D",
                }}
              >
                Kindly Fill These Info <br />
                to be Added to Your Profile
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
                  <span id="gender-radio">
                    <h3>Have any Chronic Disease</h3>

                    <input
                      className="radio-input"
                      type="radio"
                      name="chronicDis"
                      value="Yes"
                      id="chronicDisYes"
                      checked={disease === "Yes"}
                      onChange={handleDisease}
                      required
                    />
                    <label
                      className="patientinfolabels"
                      htmlFor="chronicDisYes"
                    >
                      Yes
                    </label>

                    <input
                      className="radio-input"
                      type="radio"
                      name="chronicDis"
                      value="No"
                      id="chronicDisNo"
                      checked={disease === "No"}
                      onChange={handleDisease}
                    />
                    <label
                      className="patientinfolabels"
                      htmlFor="chronicDisYes"
                      style={{ marginBottom: "19px" }}
                    >
                      No
                    </label>
                  </span>
                  {disease === "Yes" && (
                    <Box>
                      <form style={{ display: "flex", flexDirection: "row" }}>
                        <Box>
                          <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="Mention Disease"
                            required
                          />
                          <Typography sx={{ color: "black" }}>
                            Submit Each Disease Separately
                          </Typography>
                        </Box>
                        <Button
                          type="submit"
                          variant="contained"
                          size="small"
                          sx={{
                            height: "40px",
                            width: "70px",
                            mt: "1%",
                            ml: "2%",
                          }}
                          onSubmit={() => preventDefault()}
                        >
                          Submit
                        </Button>
                      </form>
                    </Box>
                  )}

                  <span id="gender-radio">
                    <h3>Smoking</h3>
                    <input
                      className="radio-input"
                      type="radio"
                      name="smoking"
                      value="Yes"
                      checked={smoking === "Yes"}
                      onChange={handleSmoking}
                      required
                    />
                    <label className="patientinfolabels" htmlFor="smoking">
                      Yes
                    </label>
                    <input
                      className="radio-input"
                      type="radio"
                      name="smoking"
                      value="No"
                      checked={smoking === "No"}
                      onChange={handleSmoking}
                    />
                    <label
                      className="patientinfolabels"
                      htmlFor="smoking"
                      style={{ marginBottom: "19px" }}
                    >
                      No
                    </label>
                  </span>
                  <Box mt={"20%"}>
                    <Typography
                      variant="h3"
                      sx={{
                        color: "#142A42",
                        font: "normal normal bold 25px/30px Roboto",
                      }}
                    >
                      Your Blood Group
                    </Typography>
                    <Combobox
                      style={{ borderRadius: "12px" }}
                      defaultValue=""
                      data={["O+", "O-", "A+", "A-", "AB-", "AB+", "B-", "B+"]}
                      value={bloodType}
                      onChange={(value) => setBloodType(value)}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                  mb={"20%"}
                >
                  <span id="gender-radio">
                    <h3>Drinking Alcohols</h3>
                    <input
                      className="radio-input"
                      type="radio"
                      name="Alcohols"
                      value="Yes"
                      checked={alcohols === "Yes"}
                      onChange={handleAlcohols}
                      required
                    />
                    <label className="patientinfolabels" htmlFor="Alcohols">
                      Yes
                    </label>
                    <input
                      className="radio-input"
                      type="radio"
                      name="Alcohols"
                      value="No"
                      checked={alcohols === "No"}
                      onChange={handleAlcohols}
                    />
                    <label className="patientinfolabels" htmlFor="Alcohols">
                      No
                    </label>
                  </span>
                  <span id="gender-radio">
                    <h3>Drug Allergy</h3>
                    <input
                      className="radio-input"
                      type="radio"
                      name="Allergy"
                      value="Yes"
                      checked={allergy === "Yes"}
                      onChange={handleAllergy}
                      required
                    />
                    <label className="patientinfolabels" htmlFor="Allergy">
                      Yes
                    </label>
                    <input
                      className="radio-input"
                      type="radio"
                      name="Allergy"
                      value="No"
                      checked={allergy === "No"}
                      onChange={handleAllergy}
                    />
                    <label className="patientinfolabels" htmlFor="Allergy">
                      No
                    </label>
                  </span>
                  {allergy === "Yes" && (
                    <Box
                      display={"flex"}
                      flexDirection={"row"}
                      ml={"8%"}
                      mr={"8%"}
                    >
                      <form
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          marginLeft: "-10%",
                        }}
                      >
                        <Box>
                          <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="Mention Drug"
                            required
                          />
                          <Typography sx={{ color: "black" }}>
                            Submit Each Drug Separately
                          </Typography>
                        </Box>
                        <Button
                          type="submit"
                          variant="contained"
                          size="small"
                          sx={{
                            height: "40px",
                            width: "70px",
                            mt: "1%",
                            ml: "2%",
                          }}
                        >
                          Submit
                        </Button>
                      </form>
                    </Box>
                  )}
                </Box>
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
                  onClick={() => navigate("../../login")}
                >
                  Submit & Login
                </Button>
              </Box>
            </fieldset>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default PatientInfo;
