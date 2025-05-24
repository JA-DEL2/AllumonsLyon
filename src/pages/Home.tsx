import React from 'react';
import SpotlightComponent from "../components/spotlights/SpotlightComponent";
import CurtainReveal from "../components/CurtainReveal";
import NextButton from "../components/nextArrow/NextArrow";

const Home = () => {
    return (
        <CurtainReveal>
            <div className="min-h-screen bg-black ">
                <SpotlightComponent></SpotlightComponent>
            </div>
        </CurtainReveal>
    );
};

export default Home;