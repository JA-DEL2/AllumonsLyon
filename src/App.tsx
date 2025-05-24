import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import HeaderComponent from "./components/header/HeaderComponent";
import Map from "./pages/MapPage";
import About from "./pages/About";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <HeaderComponent isOpen={isOpen} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home isOpen={isOpen} setIsOpen={setIsOpen} />}
          />
          <Route path="/map" element={<Map />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
