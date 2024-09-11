import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const NewForecastPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour soumettre les informations d'investissement et générer la prévision
    // Rediriger vers la page principale après la génération de la prévision
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white py-4 flex items-center justify-between px-4">
        <Link to="/" className="text-white flex items-center">
          <Icon icon="mdi:arrow-left" width="24" height="24" className="mr-2" />
          Retour
        </Link>
        <h1 className="text-xl font-bold">Nouvelle prévision</h1>
      </header>
      <main className="flex-grow p-8">
        <form onSubmit={handleSubmit} className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
          {/* Champs pour les informations d'investissement */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center"
          >
            <Icon icon="mdi:chart-line" width="20" height="20" className="mr-2" />
            Générer la prévision
          </button>
        </form>
      </main>
    </div>
  );
};

export default NewForecastPage;