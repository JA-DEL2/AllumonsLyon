import React from "react";
import { motion } from "framer-motion";
import TopCurtainComponent from "./TopCurtainComponent";

const HeaderComponent = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <>
      <TopCurtainComponent />
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="
        text-[#f2e9e4]
        px-10 py-5
        flex items-center justify-between
        absolute
        z-[9999]
        w-full
        "
      >
        <h1 className="m-0 text-2xl font-bold">Allumons</h1>
        <nav className="flex gap-5">
          <a
            href="/"
            className="text-[#f2e9e4] no-underline text-base hover:underline"
          >
            Accueil
          </a>
          <a
            href="/#"
            className="text-[#f2e9e4] no-underline text-base hover:underline"
          >
            Osef
          </a>
          <a
            href="/#"
            className="text-[#f2e9e4] no-underline text-base hover:underline"
          >
            À propos
          </a>
        </nav>
      </motion.header>
    </>
  );
};

export default HeaderComponent;
