import validator from "validator";
import { useState } from "react";
import { Grid, Typography, TextField } from "@mui/material";

const ExperienceDetails = () => {
  //eslint-disable-next-line
  const [errorMessage, setErrorMessage] = useState("");
  const validateDate = (value) => {
    if (validator.isDate(value)) {
      setErrorMessage("Valid Date :)");
    } else {
      setErrorMessage("Enter Valid Date!");
    }
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4} sm={4}>
        <Typography variant="body1" fontWeight="bold">
          Job Title
        </Typography>
        <TextField
          id="jobtitle"
          placeholder="e.g. React js Developer"
          variant="outlined"
          sx={{ marginTop: "10px" }}
          inputProps={{
            style: {
              justifyItems: "center",
              height: "10px",
            },
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="body1" fontWeight="bold">
          Company Name
        </Typography>
        <TextField
          id="CompanyName"
          placeholder="e.g. Kartgen Infotech LLP"
          variant="outlined"
          sx={{ marginTop: "10px" }}
          inputProps={{
            style: {
              justifyItems: "center",
              height: "10px",
            },
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant="body1" fontWeight="bold">
          City
        </Typography>
        <TextField
          id="City"
          placeholder="e.g. Indore"
          variant="outlined"
          sx={{ marginTop: "10px" }}
          inputProps={{
            style: {
              justifyItems: "center",
              height: "10px",
            },
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography variant="body1" fontWeight="bold">
          State
        </Typography>
        <TextField
          id="State"
          placeholder="e.g. Madhya Pradesh"
          variant="outlined"
          sx={{ marginTop: "10px" }}
          inputProps={{
            style: {
              justifyItems: "center",
              height: "10px",
            },
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography variant="body1" fontWeight="bold">
          Pincode
        </Typography>
        <TextField
          id="Pincode"
          placeholder="452009"
          variant="outlined"
          sx={{ marginTop: "10px" }}
          inputProps={{
            style: {
              justifyItems: "center",
              height: "10px",
            },
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography variant="body1" fontWeight="bold">
          Start Date
        </Typography>
        <TextField
          fullWidth
          id="StartDate"
          placeholder="yyyy-mm-dd"
          sx={{ marginTop: "10px" }}
          inputProps={{
            style: {
              justifyItems: "center",
              height: "10px",
            },
          }}
          variant="outlined"
          onChange={validateDate}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography variant="body1" fontWeight="bold">
          End Date
        </Typography>
        <TextField
          fullWidth
          id="date"
          placeholder="yyyy-mm-dd"
          variant="outlined"
          sx={{ marginTop: "10px" }}
          inputProps={{
            style: {
              justifyItems: "center",
              height: "10px",
            },
          }}
          onChange={validateDate}
        />
      </Grid>
    </Grid>
  );
};
export default ExperienceDetails;
