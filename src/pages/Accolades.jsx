import React, { useEffect } from 'react';
import Footer from '../components/layout/Footer';
import AwardsGrid from '../components/accolades/AwardsGrid';
import Milestones from '../components/accolades/Milestones';
import Philanthropy from '../components/accolades/Philanthropy';
import WallOfFame from '../components/accolades/WallOfFame';

const Accolades = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-luxury-black min-h-screen pt-20">
     
      
      
      
      <WallOfFame />
      <AwardsGrid />
      
      <Footer />
    </main>
  );
};

export default Accolades;