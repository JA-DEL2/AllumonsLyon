import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import HeaderComponent from "./components/header/HeaderComponent";
import Map from "./pages/MapPage"
import Films from "./pages/Films";

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
            <Route path="/archives" element={<Films />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
