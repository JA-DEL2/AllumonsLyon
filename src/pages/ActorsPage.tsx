import React from "react";
import ProfileRow from "../components/ProfileRow";
import BeforeArrow from "../components/arrows/BeforeArrow";
import NextArrow from "../components/arrows/NextArrow";

export default function ActorsPage() {
    return (
        <div className="relative max-h-screen bg-black text-white">

            {/* Flèche précédente - fixée à gauche */}
            <BeforeArrow children={'/map'} />

            {/* Flèche suivante - fixée à droite */}
            <NextArrow children={'/archives'} />

            <h1 className="text-4xl font-extrabold text-white text-center mt-20 mb-16 drop-shadow-lg">
                Les acteurs lyonnais importants
            </h1>
            
            {/* Carte au centre, prend toute la place */}
            <div
                className="w-full flex justify-center mt-8"
            >
                <ProfileRow />
            </div>


        </div>
    );
}

