import React, { useEffect } from 'react';
import Footer from '../components/layout/Footer';
import AwardsGrid from '../components/accolades/AwardsGrid';
import Milestones from '../components/accolades/Milestones';
import Philanthropy from '../components/accolades/Philanthropy';

const Accolades = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-luxury-black min-h-screen pt-20">
      {/* Simple Header */}
      <div className="bg-luxury-black py-16 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-serif text-white animate-fade-in-up">
          Accolades & <span className="text-luxury-gold italic">Impact</span>
        </h1>
        <div className="w-24 h-1 bg-luxury-gold mx-auto mt-6"></div>
      </div>

      <AwardsGrid />
      <Milestones />
      <Philanthropy />
      
      <Footer />
    </main>
  );
};

export default Accolades;