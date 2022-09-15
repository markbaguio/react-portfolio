import { Button, Typography, Grid, Container } from "@mui/material";
import React from "react";

const home = () => {
  return (
    <>
      <Container>
        <Grid container>
          <Grid
            item
            md={12}
            sx={{
              backgroundColor: "red",
            }}
          >
            <Typography>I'm Mark Baguio and I create things.</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default home;
