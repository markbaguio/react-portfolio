import { Grid, Box, Container, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  return (
    <>
      <footer
        style={{
          backgroundColor: "#242526",
          position: "relative",
          display: "block",
        }}
      >
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
              paddingBottom="3rem"
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
          {/* <Grid item xs={12} sm={12} md={12} paddingBottom="5rem">
            <Box
              width="100%"
              height="fit-content"
              fontSize={{
                lg: "0.8rem",
                md: "0.8rem",
                sm: "0.5rem",
                xs: "0.3rem",
              }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "fit-content",
              }}
            >
              <a
                // style={{ fontSize: "0.8rem" }}
                href="https://www.flaticon.com/free-icons/python"
                title="python icons"
              >
                Python icons created by Freepik - Flaticon
              </a>
              <a
                // style={{ fontSize: "0.8rem" }}
                href="https://www.flaticon.com/free-icons/javascript"
                title="javascript icons"
              >
                Javascript icons created by Freepik - Flaticon
              </a>
              <a
                // style={{ fontSize: "0.8rem" }}
                href="https://www.flaticon.com/free-icons/react"
                title="react icons"
              >
                React icons created by Kiranshastry - Flaticon
              </a>
              <a
                href="https://freeicons.io/profile/3"
                // style={{ fontSize: "0.8rem" }}
              ></a>
              <a
                // style={{ fontSize: "0.8rem" }}
                href="https://freeicons.io"
              >
                Icon by icon king1 on freeicons.io
              </a>
              <a
                // style={{ fontSize: "0.8rem" }}
                href="https://www.flaticon.com/free-icons/html"
                title="html icons"
              >
                Html icons created by Freepik - Flaticon
              </a>
              <a
                href="https://www.flaticon.com/free-icons/css"
                title="css icons"
              >
                Css icons created by Pixel perfect - Flaticon
              </a>
              <a
                href="https://www.flaticon.com/free-icons/bootstrap"
                title="bootstrap icons"
              >
                Bootstrap icons created by Freepik - Flaticon
              </a>
              <a
                href="https://www.flaticon.com/free-icons/java"
                title="java icons"
              >
                Java icons created by Freepik - Flaticon
              </a>
              <a
                href="https://www.flaticon.com/free-icons/php"
                title="php icons"
              >
                Php icons created by Freepik - Flaticon
              </a>
              <a href="https://freeicons.io/profile/722">Icon by Fasil on</a>
              <a href="https://freeicons.io">freeicons.io</a>
              <a href="https://freeicons.io/profile/722">Icon by Fasilon</a>
              <a href="https://freeicons.io">freeicons.io</a>
              <a
                href="https://www.flaticon.com/free-icons/microsoft-office"
                title="microsoft office icons"
              >
                Microsoft office icons created by Pixel perfect - Flaticon
              </a>
              <a
                href="https://www.flaticon.com/free-icons/figma"
                title="figma icons"
              >
                Figma icons created by Freepik - Flaticon
              </a>
              <a
                href="https://www.flaticon.com/free-icons/photoshop"
                title="photoshop icons"
              >
                Photoshop icons created by Freepik - Flaticon
              </a>
            </Box>
          </Grid> */}
        </Grid>
        {/* </Container> */}
      </footer>
    </>
  );
};

export default Footer;
