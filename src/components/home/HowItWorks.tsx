import React from 'react';
import { motion } from 'framer-motion';
import { Search, Palette, Share } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'اختر البطاقة',
    description: 'اختر من بين مجموعة متنوعة من تصاميم البطاقات المميزة',
    icon: <Search className="h-8 w-8" />,
  },
  {
    id: 2,
    title: 'خصص الرسالة',
    description: 'أضف اسم المستلم ورسالتك الشخصية للبطاقة',
    icon: <Palette className="h-8 w-8" />,
  },
  {
    id: 3,
    title: 'شارك البطاقة',
    description: 'شارك البطاقة بسهولة عبر وسائل التواصل المختلفة',
    icon: <Share className="h-8 w-8" />,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-800 mb-4">كيف تعمل خدمتنا</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            خطوات بسيطة لإنشاء ومشاركة بطاقات التهنئة الخاصة بك
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step) => (
            <motion.div 
              key={step.id}
              className="bg-white rounded-lg shadow-md p-6 text-center"
              variants={item}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-500 mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-2">{step.title}</h3>
              <p className="text-neutral-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;