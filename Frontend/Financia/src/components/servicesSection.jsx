import React from 'react';
import { Icon } from '@iconify/react';
import "../App.css"

const ServicesSection = () => {
  const services = [
    {
      icon: <Icon icon="fluent-mdl2:line-chart" className='color: black' height="48"/>,
      title: 'Prévisions financières',
      description: 'Obtenez des prévisions financières précises grâce à notre moteur d\'IA avancé.',
    },
    {
      icon: <Icon icon="la:file-invoice-dollar"  className='color: black' height="48" />,
      title: 'Bilans financiers',
      description: 'Analysez vos bilans financiers et identifiez les tendances clés.',
    },
    {
      icon: <Icon icon="tabler:device-analytics"  className='color: black' height="48" />,
      title: 'Analyses de données',
      description: 'Exploitez la puissance de l\'IA pour analyser vos données financières.',
    },
    {
      icon:<Icon icon="la:money-bill-wave"  className='color: black' height="48" />,
      title: 'Conseils d\'investissement',
      description: 'Obtenez des recommandations d\'investissement personnalisées basées sur vos objectifs.',
    },
  ];

  return (
    <section className="text-black py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-20 text-center">Nos services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`relative bg-[#361364f1] overflow-hidden rounded-lg shadow-md ${index % 2 === 0 ? 'md:mt-0' : 'md:mt-12'}`}
              style={{ height: '200px' }}
            >
              {/* Image de fond floue */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <div className="absolute inset-0 backdrop-filter backdrop-blur-sm bg-black bg-opacity-30"></div>
              
              {/* Contenu du service */}
              <div className="relative  h-full flex flex-col justify-center items-center p-6">
                <div className="text-blue-500 mb-4">{service.icon}</div>
                <h3 className="text-xl text-center font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-200 text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <div className="w-1/3 h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full"></div>
      </div>
    </section>
  );
};

export default ServicesSection;