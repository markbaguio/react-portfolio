import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import DrawerComponent from "./DrawerComponent";
import Homepage from "../Pages/Homepage";
import { Link } from "react-router-dom";
/**
 * Material UI Breakpoints:
 * xs: 0px
 * sm: 600px
 * md: 900px
 * lg: 1200px
 * xl: 1536px
 */

const Layout = ({ children }) => {
  const [value, setValue] = useState("one");
  const currentTheme = useTheme(); //console logs the default theme
  const isMatch = useMediaQuery(currentTheme.breakpoints.down("md"));
  /**
   * the isMatch variable is true if the screen size is less than md(900px)
   */

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  // const pages = ["Home", "Projects", "Experience"];

  // const LinkTab = (props) => {
  //   return (
  //     <Tab
  //       LinkComponent="a"
  //       onClick={(e) => {
  //         e.preventDefault();
  //       }}
  //       {...props}
  //     />
  //   );
  // };

  return (
    <div>
      <AppBar position="sticky" elevation={1}>
        <Toolbar>
          {isMatch ? (
            <>
              <Typography sx={{ flexGrow: 1 }} fontSize="large">
                Mark Baguio
              </Typography>
              <DrawerComponent />
            </>
          ) : (
            <>
              <Typography sx={{ flexGrow: 1 }} fontSize="large">
                Mark Baguio
              </Typography>
              <Tabs
                indicatorColor="secondary"
                textColor="secondary"
                value={value}
                onChange={handleChange}
              >
                {/* {pages.map((page, index) => (
                  <Tab key={index} label={page} />
                ))} */}
                <Tab value="one" label="Home" />
                <Tab value="two" label="Projects" />
                <Tab value="three" label="Experience" />
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
