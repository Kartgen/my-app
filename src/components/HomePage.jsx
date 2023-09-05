import React from "react";
import { Button, Container, Grid, MenuItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const pages = ["Resume Templates", "Pricing", "login", "logout"];
const HomePage = () => {
  const navigate = useNavigate();
  const handleresumebutton = () => {
    navigate("/home");
  };
  const handlePageClick = (page) => {
    console.log(`Clicked on page: ${page}`);
    if (page === "Products") {
      navigate("/products");
    } else if (page === "Pricing") {
      navigate("/pricing");
    } else if (page === "Blog") {
      navigate("/blog");
    } else if (page === "login/logout") {
      navigate("/signin");
    }
  };

  return (
    <Container>
      <header>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography>LOGO</Typography>
          <Grid container item xs={12} md={8}  justifyContent="right">
            {pages.map((page) => (
              <MenuItem
                key={page}
                onClick={() => handlePageClick(page)}
                sx={{ margin: "10px" }}
              >
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Grid>
        </Grid>
      </header>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        // justifyContent="center"
        sx={{ minHeight: "100vh", margin: "7vh" }}
      >
        <Typography
         fontSize={{ xs: 28, md: 35 }}
          justifyItems={"center"}
          fontFamily={"Black Ops One"}
        >
          The Best Online Resume Builder
        </Typography>
        <Typography
          fontSize={20}
          justifyItems={"center"}
          align="center"
          fontFamily={"Open Sans"}
          sx={{ marginTop: "12px" }}
        >
          Try our resume builder now for free. Our online resume builder offers
          a quick and easy way to create your professional resume from over 30
          professional resume templates. Create a resume using our AI-powered
          online resume wizard, which optimizes your resume for applicant
          tracking systems. Plus, take advantage of expert suggestions and
          customizable modern and professional resume templates.
        </Typography>

        <Button
          variant="contained"
          sx={{ height: 50, margin: 6 }}
          onClick={handleresumebutton}
        >
          Create My Resume
        </Button>
        <Grid
          container
          spacing={0}
          sx={{ margin: 4 }}
          direction="column"
          alignItems="center"
          // justifyContent="center"
        >
          <img src="desktop-with-resume-.svg" alt="reusme" />
        </Grid>
      </Grid>

      <footer backgroundColor="lightgray">
        <Grid>
          <Typography>footer</Typography>
          <Typography>footer</Typography>
          <Typography>footer</Typography>
          <Typography>footer</Typography>
          <Typography>footer</Typography>
        </Grid>
      </footer>
    </Container>
  );
};
export default HomePage;
  