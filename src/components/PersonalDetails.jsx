import { useState,useEffect } from "react";
import {
  RadioGroup,
  Radio,
  TextField,
  Grid,
  FormControl,
  Typography,
  FormControlLabel,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";

// import { useNavigate } from "react-router-dom";

const Personaldetails = () => {
  const [firstname, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setcontact] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [country, setcountry] = useState("");
  const [states, setstates] = useState("");
  const [city, setcity] = useState("");
  const [Pincode, setpincode] = useState("");
  const [image, setImage] = useState(null); // Use state to store the selected image file

// Save form data to local storage
useEffect(() => {
  const formData = {
    firstname,
    lastName,
    contact,
    email,
    address,
    country,
    states,
    city,
    Pincode,
  };
  localStorage.setItem("formData", JSON.stringify(formData));
}, [firstname, lastName, contact, email, address, country, states, city, Pincode]);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const defaultTheme = createTheme({ spacing: 4 });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography variant="body1" fontWeight="bold">
            Upload Your Image
          </Typography>
          <TextField
            type="file"
            name="photo"
            required
            id="image"
            fullWidth
            sx={{ marginTop: "10px" }}
            inputProps={{
              style: {
                justifyItems: "center",
                height: "10px",
              },
            }}
            value={image}
            accept="image/x-png,image/jpeg"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="body1" fontWeight="bold">
            First Name
          </Typography>
          <TextField
            placeholder="Enter Your First Name"
            type="text"
            required
            name="FirstName"
            id="FirstName"
            autoComplete="FirstName"
            sx={{ marginTop: "10px" }}
            inputProps={{
              style: {
                height: "10px",
              },
            }}
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="body1" fontWeight="bold">
            Last Name
          </Typography>
          <TextField
            placeholder="Enter Your Last Name"
            type="text"
            required
            fullWidth
            name="lastName"
            autoComplete="lastName"
            id="lastName"
            sx={{ marginTop: "10px" }}
            inputProps={{
              style: {
                height: "10px",
              },
            }}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="body1" fontWeight="bold">
            Contact Number
          </Typography>
          <TextField
            type="number"
            required
            fullWidth
            name="contact"
            id="contact"
            autoComplete="contact"
            placeholder="e.g. 9874563210"
            sx={{ marginTop: "10px" }}
            inputProps={{
              style: {
                height: "10px",
              },
            }}
            value={contact}
            onChange={(e) => setcontact(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="body1" fontWeight="bold">
            Email
          </Typography>
          <TextField
            type="email"
            required
            fullWidth
            placeholder="e.g. Example@gmail.com"
            name="email"
            autoComplete="email"
            id="email"
            sx={{ marginTop: "10px" }}
            inputProps={{
              style: {
                height: "10px",
              },
            }}
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <FormControl component="fieldset">
            <h4>Gender</h4>
            <RadioGroup row aria-label="gender" name="gender1">
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="body1" fontWeight="bold">
            Country
          </Typography>
          <TextField
            type="text"
            required
            placeholder="e.g. India"
            name="country"
            fullWidth
            id="country"
            autoComplete="country"
            sx={{ marginTop: "10px" }}
            inputProps={{
              style: {
                height: "10px",
              },
            }}
            value={country}
            onChange={(e) => setcountry(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="body1" fontWeight="bold">
            State
          </Typography>
          <TextField
            type="text"
            required
            fullWidth
            placeholder="e.g. Madhya Pradesh"
            name="state"
            id="state"
            autoComplete="state"
            sx={{ marginTop: "10px" }}
            inputProps={{
              style: {
                height: "10px",
              },
            }}
            value={states}
            onChange={(e) => setstates(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="body1" fontWeight="bold">
            City
          </Typography>
          <TextField
            type="text"
            required
            fullWidth
            placeholder="e.g. Indore"
            name="city"
            autoComplete="city"
            id="city"
            sx={{ marginTop: "10px" }}
            inputProps={{
              style: {
                height: "10px",
              },
            }}
            value={city}
            onChange={(e) => setcity(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="body1" fontWeight="bold">
            Pincode
          </Typography>
          <TextField
            type="number"
            required
            fullWidth
            name="pincode"
            autoComplete="pincode"
            placeholder="e.g. 452009"
            id="pincode"
            sx={{ marginTop: "10px" }}
            inputProps={{
              style: {
                height: "10px",
              },
            }}
            value={Pincode}
            onChange={(e) => setpincode(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="body1" fontWeight="bold">
            Address
          </Typography>
          <TextField
            type="text"
            required
            fullWidth
            name="address"
            placeholder="e.g. vijay nagar"
            id="address"
            autoComplete="address"
            sx={{ marginTop: "10px" }}
            inputProps={{
              style: {
                height: "30px",
                // width: "30px",
              },
            }}
            value={address}
            onChange={(e) => setaddress(e.target.value)}
          />
          {/* 
<StyledTextarea
  aria-label="minimum height"
  minRows={3}
  placeholder="Minimum 3 rows"
/> */}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

// const StyledTextarea = styled(TextareaAutosize)(
//   ({ theme }) => `
//   width: 320px;
//   font-family: IBM Plex Sans, sans-serif;
//   font-size: 0.875rem;
//   font-weight: 400;
//   line-height: 1.5;
//   padding: 12px;
//   border-radius: 12px 12px 0 12px;
//   color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//   background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
//   border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
//   box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

//   &:hover {
//     border-color: ${blue[400]};
//   }

//   &:focus {
//     border-color: ${blue[400]};
//     box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
//   }

//   // firefox
//   &:focus-visible {
//     outline: 0;
//   }
// `,
// );

// return (
//   <StyledTextarea
//     aria-label="minimum height"
//     minRows={3}
//     placeholder="Minimum 3 rows"
//   />
// );

export default Personaldetails;
