import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-pattern-light bg-cover bg-center py-20 md:py-28">
      <div className="absolute inset-0 bg-primary-500 bg-opacity-80"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          بطاقات تهنئة مميزة من المدرسة العامرية القرآنية
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          شارك أجمل لحظات الفرح والمناسبات السعيدة مع الأحباب من خلال بطاقات التهنئة الإلكترونية المميزة
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="/cards">
            <Button variant="secondary" size="lg">استعرض البطاقات</Button>
          </Link>
          <Link to="/about">
            <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:bg-opacity-20">
              عن المدرسة
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;