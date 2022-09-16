import "./App.css";
import Homepage from "./Pages/Homepage";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import { CssBaseline, ThemeProvider, responsiveFontSizes } from "@mui/material";
import { defaultTheme } from "../src/DefaultTheme";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Experience" element={<Experience />} />
          </Routes>
          {/* </Container> */}
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
