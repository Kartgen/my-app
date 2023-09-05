import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import {
  Container,
  Typography,
  Grid,
  Card,
  Divider,
  Box,
  ThemeProvider,
  createTheme,
  Avatar,
} from "@mui/material";

const technical = [
  "html",
  "java",
  "SQL",
  "Flutter",
  "React js",
  "html",
  "java",
  "SQL",
  "Flutter",
  "React js",
];
const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif", // Replace 'Your Font Family' with your desired font family
  },
});

const ResumeTemplate = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `Resume`,
    onAfterPrint: () => alert("Print Successful!"),
  });

  const [resumeData, setResumeData] = useState({
    name: "",
    title: "React js Developer",
    contactNumber: "",
    emailAddress: "",
    profileSummary:
      "Detail-oriented team player with strong organizational skills. Ability to handle multiple projects simultaneously with a high degree of accuracy. Organized and dependable candidate successful at managing multiple priorities with a positive attitude. Willingness to take on added responsibilities to meet team goals. To seek and maintain full-time position that offers professional challenges utilizing interpersonal skills, excellent time management and problem-solving skills.", // Set this as static or customize it
    skills: technical,
    experience: [
      {
        company: "Facebook",
        jobTitle: "React js Developer",
        date: "2006-2008",
        description: "Add your experience description here",
      },
    ],
    education: [
      {
        institution: "Indiana University - Bloomington, Indiana",
        degree: "Dual Major, Economics and English — 4.0 GPA",
      },
    ],
  });

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Card>
          <button onClick={handlePrint}>Print Page</button>
          <Grid container direction="row">
            {/* Adjust the Grid item sizes based on screen size */}
            <Grid
              item
              xs={12}
              sm={3}
              md={3}
              sx={{ bgcolor: "#003666", color: "white" }}
            >
              {/* Left sidebar */}
              <Grid
                height={"100vh"}
                width={"100%"}
                container
                direction="column"
              >
                <Grid
                  container
                  direction="column"
                  justifyContent={"space-between"}
                  // padding={2}
                >
                  <Grid item sx={{ padding: 2 }}>
                    <Typography variant="h4">Joe Williams</Typography>
                    <Typography fontSize={14}>React js developer</Typography>
                  </Grid>
                  <Grid item direction="column" width={"100%"} sx={{ mt: 1 }}>
                    <Grid
                      width={"100%"}
                      sx={{
                        paddingLeft: 2,
                        bgcolor: "#002e56",
                        color: "white",
                      }}
                    >
                      <Typography
                        variant="h5"
                        fontFamily="Raleway"
                        sx={{ mb: 1 }}
                      >
                        Contacts
                      </Typography>
                    </Grid>
                    <Grid sx={{ paddingLeft: 2 }}>
                      <Typography>Contact:+91 9874563210</Typography>
                      <Typography>Email: Example@gmail.com</Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Box
                  sx={{
                    mt: 1,
                    display: "flex",
                    flexDirection: "column", // Change to column
                    justifyContent: "space-between",
                  }}
                >
                  <Grid
                    width={"100%"}
                    sx={{ paddingLeft: 2, bgcolor: "#002e56", color: "white" }}
                  >
                    <Typography
                      variant="h5"
                      fontFamily="Raleway"
                      sx={{ mb: 1 }}
                    >
                      Skills
                    </Typography>
                  </Grid>
                  <Grid container direction={"column"} sx={{ padding: 2 }}>
                    {Array.from({ length: technical.length }).map(
                      (_, index) => (
                        <Grid item key={index} xs={12} sm={3} md={3}>
                          <Typography>{technical[index]}</Typography>
                        </Grid>
                      )
                    )}
                  </Grid>
                </Box>
                <Box
                  sx={{
                    mt: 1,
                    display: "flex",
                    flexDirection: "column", // Change to column
                    justifyContent: "space-between",
                  }}
                >
                  <Grid
                    width={"100%"}
                    sx={{ paddingLeft: 2, bgcolor: "#002e56", color: "white" }}
                  >
                    <Typography
                      variant="h5"
                      fontFamily="Raleway"
                      sx={{ mb: 1 }}
                    >
                      Language
                    </Typography>
                  </Grid>
                  <Grid container direction={"column"} sx={{ padding: 2 }}>
                    <Grid item xs={12} sm={3} md={3} sx={{ paddingLeft: 2 }}>
                      <Typography>
                        <ul>
                          <li>English</li>
                          <li>Hindi</li>
                        </ul>
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>

            {/* Right content */}
            <Grid item xs={12} sm={9} md={9}>
              <Grid container direction="column" padding={2}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    // Change to column
                    justifyContent: "space-between",
                    padding: 2,
                  }}
                >
                  <Typography
                    variant="h5"
                    fontFamily="Raleway"
                    color="#003666"
                    fontWeight="bold"
                    sx={{ mb: 2 }}
                  >
                    Profile Summary
                  </Typography>
                  <Typography fontSize={14} sx={{ mb: 2 }}>
                    Detail-oriented team player with strong organizational
                    skills. Ability to handle multiple projects simultaneously
                    with a high degree of accuracy. Organized and dependable
                    candidate successful at managing multiple priorities with a
                    positive attitude. Willingness to take on added
                    responsibilities to meet team goals. To seek and maintain
                    full-time position that offers professional challenges
                    utilizing interpersonal skills, excellent time management
                    and problem-solving skills.
                  </Typography>
                </Box>
                <Divider />
                {/* Experience */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    // Change to column
                    justifyContent: "space-between",
                    padding: 2,
                  }}
                >
                  <Typography
                    variant="h5"
                    fontFamily="Raleway"
                    color="#003666"
                    fontWeight="bold"
                    sx={{ mb: 2 }}
                  >
                    Experience
                  </Typography>

                  <Grid>
                    <Grid item container direction="column">
                      <Grid
                        container
                        direction="row"
                        justifyContent={"space-between"}
                      >
                        <Grid item>
                          <Typography fontSize={16}>FaceBook</Typography>
                          <Typography fontSize={12}>
                            React js developer
                          </Typography>
                        </Grid>
                        <Grid item direction="column">
                          <Typography>2006-2008</Typography>
                          {/* <Typography>Email:Example@gmail.com</Typography> */}
                        </Grid>
                      </Grid>
                      <Grid>
                        <Typography
                          width="100%"
                          fontSize={14}
                          sx={{
                            mb: 2,
                            marginTop: 2,
                            alignContent: "flex-start",
                          }}
                        >
                          Progressively evolve cross-platform ideas before
                          impactful infomediaries. Energistically visualize
                          tactical initiatives before cross-media catalysts for
                          change.
                        </Typography>
                      </Grid>
                      <Divider />
                    </Grid>
                    <Grid item container direction="column">
                      <Grid
                        container
                        direction="row"
                        justifyContent={"space-between"}
                      >
                        <Grid item>
                          <Typography fontSize={16}>FaceBook</Typography>
                          <Typography fontSize={12}>
                            React js developer
                          </Typography>
                        </Grid>
                        <Grid item direction="column">
                          <Typography>2006-2008</Typography>
                          {/* <Typography>Email:Example@gmail.com</Typography> */}
                        </Grid>
                      </Grid>
                      <Grid>
                        <Typography
                          width="100%"
                          fontSize={14}
                          sx={{
                            mb: 2,
                            marginTop: 2,
                            alignContent: "flex-start",
                          }}
                        >
                          Progressively evolve cross-platform ideas before
                          impactful infomediaries. Energistically visualize
                          tactical initiatives before cross-media catalysts for
                          change.
                        </Typography>
                      </Grid>
                      <Divider />
                    </Grid>
                    <Grid item container direction="column">
                      <Grid
                        container
                        direction="row"
                        justifyContent={"space-between"}
                      >
                        <Grid item>
                          <Typography fontSize={16}>FaceBook</Typography>
                          <Typography fontSize={12}>
                            React js developer
                          </Typography>
                        </Grid>
                        <Grid item direction="column">
                          <Typography>2006-2008</Typography>
                          {/* <Typography>Email:Example@gmail.com</Typography> */}
                        </Grid>
                      </Grid>
                      <Grid>
                        <Typography
                          width="100%"
                          fontSize={14}
                          sx={{
                            mb: 2,

                            marginTop: 2,
                            alignContent: "flex-start",
                          }}
                        >
                          Progressively evolve cross-platform ideas before
                          impactful infomediaries. Energistically visualize
                          tactical initiatives before cross-media catalysts for
                          change.
                        </Typography>
                      </Grid>
                      <Divider />
                    </Grid>
                  </Grid>
                </Box>
                {/* <Box sx={{
                  display: "flex",
                  flexDirection: "column",
                  // Change to column
                  justifyContent: "space-between",
                  padding: 2,
                }}>
                <Grid container direction={"column"}>
                <Typography variant="h5" fontFamily="Raleway" sx={{ mb: 2 }}>
                  Technical
                </Typography> 
                  <Grid container direction={"column"}>
                    <Typography>Web Design</Typography>
                    <Typography>Web Design</Typography>
                    <Typography>Web Design</Typography>
                  </Grid>
                </Grid>
              </Box> */}

                {/* education */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    // Change to column
                    justifyContent: "space-between",
                    padding: 2,
                  }}
                >
                  <Grid container direction={"column"}>
                    <Typography
                      variant="h5"
                      fontFamily="Raleway"
                      color="#003666"
                      fontWeight="bold"
                      sx={{ mb: 2 }}
                    >
                      Education
                    </Typography>
                    <Grid
                      container
                      direction={"column"}
                      sx={{ mb: 2, wordWrap: "break-word" }}
                    >
                      <Typography>
                        Indiana University - Bloomington, Indiana
                      </Typography>
                      <Typography>
                        Dual Major, Economics and English — 4.0 GPA
                      </Typography>
                    </Grid>
                    <Grid
                      container
                      direction={"column"}
                      sx={{ mb: 2, wordWrap: "break-word" }}
                    >
                      <Typography>
                        Indiana University - Bloomington, Indiana
                      </Typography>
                      <Typography>
                        Dual Major, Economics and English — 4.0 GPA
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default ResumeTemplate;
