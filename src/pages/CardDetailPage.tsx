import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CardCustomizer from '../components/cards/CardCustomizer';
import { Card } from '../types';
import { cards } from '../data/mockData';
import Button from '../components/ui/Button';
import { ChevronRight } from 'lucide-react';

const CardDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [card, setCard] = useState<Card | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call with a small delay
    const timer = setTimeout(() => {
      const foundCard = cards.find(c => c.id === id);
      setCard(foundCard || null);
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!card) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold text-neutral-800 mb-4">عذراً، لم يتم العثور على البطاقة</h1>
          <p className="text-neutral-600 mb-6 text-center">
            البطاقة التي تبحث عنها غير موجودة أو تم إزالتها.
          </p>
          <Link to="/cards">
            <Button variant="primary">العودة إلى البطاقات</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-primary-500 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center text-white mb-4">
            <Link to="/cards" className="flex items-center hover:underline">
              <ChevronRight size={16} className="ml-1 transform rotate-180" />
              العودة للبطاقات
            </Link>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">{card.title}</h1>
        </div>
      </div>
      <main className="flex-grow bg-neutral-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CardCustomizer card={card} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CardDetailPage;