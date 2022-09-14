import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useState, useEffect } from "react";
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

  const pages = ["/", "/projects", "experience"];

  /**
   * this useEffect hook runs every time the value changes.
   * it ensures that the indicated tab is in sync with the route.
   */
  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/" && value !== "one") setValue("one");
    else if (path === "/projects" && value !== "two") setValue("two");
    else if (path === "/experience" && value !== "three") setValue("three");
  }, [value]);

  // const pages = ["Home", "Projects", "Experience"];

  // const LinkTab = (props) => {
  //   return (
  //     <Tab
  //       component="a"
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
                {/**  LinkComponent takes in a Link component from react router dom.
                 *    this allows the individual tab to render the proper page.
                 */}
                <Tab
                  value="one"
                  label="Home"
                  LinkComponent={Link}
                  to={pages[0]}
                />
                <Tab
                  value="two"
                  label="Projects"
                  LinkComponent={Link}
                  to={pages[1]}
                />
                <Tab
                  value="three"
                  label="Experience"
                  LinkComponent={Link}
                  to={pages[2]}
                />
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
