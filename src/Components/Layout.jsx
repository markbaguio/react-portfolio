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
import { Link } from "react-router-dom";
import Footer from "./Footer";
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
  console.log(useMediaQuery(currentTheme.breakpoints.down("lg")), "lg");
  console.log(useMediaQuery(currentTheme.breakpoints.down("md")), "md");
  console.log(useMediaQuery(currentTheme.breakpoints.down("sm")), "sm");
  console.log(useMediaQuery(currentTheme.breakpoints.down("xs")), "xs");

  // useMediaQuery(currentTheme.breakpoints.down("sm"), console.log("hit"));
  /**
   * the isMatch variable is true if the screen size is less than md(900px)
   */

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  // const pages = ["/", "/projects", "experience"];

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
      <AppBar position="sticky" elevation={4}>
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
                indicatorColor="primary"
                textColor="primary"
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
                  // to={pages[0]}
                  to="/"
                />
                <Tab
                  value="two"
                  label="Projects"
                  LinkComponent={Link}
                  // to={pages[1]}
                  to="/projects"
                />
                <Tab
                  value="three"
                  label="Experience"
                  LinkComponent={Link}
                  // to={pages[2]}
                  to="/experience"
                />
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
      {children}
      {/**children refers to all of the components/pages wrapped by the layout. */}
      <Footer />
    </div>
  );
};

export default Layout;
