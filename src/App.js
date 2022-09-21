import "./App.css";
import Homepage from "./Pages/Homepage";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { defaultTheme } from "../src/DefaultTheme";
import aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  /**
   * this useEffect enables AOS globally because it is declared on the top level.
   */
  useEffect(() => {
    aos.init({
      duration: 1500,
    });
  }, []);

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
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
