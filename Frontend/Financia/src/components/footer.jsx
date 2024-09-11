import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 fixed bottom-0 left-0 right-0 mt-52">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <a href="/" className="font-bold text-xl">
            Finances AI
          </a>
        </div>
        <nav>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li>
              <a href="/about" className="hover:text-gray-300">
                À propos
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-gray-300">
                Conditions d'utilisation
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-gray-300">
                Politique de confidentialité
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;