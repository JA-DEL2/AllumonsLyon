import React, { useState } from 'react';

const LyonInteractive = () => {
    const [litLetters, setLitLetters] = useState<string[]>([]);
    const [lightsOn, setLightsOn] = useState<boolean>(false);

    const lightUpLetters = async () => {
        const letters = ['L', 'Y', 'O', 'N'];

        if (lightsOn) {
            // Désactivation progressive
            for (let i = letters.length - 1; i >= 0; i--) {
                setLitLetters(prev => prev.filter(l => l !== letters[i]));
                await new Promise(res => setTimeout(res, 300));
            }
            setLightsOn(false);
        } else {
            // Activation progressive
            for (let i = 0; i < letters.length; i++) {
                setLitLetters(prev => [...prev, letters[i]]);
                await new Promise(res => setTimeout(res, 300));
            }
            setLightsOn(true);
        }
    };

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden select-none">
            {/* Titre LYON avec glow progressif */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                    {['L', 'Y', 'O', 'N'].map(letter => (
                        <span
                            key={letter}
                            className={`font-black tracking-wider transition-all duration-700 ease-out
                                text-[24vw] sm:text-[20vw] md:text-[18vw] lg:text-[14vw] xl:text-[12vw]`}
                            style={{
                                color: litLetters.includes(letter) ? '#ffffff' : '#222222',
                                textShadow: litLetters.includes(letter)
                                    ? '0 0 30px rgba(255,255,255,0.6), 0 0 60px rgba(255,255,255,0.3)'
                                    : 'none',
                                opacity: litLetters.includes(letter) ? 1 : 0.3,
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
                        {litLetters.length === 4 ? '💡' : '✨'}
                    </span>
                </button>

                <div className="mt-3 text-center text-sm font-medium text-white">
                    {litLetters.length === 4 ? 'ÉTEINDRE' : 'ILLUMINER'}
                </div>
            </div>

            {/* Effet d'ambiance léger */}
            {litLetters.length > 0 && (
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

export default LyonInteractive;
