import {
  Button,
  ButtonGroup,
  Typography,
  Grid,
  Container,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  useMediaQuery,
  Fade,
} from "@mui/material";
import React, { useEffect } from "react";
import img from "../assets/images/IMG_8729.JPG";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import { defaultTheme } from "../DefaultTheme";

/**
 * Material UI Breakpoints:
 * xs: 0px - 599px
 * sm: 600px - 899px
 * md: 900px - 1199px
 * lg: 1200px - 1535px
 * xl: 1536px
 * 
 * Updated breakpoints:
 *  xs: 0px - 399px,
    sm: 400px - 899px,
    md: 900px - 1199px,
    lg: 1200px - 1535px,
    xl: 1536,
 */

const Home = () => {
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

  // const xxs = useMediaQuery("(max-width: 300px)");
  // console.log(xxs, "xxs");

  return (
    <>
      <Container
        sx={{
          height: "100%",
          // display: "flex",
          // backgroundColor: "aqua",
          marginBottom: 0,
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
            <Box width="100%">
              <Typography
                variant="h2"
                fontSize={{
                  lg: "4rem",
                  md: "2.8rem",
                  sm: "2.3rem",
                  xs: "1.3rem",
                }}
                sx={{
                  textAlign: {
                    lg: "left",
                    md: "left",
                    sm: "center",
                    xs: "center",
                  },
                }}
              >
                Hi, I'm Mark Baguio.
              </Typography>
              <Typography
                variant="h2"
                color="#364966"
                fontSize={{
                  lg: "4rem",
                  md: "3rem",
                  sm: "2.3rem",
                  xs: "1.3rem",
                }}
                sx={{
                  textAlign: {
                    lg: "left",
                    md: "left",
                    sm: "center",
                    xs: "center",
                  },
                }}
              >
                Computer Engineer.
                <Divider light />
              </Typography>
              <Typography
                variant="h6"
                fontSize={{
                  lg: "1.25rem",
                  md: "1rem",
                  sm: "0.9rem",
                  xs: "0.6rem",
                }}
                sx={{
                  textAlign: {
                    lg: "left",
                    md: "left",
                    sm: "center",
                    xs: "center",
                  },
                }}
              >
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
              <Box
                display="flex"
                justifyContent={{
                  lg: "start",
                  md: "start",
                  sm: "center",
                  xs: "center",
                }}
              >
                <ButtonGroup
                  variant="outlined"
                  color="inherit"
                  size="small"
                  sx={{
                    marginTop: "3rem",
                    fontSize: {
                      sm: "0.5rem",
                    },
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
                      fontSize: {
                        lg: "1rem",
                        md: "1rem",
                        sm: "0.6rem",
                        xs: "0.5rem",
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
                      fontSize: {
                        lg: "1rem",
                        md: "1rem",
                        sm: "0.6rem",
                        xs: "0.5rem",
                      },
                    }}
                  >
                    Download Resume
                  </Button>
                </ButtonGroup>
                {/* <Button
                  variant="outlined"
                  color="inherit"
                  sx={{
                    fontSize: {
                      lg: "1rem",
                      md: "1rem",
                      sm: "0.5rem",
                      xs: "0.3rem",
                    },
                  }}
                >
                  Projects
                </Button> */}
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            // backgroundColor="red"
            // sx={{
            //   display: "flex",
            //   justifyContent: "center",
            // }}
          >
            <Box
              width="100%"
              display="flex"
              // backgroundColor="blue"
              height="100%"
              justifyContent={{
                lg: "start",
                md: "start",
                sm: "center",
                xs: "center",
              }}
            >
              <ImageList
                cols={1}
                sx={{
                  width: {
                    md: "85%",
                    sm: "30%",
                    xs: "30%",
                  },
                }}
              >
                <ImageListItem>
                  <img
                    width="fit-content"
                    height="600px"
                    src={img}
                    alt="hehe"
                  />
                </ImageListItem>
              </ImageList>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
