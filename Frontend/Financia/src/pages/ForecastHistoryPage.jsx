import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const ForecastHistoryPage = () => {
  // Logique pour récupérer l'historique des prévisions depuis le stockage (localStorage, base de données, etc.)
  const forecasts = [
    // Données de prévision simulées
    { id: 1, date: '2023-05-01', description: 'Prévision pour investissement immobilier' },
    { id: 2, date: '2023-04-15', description: 'Prévision pour investissement dans les technologies vertes' },
    // Autres prévisions
  ];

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white py-4 flex items-center justify-between px-4">
        <Link to="/" className="text-white flex items-center">
          <Icon icon="mdi:arrow-left" width="24" height="24" className="mr-2" />
          Retour
        </Link>
        <h1 className="text-xl font-bold">Historique des prévisions</h1>
      </header>
      <main className="flex-grow p-8">
        <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
          {forecasts.length > 0 ? (
            <ul>
              {forecasts.map((forecast) => (
                <li key={forecast.id} className="mb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-bold">{forecast.description}</h3>
                      <p className="text-gray-300">{forecast.date}</p>
                    </div>
                    <Link
                      to={`/forecast/${forecast.id}`}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center"
                    >
                      <Icon icon="mdi:eye" width="20" height="20" className="mr-2" />
                      Voir
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Aucune prévision dans l'historique</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default ForecastHistoryPage;