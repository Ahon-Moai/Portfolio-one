import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Experience from "./pages/experience";
import Project from "./pages/project";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
const App = () => {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Projects" element={<Project />}></Route>
            <Route path="/Experience" element={<Experience />}></Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default App;
