import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import HeaderComponent from "./components/header/HeaderComponent";

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
        </Routes>
      </Router>
    </>
  );
};

export default App;
