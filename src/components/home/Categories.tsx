import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Moon, GraduationCap, Baby, Trophy, Sheet as Sheep } from 'lucide-react';
import { categories } from '../../data/mockData';

const iconMap: Record<string, React.ReactNode> = {
  heart: <Heart size={32} />,
  moon: <Moon size={32} />,
  'graduation-cap': <GraduationCap size={32} />,
  baby: <Baby size={32} />,
  trophy: <Trophy size={32} />,
  sheep: <Sheep size={32} />,
};

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

const Categories: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-4">اختر مناسبتك</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            نقدم مجموعة متنوعة من بطاقات التهنئة لمختلف المناسبات، اختر المناسبة التي تبحث عنها
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={item}>
              <Link 
                to={`/cards?category=${category.id}`}
                className="block bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-primary-500 mb-3 mx-auto flex justify-center">
                  {iconMap[category.icon]}
                </div>
                <h3 className="font-medium text-neutral-800">{category.name}</h3>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;