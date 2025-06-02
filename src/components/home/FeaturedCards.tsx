import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { cards } from '../../data/mockData';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const FeaturedCards: React.FC = () => {
  // Filter popular cards
  const popularCards = cards.filter(card => card.isPopular);
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-4">البطاقات المميزة</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            اختر من بين مجموعة متنوعة من بطاقات التهنئة المميزة لإرسالها إلى أحبائك
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {popularCards.map((card) => (
            <motion.div key={card.id} variants={item}>
              <Card card={card} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCards;