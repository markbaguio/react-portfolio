import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
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
    fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});
