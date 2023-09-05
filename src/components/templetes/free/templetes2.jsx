import { Container, Typography, Grid, Card, Divider, Box } from "@mui/material";

const technical = ["html", "java", "SQL", "Flutter", "React js"];
const ResumeTemplate2 = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      <Card
        variant="outlined"
        sx={{
          bgcolor: "#f5f5f5",
          fontWeight: 700,
          padding: 10,
        }}
      >
        <button onClick={handlePrint}>Print Page</button>
        <Grid
          container
          direction="row"
          justifyContent={"space-between"}
          padding={2}
        >
          <Grid item>
            <Typography variant="h4">Joe Williams</Typography>
            <Typography fontSize={14}>React js developer</Typography>
          </Grid>
          <Grid item direction="column">
            <Typography>Contact:+91 9874563210</Typography>
            <Typography>Email:Example@gmail.com</Typography>
          </Grid>
        </Grid>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row", // Change to column
            justifyContent: "space-between",
            padding: 2,
          }}
        >
          <Typography variant="h5" fontFamily="Raleway" sx={{ mb: 2 }}>
            Profile Summary
          </Typography>
          <Typography sx={{ mb: 2, paddingLeft: 20 }}>
            Progressively evolve cross-platform ideas before impactful
            infomediaries. Energistically visualize tactical initiatives before
            cross-media catalysts for change.
          </Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            // Change to column
            justifyContent: "space-between",
            padding: 2,
          }}
        >
          <Typography variant="h5" fontFamily="Raleway" sx={{ mb: 2 }}>
            Skills
          </Typography>
          <Grid container direction={"row"} sx={{ paddingLeft: 26 }}>
            <Grid xs={12} md={4} container direction={"column"}>
              <Typography>Web Design</Typography>
              <Typography
                width={"174px"}
                sx={{ mb: 2, wordWrap: "break-word" }}
              >
                Assertively exploit wireless initiatives rather than synergistic
                core competencies.
              </Typography>
            </Grid>
            <Grid
              xs={12}
              md={4}
              container
              direction={"column"}
              sx={{ mb: 2, wordWrap: "break-word" }}
            >
              <Typography>Web Design</Typography>
              <Typography width={"174px"}>
                Assertively exploit wireless initiatives rather than synergistic
                core competencies.
              </Typography>
            </Grid>
            <Grid
              xs={12}
              md={4}
              container
              direction={"column"}
              sx={{ mb: 2, wordWrap: "break-word" }}
            >
              <Typography>Web Design</Typography>
              <Typography width={"174px"}>
                Assertively exploit wireless initiatives rather than synergistic
                core competencies.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row", // Change to column
            justifyContent: "space-between",
            padding: 2,
          }}
        >
          <Typography variant="h5" fontFamily="Raleway" sx={{ mb: 2 }}>
            Technical
          </Typography>
          <Grid container spacing={2} sx={{ paddingLeft: 20 }}>
            {Array.from({ length: technical.length }).map((_, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <Typography>{technical[index]}</Typography>
                <Divider />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Divider />
        {/* Experience */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            // Change to column
            justifyContent: "space-between",
            padding: 2,
          }}
        >
          <Typography variant="h5" fontFamily="Raleway" sx={{ mb: 2 }}>
            Experience
          </Typography>
          <Grid>
            <Grid item container direction="column">
              <Grid container direction="row" justifyContent={"space-between"}>
                <Grid item sx={{ paddingLeft: 18 }}>
                  <Typography variant="h6">FaceBook</Typography>
                  <Typography fontSize={14}>React js developer</Typography>
                </Grid>
                <Grid item direction="column">
                  <Typography>2006-2008</Typography>
                  {/* <Typography>Email:Example@gmail.com</Typography> */}
                </Grid>
              </Grid>
              <Grid>
                <Typography
                  width="100%"
                  sx={{
                    mb: 2,
                    paddingLeft: 18,
                    marginTop: 2,
                    alignContent: "flex-start",
                  }}
                >
                  Progressively evolve cross-platform ideas before impactful
                  infomediaries. Energistically visualize tactical initiatives
                  before cross-media catalysts for change.
                </Typography>
              </Grid>
              <Divider />
            </Grid>
            <Grid item container direction="column">
              <Grid container direction="row" justifyContent={"space-between"}>
                <Grid item sx={{ paddingLeft: 18 }}>
                  <Typography variant="h6">FaceBook</Typography>
                  <Typography fontSize={14}>React js developer</Typography>
                </Grid>
                <Grid item direction="column">
                  <Typography>2006-2008</Typography>
                  {/* <Typography>Email:Example@gmail.com</Typography> */}
                </Grid>
              </Grid>
              <Grid>
                <Typography
                  width="100%"
                  sx={{
                    mb: 2,
                    paddingLeft: 18,
                    marginTop: 2,
                    alignContent: "flex-start",
                  }}
                >
                  Progressively evolve cross-platform ideas before impactful
                  infomediaries. Energistically visualize tactical initiatives
                  before cross-media catalysts for change.
                </Typography>
              </Grid>
              <Divider />
            </Grid>
            <Grid item container direction="column">
              <Grid container direction="row" justifyContent={"space-between"}>
                <Grid item sx={{ paddingLeft: 18 }}>
                  <Typography variant="h6">FaceBook</Typography>
                  <Typography fontSize={14}>React js developer</Typography>
                </Grid>
                <Grid item direction="column">
                  <Typography>2006-2008</Typography>
                  {/* <Typography>Email:Example@gmail.com</Typography> */}
                </Grid>
              </Grid>
              <Grid>
                <Typography
                  width="100%"
                  sx={{
                    mb: 2,
                    paddingLeft: 18,
                    marginTop: 2,
                    alignContent: "flex-start",
                  }}
                >
                  Progressively evolve cross-platform ideas before impactful
                  infomediaries. Energistically visualize tactical initiatives
                  before cross-media catalysts for change.
                </Typography>
              </Grid>
              <Divider />
            </Grid>
          </Grid>
        </Box>
        {/* education */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            // Change to column
            justifyContent: "space-between",
            padding: 2,
          }}
        >
          <Typography variant="h5" fontFamily="Raleway" sx={{ mb: 2 }}>
            Skills
          </Typography>
          <Grid container direction={"column"} sx={{ paddingLeft: 26 }}>
            <Grid
              container
              direction={"column"}
              sx={{ mb: 2, wordWrap: "break-word" }}
            >
              <Typography>Indiana University - Bloomington, Indiana</Typography>
              <Typography>
                Dual Major, Economics and English — 4.0 GPA
              </Typography>
            </Grid>
            <Grid
              container
              direction={"column"}
              sx={{ mb: 2, wordWrap: "break-word" }}
            >
              <Typography>Indiana University - Bloomington, Indiana</Typography>
              <Typography>
                Dual Major, Economics and English — 4.0 GPA
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Container>
  );
};

export default ResumeTemplate2;