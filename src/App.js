import "./App.css";
import Homepage from "./Components/Homepage";
import Projects from "./Components/Projects";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
