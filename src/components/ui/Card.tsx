import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card as CardType } from '../../types';

interface CardProps {
  card: CardType;
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="relative">
        <img 
          src={card.imageUrl} 
          alt={card.title} 
          className="w-full h-48 object-cover"
        />
        {card.isPopular && (
          <div className="absolute top-2 right-2 bg-secondary-400 text-neutral-800 text-xs font-bold px-2 py-1 rounded-full">
            مميزة
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-neutral-800">{card.title}</h3>
        <p className="text-neutral-600 text-sm mb-4">{card.description}</p>
        <Link 
          to={`/card/${card.id}`}
          className="flex items-center text-primary-500 text-sm font-medium hover:text-primary-600 transition-colors"
        >
          اختيار البطاقة
          <ArrowRight size={16} className="mr-1 rtl:rotate-180" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Card;