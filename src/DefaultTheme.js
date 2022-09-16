import { createTheme, responsiveFontSizes } from "@mui/material";

export let defaultTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiContainer: {
      defaultProps: {
        // sx: {
        //   color: orange[400],
        // },
      },
    },
    MuiAppBar: {
      defaultProps: {
        sx: {
          // backgroundColor: "#242526",
          marginBottom: "1rem",
        },
      },
    },
  },
  typography: {
    fontFamily: "Montserrat",
    h2: {
      ["(@min-width:600px)"]: {
        fontSize: "0.3rem",
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

// export default defaultTheme = responsiveFontSizes(
//   defaultTheme,
//   ["xs", "sm", "md", "lg"],
//   5
// );
