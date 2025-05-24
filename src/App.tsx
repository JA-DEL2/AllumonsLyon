import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Map from "./pages/MapPage";
import ActorsPage from "./pages/ActorsPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/map" element={<Map />} />
                <Route path="/actors" element={<ActorsPage />} />
            </Routes>
        </Router>
    );
};

export default App;
