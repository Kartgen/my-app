import { useState } from "react";
import validator from "validator";
import {
  Grid,
  Typography,
  TextField,
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const EducationDetails = () => {
  //eslint-disable-next-line
  const [errorMessage, setErrorMessage] = useState("");
  const [showNextField, setShowNextField] = useState(false);
  const [showNextField1, setShowNextField1] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const validateDate = (value) => {
    if (validator.isDate(value)) {
      setErrorMessage("Valid Date :)");
    } else {
      setErrorMessage("Enter Valid Date!");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (currentStep === 3) {
      navigate("/personaldetails");
    } else {
      setCurrentStep(currentStep + 1);
      setShowNextField(false);
      setCurrentStep(currentStep + 1);
      setShowNextField1(false);
    }
  };

  const handleRadioChange = (event) => {
    setShowNextField(event.target.value === "yes");
  };
  const handleRadioChange1 = (event) => {
    setShowNextField1(event.target.value === "yes1");
  };
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography variant="body1" fontWeight="bold">
            Institute Name
          </Typography>
          <TextField
            id="schoolName"
            placeholder="e.g. St. John's School"
            variant="outlined"
            fullWidth
            sx={{ marginTop: "10px" }}
            inputProps={{
              style: {
                height: "10px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="body1" fontWeight="bold">
            Field of Study
          </Typography>
          <TextField
            id="board"
            placeholder="e.g. Financial Accounting"
            variant="outlined"
            fullWidth
            sx={{ marginTop: "10px" }}
            inputProps={{
              style: {
                height: "10px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="body1" fontWeight="bold">
            Location
          </Typography>
          <TextField
            id="Location"
            placeholder="e.g. Indore"
            variant="outlined"
            fullWidth
            sx={{ marginTop: "10px" }}
            inputProps={{
              style: {
                height: "10px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="body1" fontWeight="bold">
            Degree
          </Typography>
          <TextField
            id="board"
            placeholder="e.g. High School Diploma"
            variant="outlined"
            fullWidth
            required
            sx={{ marginTop: "10px" }}
            inputProps={{
              style: {
                height: "10px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="body1" fontWeight="bold">
            Start Date
          </Typography>
          <TextField
            fullWidth
            id="startdate"
            validator={validateDate}
            placeholder="yyyy-mm-dd"
            variant="outlined"
            required
            sx={{ marginTop: "10px" }}
            inputProps={{
              style: {
                height: "10px",
              },
            }}
            onChange={validateDate}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="body1" fontWeight="bold">
            End Date
          </Typography>
          <TextField
            fullWidth
            id="enddate"
            placeholder="yyyy-mm-dd"
            variant="outlined"
            sx={{ marginTop: "10px" }}
            inputProps={{
              style: {
                height: "10px",
              },
            }}
            onChange={validateDate}
          />
        </Grid>
      </Grid>
      {currentStep < 3 && (
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="showNextField"
            name="showNextField"
            value={showNextField ? "yes" : "no"}
            onChange={handleRadioChange}
          >
            <Grid sx={{ marginTop: "10px" }}>
              <Typography>Do you want to add more</Typography>
              <FormControlLabel value="yes" control={<Radio />} label="yes" />
              <FormControlLabel value="no" control={<Radio />} label="no" />
            </Grid>
          </RadioGroup>
        </FormControl>
      )}

      {showNextField && (
        <div>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="body1" fontWeight="bold">
                Institute Name
              </Typography>
              <TextField
                id="schoolName"
                placeholder="e.g. St. John's School"
                variant="outlined"
                fullWidth
                sx={{ marginTop: "10px" }}
                inputProps={{
                  style: {
                    height: "10px",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="body1" fontWeight="bold">
                Field of Study
              </Typography>
              <TextField
                id="board"
                placeholder="e.g. Financial Accounting"
                variant="outlined"
                fullWidth
                sx={{ marginTop: "10px" }}
                inputProps={{
                  style: {
                    height: "10px",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="body1" fontWeight="bold">
                Location
              </Typography>
              <TextField
                id="Location"
                placeholder="e.g. Indore"
                variant="outlined"
                fullWidth
                sx={{ marginTop: "10px" }}
                inputProps={{
                  style: {
                    height: "10px",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="body1" fontWeight="bold">
                Degree
              </Typography>
              <TextField
                id="board"
                placeholder="e.g. High School Diploma"
                variant="outlined"
                fullWidth
                required
                sx={{ marginTop: "10px" }}
                inputProps={{
                  style: {
                    height: "10px",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="body1" fontWeight="bold">
                Start Date
              </Typography>
              <TextField
                fullWidth
                id="startdate"
                placeholder="yyyy-mm-dd"
                variant="outlined"
                required
                sx={{ marginTop: "10px" }}
                inputProps={{
                  style: {
                    height: "10px",
                  },
                }}
                onChange={validateDate}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="body1" fontWeight="bold">
                End Date
              </Typography>
              <TextField
                fullWidth
                id="enddate"
                placeholder="yyyy-mm-dd"
                variant="outlined"
                required
                sx={{ marginTop: "10px" }}
                inputProps={{
                  style: {
                    height: "10px",
                  },
                }}
                onChange={validateDate}
              />
            </Grid>
          </Grid>
          {currentStep < 3 && (
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="showNextField"
                name="showNextField"
                value={showNextField1 ? "yes" : "no"}
                onChange={handleRadioChange1}
              >
                <Grid sx={{ marginTop: "10px" }}>
                  <Typography>Do you want to add more</Typography>
                  <FormControlLabel
                    value="yes1"
                    control={<Radio />}
                    label="yes"
                  />
                  <FormControlLabel
                    value="no1"
                    control={<Radio />}
                    label="no"
                  />
                </Grid>
              </RadioGroup>
            </FormControl>
          )}
          {showNextField1 && (
            <div>
              <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                  <Typography variant="body1" fontWeight="bold">
                    Institute Name
                  </Typography>
                  <TextField
                    id="schoolName"
                    placeholder="e.g. St. John's School"
                    variant="outlined"
                    fullWidth
                    sx={{ marginTop: "10px" }}
                    inputProps={{
                      style: {
                        height: "10px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="body1" fontWeight="bold">
                    Field of Study
                  </Typography>
                  <TextField
                    id="board"
                    placeholder="e.g. Financial Accounting"
                    variant="outlined"
                    fullWidth
                    sx={{ marginTop: "10px" }}
                    inputProps={{
                      style: {
                        height: "10px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="body1" fontWeight="bold">
                    Location
                  </Typography>
                  <TextField
                    id="Location"
                    placeholder="e.g. Indore"
                    variant="outlined"
                    fullWidth
                    sx={{ marginTop: "10px" }}
                    inputProps={{
                      style: {
                        height: "10px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="body1" fontWeight="bold">
                    Degree
                  </Typography>
                  <TextField
                    id="board"
                    placeholder="e.g. High School Diploma"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ marginTop: "10px" }}
                    inputProps={{
                      style: {
                        height: "10px",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="body1" fontWeight="bold">
                    Start Date
                  </Typography>
                  <TextField
                    fullWidth
                    id="startdate"
                    placeholder="yyyy-mm-dd"
                    variant="outlined"
                    required
                    sx={{ marginTop: "10px" }}
                    inputProps={{
                      style: {
                        height: "10px",
                      },
                    }}
                    onChange={validateDate}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="body1" fontWeight="bold">
                    End Date
                  </Typography>
                  <TextField
                    fullWidth
                    id="enddate"
                    placeholder="yyyy-mm-dd"
                    variant="outlined"
                    required
                    sx={{ marginTop: "10px" }}
                    inputProps={{
                      style: {
                        height: "10px",
                      },
                    }}
                    onChange={validateDate}
                  />
                </Grid>
              </Grid>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default EducationDetails;
