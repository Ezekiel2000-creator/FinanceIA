import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <aside
      className={`bg-[#220249] text-white h-auto p-4 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Menu</h2>
        <button
          className="text-white focus:outline-none"
          onClick={onClose}
        >
          <Icon icon="mdi:close" width="24" height="24" />
        </button>
      </div>
      <nav>
        <ul>
          <li>
            <Link
              to="/home"
              className="flex items-center text-gray-300 hover:text-white mb-2"
            >
              <Icon icon="mdi:history" width="20" height="20" className="mr-2" />
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/forecast-history"
              className="flex items-center text-gray-300 hover:text-white mb-2"
            >
              <Icon icon="mdi:history" width="20" height="20" className="mr-2" />
              Historique des prévisions
            </Link>
          </li>
          {/* Autres liens du menu */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;