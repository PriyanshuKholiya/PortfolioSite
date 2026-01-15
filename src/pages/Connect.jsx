import React, { useEffect } from 'react';
import Footer from '../components/layout/Footer';
import ContactSection from '../components/connect/ContactSection';

const Connect = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-luxury-black min-h-screen pt-20">
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Connect;