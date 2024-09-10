import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useLocation } from 'react-router-dom';
import "../../src/css/animation.css"
import "../App.css"
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    setIsNavOpen(false); // Close the nav on location change
  }, [location]);

  const links = [
    { path: '/', label: 'Plan d\'investissement' },
    { path: '/bilans', label: 'Bilans financiers' },
    { path: '/analyses', label: 'Analyses de données' },
    { path: '/conseils', label: 'Conseils d\'investissement' },
  ];

  return (
    <header className="bg-[#160231] text-white py-4 fixed top-0 left-0 right-0 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">
          <a href="/home">Finances AI</a>
        </div>
        <nav>
          <div className="hidden md:flex space-x-4">
            {links.map(link => (
              <a
                key={link.path}
                href={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''} hover:text-gray-300`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button className="text-white focus:outline-none" onClick={toggleNav}>
              {isNavOpen ? <Icon icon="uil:times-circle" className='color-black' /> : <Icon icon="gravity-ui:square-bars" className='color-black' />}
            </button>
          </div>
        </nav>
      </div>
      <div className={`md:hidden bg-gray-800 text-white ${isNavOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-4 space-y-2">
          {links.map(link => (
            <a
              key={link.path}
              href={link.path}
              className={`block nav-link ${location.pathname === link.path ? 'active' : ''} hover:text-gray-300`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
