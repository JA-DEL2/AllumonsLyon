import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import './App.css';
import Map from "./pages/MapPage"
import Films from "./pages/Films";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/map" element={<Map />} />
                <Route path="/archives" element={<Films />} />
            </Routes>
        </Router>
    );
};

export default App;
