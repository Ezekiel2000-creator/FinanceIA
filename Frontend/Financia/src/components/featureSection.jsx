import React from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "../../src/css/animation.css"
import "../App.css"
const FeaturesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <Icon icon="ion:rocket-outline" width="48" height="48" />,
      title: 'Performances accrues',
      description: 'Grâce à notre technologie d\'IA de pointe, vous bénéficierez de performances financières optimisées.',
    },
    {
      icon: <Icon icon="la:laptop-code" width="48" height="48" />,
      title: 'Intégration transparente',
      description: 'Notre solution s\'intègre facilement à vos systèmes existants pour une expérience fluide.',
    },
    {
      icon: <Icon icon="emojione-monotone:bar-chart" width="48" height="48" />,
      title: 'Analyses approfondies',
      description: 'Exploitez les capacités d\'analyse avancées de notre IA pour prendre des décisions éclairées.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="bg-white text-black py-12 mb-12">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Pourquoi choisir notre solution ?
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col items-center feature-box"
              variants={itemVariants}
            >
              <motion.div
                className="text-blue-500 mb-4"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 * (index + 1), duration: 0.5 }}
              >
                {feature.icon}
              </motion.div>
              <motion.h3
                className="text-xl font-bold mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 * (index + 1), duration: 0.5 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                className="text-gray-300 text-center"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 * (index + 1), duration: 0.5 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
