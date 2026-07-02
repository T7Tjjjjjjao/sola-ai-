import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC<{
  title: string;
  description: string;
  children?: React.ReactNode;
}> = ({ title, description, children }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-20"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        {title}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        {description}
      </p>
      {children}
    </motion.section>
  );
};

export default Hero;
