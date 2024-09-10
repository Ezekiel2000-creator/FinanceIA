import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import service from "../assets/images/service.png"
const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://nouvelles.umontreal.ca/fileadmin/_processed_/csm_20220126_ia_finances_4119f3e513.jpg",
    "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // Ajoutez d'autres URLs d'images ici
  ];

  const bounceAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change d'image toutes les 5 secondes

    return () => clearInterval(timer);
  }, []);

  return (
    <section className=" text-black py-16 shadow-lg">
      <div className="bg-cover bg-center bg-no-repeat container mx-auto flex flex-col md:flex-row items-center justify-between min-h-[60vh]" >
      
        <div style={{ backgroundImage: `url(${service})`, backgroundSize: 'cover',height: '500px',}}>
        
          <motion.div
            className="md:w-[100%] mb-8 md:mb-0"
            
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            
            <h1 className="text-5xl font-bold mt-[10%] mb-6">
              Optimisez vos finances avec l'intelligence artificielle
            </h1>
            <p className="text-gray-800 mb-10 text-lg">
              Exploitez la puissance de l'IA pour obtenir des prévisions financières précises, des analyses approfondies et des conseils d'investissement personnalisés.
            </p>
            <motion.a
              href="/"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg"
              animate={bounceAnimation}
            >
              Commencer
            </motion.a>
          </motion.div>
          
        </div>
       
        
        <motion.div
          className="md:w-[100%] relative h-[60vh] overflow-hidden"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence initial={false}>
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt={`Illustration ${currentImageIndex + 1}`}
              className="w-full h-full object-cover rounded-xl absolute top-0 left-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;