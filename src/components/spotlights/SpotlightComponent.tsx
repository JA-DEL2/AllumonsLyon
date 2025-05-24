import React, { useState, useEffect } from 'react';

interface SpotlightProps {
    word: string;
    flickerSpeed?: number;// Ajout du paramètre pour réguler la fréquence
}

const SpotlightComponent: React.FC<SpotlightProps> = ({ word, flickerSpeed = 300 }) => {
    const [litIndexes, setLitIndexes] = useState<number[]>([]);
    const [flickeringLetters, setFlickeringLetters] = useState<number[]>([]);
    const [lightsOn, setLightsOn] = useState<boolean>(false);

    useEffect(() => {
        if (lightsOn) {
            const interval = setInterval(() => {
                const randomIndexes = litIndexes.length > 0
                    ? [litIndexes[Math.floor(Math.random() * litIndexes.length)]]
                    : [];
                setFlickeringLetters(randomIndexes);
            }, flickerSpeed); // Utilisation du paramètre pour ajuster la fréquence

            return () => clearInterval(interval);
        } else {
            setFlickeringLetters([]);
        }
    }, [lightsOn, litIndexes, flickerSpeed]);

    const lightUpLetters = async () => {
        const indexes = Array.from({ length: word.length }, (_, i) => i);

        if (lightsOn) {
            for (let i = indexes.length - 1; i >= 0; i--) {
                setLitIndexes(prev => prev.filter(index => index !== indexes[i]));
                await new Promise(res => setTimeout(res, 300));
            }
            setLightsOn(false);
        } else {
            for (let i = 0; i < indexes.length; i++) {
                setLitIndexes(prev => [...prev, indexes[i]]);
                await new Promise(res => setTimeout(res, 300));
            }
            setLightsOn(true);
        }
    };

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden select-none">
            {/* Affichage du mot avec effet lumineux */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                    {word.split('').map((letter, index) => (
                        <span
                            key={index}
                            className={`font-black tracking-wider transition-all duration-700 ease-out
                                text-[24vw] sm:text-[20vw] md:text-[18vw] lg:text-[14vw] xl:text-[12vw]`}
                            style={{
                                color: litIndexes.includes(index) ? '#ffffff' : '#222222',
                                textShadow: litIndexes.includes(index)
                                    ? flickeringLetters.includes(index)
                                        ? '0 0 40px rgba(255,255,255,0.8), 0 0 80px rgba(255,255,255,0.5)'
                                        : '0 0 30px rgba(255,255,255,0.6), 0 0 60px rgba(255,255,255,0.3)'
                                    : 'none',
                                opacity: litIndexes.includes(index) ? 1 : 0.3,
                            }}
                        >
                            {letter}
                        </span>
                    ))}
                </div>
            </div>

            {/* Bouton d'activation */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 sm:bottom-12">
                <button
                    onClick={lightUpLetters}
                    className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 text-black transition-all duration-500 flex items-center justify-center 
                    bg-white hover:scale-105`}
                >
                    <span className="text-2xl">
                        {litIndexes.length === word.length ? '💡' : '✨'}
                    </span>
                </button>

                <div className="mt-3 text-center text-sm font-medium text-white">
                    {litIndexes.length === word.length ? 'ÉTEINDRE' : 'ILLUMINER'}
                </div>
            </div>

            {/* Effet d'ambiance léger */}
            {litIndexes.length > 0 && (
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)`,
                    }}
                />
            )}
        </div>
    );
};

export default SpotlightComponent;
