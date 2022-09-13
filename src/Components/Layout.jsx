import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Stack,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const navbar = ({ children }) => {
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar
        // sx={{
        //   width: "100%",
        //   display: "flex",
        //   justifyContent: "space-between",
        // }}
        >
          <Typography sx={{ flexGrow: 1 }}>Mark Baguio</Typography>
          <Stack
            direction="row"
            alignItems="flex-end"
            justifyContent="flex-end"
          >
            <Button>Home</Button>
            <Button>Projects</Button>
            <Button>Experience</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <div>{children}</div>
    </div>
  );
};

export default navbar;
