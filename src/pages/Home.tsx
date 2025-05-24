import React from 'react';
import SpotlightComponent from "../components/spotlights/SpotlightComponent";
import CurtainReveal from "../components/CurtainReveal";
import NextButton from "../components/arrows/NextArrow";

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