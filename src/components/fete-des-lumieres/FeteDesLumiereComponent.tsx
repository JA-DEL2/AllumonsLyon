import React from "react";

const FeteDesLumiereComponent: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-b from-blue-900 via-indigo-900 to-purple-900 rounded-xl shadow-2xl p-8 mt-10 text-white">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold mb-4 drop-shadow-lg">
          La Fête des Lumières à Lyon
        </h1>
        <p className="text-lg opacity-90">
          La Fête des Lumières est un événement emblématique qui illumine la
          ville de Lyon chaque année au mois de décembre. Pendant quatre
          soirées, la ville se transforme en un véritable théâtre de lumière,
          attirant des millions de visiteurs venus du monde entier.
        </p>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2 text-yellow-300 drop-shadow">
          Histoire et Signification
        </h2>
        <p className="opacity-90">
          Cette tradition remonte à 1852, lorsque les Lyonnais ont illuminé
          leurs fenêtres avec des bougies pour célébrer la statue de la Vierge
          Marie. Aujourd'hui, la fête est devenue un rendez-vous artistique
          majeur, mettant en avant des créations lumineuses innovantes dans
          toute la ville.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2 text-yellow-300 drop-shadow">
          Les Lieux Incontournables
        </h2>
        <ul className="list-disc list-inside space-y-1 pl-4">
          <li>La Place des Terreaux</li>
          <li>La Basilique de Fourvière</li>
          <li>La Place Bellecour</li>
          <li>Le Parc de la Tête d'Or</li>
        </ul>
      </section>
      <section className="mb-4">
        <h2 className="text-2xl font-bold mb-4 text-yellow-300 drop-shadow">
          Galerie de Visuels
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Ajoutez ici vos images ou animations lumineuses */}
          <div className="flex items-center justify-center h-32 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-lg shadow-lg animate-pulse text-black font-semibold">
            Visuel 1
          </div>
          <div className="flex items-center justify-center h-32 bg-gradient-to-tr from-blue-400 via-green-400 to-yellow-300 rounded-lg shadow-lg animate-pulse text-black font-semibold">
            Visuel 2
          </div>
          <div className="flex items-center justify-center h-32 bg-gradient-to-tr from-pink-400 via-purple-400 to-indigo-400 rounded-lg shadow-lg animate-pulse text-black font-semibold">
            Visuel 3
          </div>
          <div className="flex items-center justify-center h-32 bg-gradient-to-tr from-indigo-400 via-blue-400 to-green-400 rounded-lg shadow-lg animate-pulse text-black font-semibold">
            Visuel 4
          </div>
          {/* Ajoutez autant de visuels que nécessaire */}
        </div>
      </section>
    </div>
  );
};

export default FeteDesLumiereComponent;
