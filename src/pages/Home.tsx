import React from 'react';
import SpotlightComponent from "../components/spotlights/SpotlightComponent";
import CurtainReveal from "../components/CurtainReveal";
import NextArrow from "../components/arrows/NextArrow";

const Home = () => {
    return (
        <CurtainReveal>
            <div className="min-h-screen bg-black relative text-white">

                {/* Allumons vers le haut */}
                <div className="flex justify-center pt-[15vh] relative z-10">
                    <h1 className="text-6xl font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                        Allumons
                    </h1>
                </div>

                {/* Spotlight centré */}
                <div className="absolute inset-0 flex justify-center items-center z-0">
                    <SpotlightComponent word="LYON" flickerSpeed={0} />
                </div>

                <NextArrow children={'/map'}></NextArrow>

            </div>
        </CurtainReveal>

    );
};

export default Home;