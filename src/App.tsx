import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import HeaderComponent from "./components/header/HeaderComponent";
import Map from "./pages/MapPage"
import Films from "./pages/Films";
import ActorsPage from "./pages/ActorsPage";

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
            <Route path="/actors" element={<ActorsPage />} />
            <Route path="/archives" element={<Films />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
