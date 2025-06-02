import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CardsList from '../components/cards/CardsList';

const CardsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-primary-500 py-12 px-4 text-center">
        <h1 className="text-3xl font-bold text-white">بطاقات التهنئة</h1>
        <p className="text-white opacity-90 mt-2 max-w-2xl mx-auto">
          استعرض مجموعتنا المتنوعة من بطاقات التهنئة لجميع المناسبات
        </p>
      </div>
      <main className="flex-grow bg-neutral-100">
        <CardsList />
      </main>
      <Footer />
    </div>
  );
};

export default CardsPage;