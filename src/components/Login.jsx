import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRive, useStateMachineInput } from "rive-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import Navigationbar from "./Navbar";

const theme = createTheme();
const STATE_MACHINE_NAME = "State Machine 1";

export default function SignIn({ checkLogin }) {
  const navigate = useNavigate();
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const { rive, RiveComponent } = useRive({
    src: "3469-7899-login-screen-character.riv",
    autoplay: true,
    stateMachines: STATE_MACHINE_NAME,
  });

  useEffect(() => {
    setLook();
  }, [user]);

  const stateSuccess = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    "success"
  );
  const stateFail = useStateMachineInput(rive, STATE_MACHINE_NAME, "fail");
  const stateHandUp = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    "hands_up"
  );

  const stateCheck = useStateMachineInput(rive, STATE_MACHINE_NAME, "Check");
  const stateLook = useStateMachineInput(rive, STATE_MACHINE_NAME, "Look");

  const triggerSuccess = () => {
    stateSuccess && stateSuccess.fire();
  };
  const triggerFail = () => {
    stateFail && stateFail.fire();
  };

  const setHangUp = (hangUp) => {
    stateHandUp && (stateHandUp.value = hangUp);
  };

  const setLook = () => {
    if (!stateLook || !stateCheck || !setHangUp) {
      return;
    }
    setHangUp(false);
    setCheck(true);
    let nbChars = 0;
    if (user) {
      nbChars = parseFloat(user.split("").length);
    }

    let ratio = nbChars / parseFloat(41);
    console.log("ratio " + ratio);

    let lookToSet = ratio * 100 - 25;
    console.log("lookToSet " + Math.round(lookToSet));
    stateLook.value = Math.round(lookToSet);
  };
  const setCheck = (check) => {
    if (stateCheck) {
      stateCheck.value = check;
    }
  };
  if (rive) {
    console.log(rive.contents);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    navigate("/Home");
  };

  return (
    <ThemeProvider theme={theme}>
      <header>
        {" "}
        <Navigationbar />
      </header>

      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{ width: 230, height: 230 }}
            style={{ justifyContent: "center", display: "flex" }}
          >
            <RiveComponent
              style={{ width: "400px", height: "400px" }}
              src="3469-7899-login-screen-character.riv"
            />
          </Avatar>
          {/* <Typography component="h1" variant="h5">
            Sign in
          </Typography> */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <form autoComplete="off">
              <TextField
                onFocus={() => setHangUp(false)}
                onChange={(event) => setUser(event.target.value)}
                value={user}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                onChange={(event) => {
                  setHangUp(true);
                  setPassword(event.target.value);
                  setHangUp(false);
                  setLook(false);
                }}
                onFocus={() => setHangUp(true)}
                onError={() => setLook(true)}
                value={password}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </form>
            <Button
              onMouseOver={() => setHangUp(false)}
              onFocus={() => setHangUp(false)}
              type="submit"
              fullWidth
              variant="contained"
              onClick={() => {
                setCheck(true);
                if (checkLogin(user, password)) {
                  triggerSuccess();
                } else {
                  triggerFail();
                }
              }}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container xs={12}>
              <Grid item xs={6}>
                <Typography
                  variant="body2"
                  onClick={handleSignupSubmit}
                  component={RouterLink}
                  to="/signup"
                  sx={{ cursor: "pointer" }}
                >
                  Forgot Passwword
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="body2"
                  onClick={handleSignupSubmit}
                  component={RouterLink}
                  to="/signup"
                  sx={{ cursor: "pointer" }}
                >
                  Don't have an account? Sign Up
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
