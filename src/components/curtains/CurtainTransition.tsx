import {AnimatePresence, motion} from "framer-motion";
import {CurtainRevealProps} from "./CurtainReveal";

export default function CurtainTransition() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <AnimatePresence>
                    <>
                        <motion.img
                            src="/curtain_left.svg"
                            alt="Rideau gauche"
                            initial={{ x: 0 }}
                            animate={{ x: "-100%" }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="fixed top-0 left-0 w-3/5 object-cover z-40"
                        />

                        <motion.img
                            src="/curtain_right.svg"
                            alt="Rideau droit"
                            initial={{ x: 0 }}
                            animate={{ x: "100%" }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="fixed top-0 right-0 w-3/5 object-cover object-right transform scale-x-[-1] z-40"
                        />
                    </>
            </AnimatePresence>
        </div>
    );
}