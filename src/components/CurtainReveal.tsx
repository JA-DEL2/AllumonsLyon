import {ReactNode, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

type CurtainRevealProps = {
    children: ReactNode;
};

export default function CurtainReveal({ children }: CurtainRevealProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <AnimatePresence>
                {!isOpen && (
                    <>
                        <motion.img
                            src="/curtain_left.svg"
                            alt="Rideau gauche"
                            initial={{ x: 0 }}
                            animate={{ x: isOpen ? "-100%" : 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="fixed top-0 left-0 w-3/5 object-cover z-40"
                        />

                        <motion.img
                            src="/curtain_right.svg"
                            alt="Rideau droit"
                            initial={{ x: 0 }}
                            animate={{ x: isOpen ? "100%" : 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="fixed top-0 right-0 w-3/5 object-cover object-right transform scale-x-[-1] z-40"
                        />

                        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
                            <button
                                onClick={() => setIsOpen(true)}
                                className="px-6 py-3 text-white bg-white/10 border border-white rounded-lg backdrop-blur-md text-xl hover:bg-white/20 transition"
                            >
                                Entrer
                            </button>
                        </div>
                    </>
                )}
            </AnimatePresence>

            <div
                className={`transition-opacity duration-500 ${
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            >
                {children}
            </div>
        </div>
    );
}