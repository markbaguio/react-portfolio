import {
  Button,
  ButtonGroup,
  Typography,
  Grid,
  Container,
  Box,
  Divider,
} from "@mui/material";
import React from "react";
import img from "../assets/images/IMG_8729.JPG";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import { defaultTheme } from "../DefaultTheme";

const home = () => {
  // defaultTheme.typography.h2 = {
  //   fontSize: "3.75rem",
  //   [defaultTheme.breakpoints.down("md")]: {
  //     fontSize: "3rem",
  //     color: "orange",
  //   },
  // };

  // defaultTheme.typography.h2 = {
  //   [defaultTheme.breakpoints.down("md")]: {
  //     fonSize: "3rem",
  //     color: "orange",
  //   },
  // };

  return (
    <>
      <Container
        sx={{
          height: "100vh",
          // backgroundColor: "aqua",
          display: "flex",
        }}
      >
        <Grid container spacing={5}>
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            sx={{
              // backgroundColor: "red",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              //this is how to center a typography.
            }}
          >
            <Box>
              <Typography variant="h2" lineHeight={1.3} textAlign="left">
                Hi, I'm Mark Baguio.
              </Typography>
              <Typography variant="h2" color="#364966">
                Computer Engineer.
                <Divider light />
              </Typography>
              <Typography variant="h6">
                I enjoy creating something out of{" "}
                <Box
                  component="span"
                  color="#364966"
                  sx={{
                    textDecoration: "underline",
                  }}
                >
                  virtually nothing.
                </Box>
              </Typography>
              <ButtonGroup
                variant="outlined"
                color="inherit"
                size="large"
                sx={{
                  marginTop: "3rem",
                }}
              >
                <Button
                  sx={{
                    ":hover": {
                      backgroundColor: "inherit",
                      // color: "#364966",
                      color: "#ab47bc",
                      transition: "0.5s all ease-in-out",
                    },
                  }}
                >
                  Projects
                </Button>
                <Button
                  endIcon={<DownloadOutlinedIcon />}
                  sx={{
                    ":hover": {
                      backgroundColor: "inherit",
                      color: "#ab47bc",
                      transition: "0.5s all ease-in-out",
                    },
                  }}
                >
                  Download Resume
                </Button>
              </ButtonGroup>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Box
              sx={
                {
                  // backgroundColor: "blue",
                  // display: "block",
                }
              }
            >
              <img width="fit-content" height="600px" src={img} alt="hehe" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default home;
