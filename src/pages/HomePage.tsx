import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import Categories from '../components/home/Categories';
import FeaturedCards from '../components/home/FeaturedCards';
import HowItWorks from '../components/home/HowItWorks';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Categories />
        <FeaturedCards />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;