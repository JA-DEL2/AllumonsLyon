import React from "react";
import Map from "../components/map/Map";
import BeforeArrow from "../components/arrows/BeforeArrow";
import NextArrow from "../components/arrows/NextArrow";

export default function MapPage() {
    return (
        <div className="relative max-h-screen bg-black text-white">

            {/* Flèche précédente - fixée à gauche */}
            <BeforeArrow children={'/'} />

            {/* Flèche suivante - fixée à droite */}
            <NextArrow children={'/map'} />

            <h1 className="text-4xl font-extrabold text-white text-center mt-20 mb-16 drop-shadow-lg">
                Lieux importants de la cinématographie Lyonnaise
            </h1>

            {/* Carte au centre, prend toute la place */}
            <div
                className="w-full flex justify-center mt-8"
            >
                <div
                    className="rounded-lg overflow-hidden"
                    style={{
                        boxShadow: '0 0 20px 10px rgba(255, 255, 255, 0.7)',
                    }}
                >
                    <Map />
                </div>
            </div>


        </div>
    );
}

