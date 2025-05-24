import React from 'react';
import SpotlightComponent from "../components/spotlights/SpotlightComponent";

const Home = () => {
    return (
        <div className="min-h-screen bg-black ">
            <SpotlightComponent word="LYON" flickerSpeed={3000}></SpotlightComponent>
        </div>
    );
};

export default Home;
