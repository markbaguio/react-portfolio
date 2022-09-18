import { Grid, Box, Container, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer
        style={{
          backgroundColor: "#242526",
          position: "relative",
          height: "fit-content",
        }}
      >
        {/* <Container
          sx={{
            backgroundColor: "pink",
          }}
        > */}
        <Grid container spacing={3} marginTop="2rem">
          <Grid item xs={12} sm={12} md={12}>
            <Box
              // backgroundColor="gray"
              display="flex"
              justifyContent="center"
            >
              <a href="https://www.facebook.com/markbaguio0912" target="_blank">
                <IconButton
                  disableRipple
                  size="large"
                  sx={{
                    ":hover": {
                      color: "#364966",
                      transform: "scale(1.3)",
                    },
                    padding: "2rem",
                  }}
                >
                  <FacebookIcon
                    sx={{
                      fontSize: {
                        lg: "3rem",
                        md: "3rem",
                        sm: "2rem",
                      },
                    }}
                  />
                </IconButton>
              </a>
              <a
                href="https://www.linkedin.com/in/baguio-mark-godwin-c/"
                target="_blank"
              >
                <IconButton
                  disableRipple
                  size="large"
                  sx={{
                    ":hover": {
                      color: "#364966",
                      transform: "scale(1.3)",
                    },
                    padding: "2rem",
                  }}
                >
                  <LinkedInIcon
                    sx={{
                      fontSize: {
                        lg: "3rem",
                        md: "3rem",
                        sm: "2rem",
                      },
                    }}
                  />
                </IconButton>
              </a>
              <a href="https://github.com/markbaguio" target="_blank">
                <IconButton
                  disableRipple
                  size="large"
                  sx={{
                    ":hover": {
                      color: "#364966",
                      transform: "scale(1.3)",
                    },
                    padding: "2rem",
                  }}
                >
                  <GitHubIcon
                    sx={{
                      fontSize: {
                        lg: "3rem",
                        md: "3rem",
                        sm: "2rem",
                      },
                    }}
                  />
                </IconButton>
              </a>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Box
              // backgroundColor="blue"
              paddingBottom="5rem"
            >
              <a href="/">
                <Typography
                  variant="body1"
                  align="center"
                  fontSize={{
                    lg: "1rem",
                    md: "1rem",
                    sm: "0.8rem",
                    xs: "0.7rem",
                  }}
                  sx={{
                    ":hover": {
                      color: "#364966",
                      transition: "0.5s all ease-in-out",
                    },
                  }}
                >
                  2022 &copy; Mark Godwin C. Baguio
                </Typography>
              </a>
            </Box>
          </Grid>
        </Grid>
        {/* </Container> */}
      </footer>
    </>
  );
};

export default Footer;
