import "./App.css";
import Homepage from "./Pages/Homepage";
import Projects from "./Pages/Projects";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import { createTheme, ThemeProvider } from "@mui/material";
import { grey, purple, red } from "@mui/material/colors";
import { GlobalStylesProps } from "@mui/material";

const defaultTheme = createTheme({
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
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
