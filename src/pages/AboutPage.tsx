import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-primary-500 py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            المدرسة العامرية القرآنية
          </h1>
          <p className="text-white opacity-90 text-lg max-w-3xl mx-auto">
            منارة للعلم والقرآن والتربية في سلطنة عمان
          </p>
        </div>
        
        {/* About Content */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-2xl font-bold text-primary-500 mb-6">من نحن</h2>
              <p className="mb-6">
                المدرسة العامرية القرآنية هي واحدة من المؤسسات التعليمية الرائدة في سلطنة عُمان، تأسست عام 2000 بهدف تعليم القرآن الكريم وعلومه، وغرس القيم الإسلامية في نفوس الطلاب.
              </p>
              <p className="mb-6">
                تعمل المدرسة على تقديم تعليم قرآني متميز يجمع بين الأصالة والمعاصرة، من خلال استخدام أحدث الوسائل التعليمية وتوظيف كوادر تعليمية مؤهلة ومتخصصة.
              </p>
              
              <h2 className="text-2xl font-bold text-primary-500 mb-6">رؤيتنا</h2>
              <p className="mb-6">
                أن نكون صرحاً تعليمياً رائداً في تعليم القرآن الكريم وعلومه، ونموذجاً يحتذى به في تربية النشء على القيم والأخلاق الإسلامية.
              </p>
              
              <h2 className="text-2xl font-bold text-primary-500 mb-6">رسالتنا</h2>
              <p className="mb-6">
                تقديم تعليم قرآني متميز يؤهل الطلاب لفهم القرآن الكريم وتدبره والعمل به، وإعداد جيل متمسك بالقيم الإسلامية، معتز بهويته، قادر على المساهمة في بناء المجتمع.
              </p>
              
              <h2 className="text-2xl font-bold text-primary-500 mb-6">خدماتنا</h2>
              <ul className="list-disc space-y-2 mb-6 pr-5">
                <li>تحفيظ القرآن الكريم كاملاً وفق منهجية متدرجة ومتقنة</li>
                <li>تعليم أحكام التجويد النظرية والتطبيقية</li>
                <li>دورات في علوم القرآن والتفسير</li>
                <li>أنشطة ثقافية وتربوية متنوعة</li>
                <li>إقامة المسابقات القرآنية المحلية</li>
                <li>خدمة بطاقات التهنئة الإلكترونية للمناسبات المختلفة</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;