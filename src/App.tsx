import React from 'react';
import logo from './logo.svg';
import './App.css';
import SpotlightComponent from "./components/spotlights/SpotlightComponent";

function App() {
  return (
    <div className="App">
        <div style={{ backgroundColor: 'black', height: '100vh' }}>
            <SpotlightComponent></SpotlightComponent>
        </div>
    </div>
  );
}

export default App;
