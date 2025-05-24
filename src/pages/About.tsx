import React from "react";

const About: React.FC = () => {
  return (
    <div className="mt-[10vh] bg-black text-white min-h-screen flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl font-extrabold mb-4 drop-shadow-lg">À propos</h1>
      <h2 className="text-xl italic mb-8 text-yellow-300 drop-shadow">
        Mettons en lumière, les lumières de Lyon
      </h2>
      <p className="mb-12 text-lg opacity-90 text-center max-w-xl">
        Nous sommes une joyeuse team de développeurs pas fatigués du tout
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
        <div className="flex flex-col items-center bg-white/10 rounded-xl p-6 shadow-lg">
          <img
            src="/ja.jpg"
            alt="J-A"
            className="w-20 h-20 rounded-full mb-3 object-cover border-4 border-yellow-300 shadow"
          />
          <h3 className="text-lg font-bold">JA</h3>
          <p className="text-sm opacity-80">Très investi</p>
        </div>
        <div className="flex flex-col items-center bg-white/10 rounded-xl p-6 shadow-lg">
          <img
            src="/tybo.jpg"
            alt="Tybo"
            className="w-20 h-20 rounded-full mb-3 object-cover border-4 border-yellow-300 shadow"
          />
          <h3 className="text-lg font-bold">Tybo</h3>
          <p className="text-sm opacity-80">Très doué</p>
        </div>
        <div className="flex flex-col items-center bg-white/10 rounded-xl p-6 shadow-lg">
          <img
            src="/matheo.jpg"
            alt="Mathéo"
            className="w-20 h-20 rounded-full mb-3 object-cover border-4 border-yellow-300 shadow"
          />
          <h3 className="text-lg font-bold">Mathéo</h3>
          <p className="text-sm opacity-80">Très beau</p>
        </div>
        <div className="flex flex-col items-center bg-white/10 rounded-xl p-6 shadow-lg">
          <img
            src="/sam.jpg"
            alt="Sam"
            className="w-20 h-20 rounded-full mb-3 object-cover border-4 border-yellow-300 shadow"
          />
          <h3 className="text-lg font-bold">Sam</h3>
          <p className="text-sm opacity-80">
            Très humble, charismatique et sexy
          </p>
        </div>
      </div>
      <img src="/ochaco.jpg" alt="osef" className="w-60 mt-8 shadow-lg" />
    </div>
  );
};

export default About;
