import {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import CurtainTransition from "./components/curtains/CurtainTransition";

const PageTransitionInterceptor = () => {
    const location = useLocation();
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        setIsAnimating(true);
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 1500); // Durée de l'animation (comme transition.duration)

        return () => clearTimeout(timer);
    }, [location]);

    return (
        <>
            {isAnimating && <CurtainTransition />}
        </>
    );
};

export default PageTransitionInterceptor;
