import { useNavigate } from "react-router-dom";

type NextButtonProps = {
    children: string;
};

export default function NextArrow({ children }:  NextButtonProps) {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(children)}
            className="fixed right-6 bottom-8 transform -translate-y-1/2 bg-white/10 border-2 border-white text-white text-2xl p-4 rounded-full backdrop-blur z-50 hover:bg-white/20 transition"
            aria-label="Page suivante"
        >
            →
        </button>
    );
}
