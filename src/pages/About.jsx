import React, { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import BioSegments from '../components/about/BioSegments';
import Credentials from '../components/about/Credentials';
import Footer from '../components/layout/Footer';

const About = () => {
  // Ensure page starts at top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-luxury-black min-h-screen">
      <AboutHero />
      <BioSegments />
      <Credentials />
      <Footer />
    </main>
  );
};

export default About;