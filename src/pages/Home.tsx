import React from 'react';
import SpotlightComponent from "../components/spotlights/SpotlightComponent";
import CurtainReveal from "../components/CurtainReveal";

const Home = () => {
    return (
        <CurtainReveal>
            <div className="min-h-screen bg-black ">
                <SpotlightComponent word="LYON" flickerSpeed={0}></SpotlightComponent>
            </div>
        </CurtainReveal>
    );
};

export default Home;