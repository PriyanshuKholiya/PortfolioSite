import React from 'react';
import Hero from '../components/home/Hero';
import Snapshot from '../components/home/Snapshot';
import Signature from '../components/home/Signature';
import GlobalFootprint from '../components/home/GlobalFootprint';
import Achievements from '../components/home/Achievements';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <main>
      <Hero />
      <Snapshot />
      <Signature />
      <GlobalFootprint />
      <Achievements />
      <Footer />
    </main>
  );
};

export default Home;