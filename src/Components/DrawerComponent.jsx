import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
} from "@mui/material";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";

import { useState } from "react";
import { Link } from "react-router-dom";

const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <List disablePadding>
            <Link to="/">
              <ListItemButton>
                <ListItemIcon>
                  <HomeOutlinedIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </Link>
            <Link to="/projects">
              <ListItemButton>
                <ListItemIcon>
                  <BeenhereOutlinedIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText>Projects</ListItemText>
                <Link to="/projects"></Link>
              </ListItemButton>
            </Link>
            <Link to="/experience">
              <ListItemButton>
                <ListItemIcon>
                  <PsychologyOutlinedIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText>Experience</ListItemText>
              </ListItemButton>
            </Link>
          </List>
        </Box>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuOpenOutlinedIcon fontSize="large" />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
