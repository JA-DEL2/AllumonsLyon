import React, { useState } from "react";
import SpotlightComponent from "../components/spotlights/SpotlightComponent";
import CurtainReveal from "../components/CurtainReveal";
import HeaderComponent from "../components/header/HeaderComponent";

const Home = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) => {
  return (
    <CurtainReveal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="min-h-screen bg-black ">
        <SpotlightComponent></SpotlightComponent>
      </div>
    </CurtainReveal>
  );
};

export default Home;
