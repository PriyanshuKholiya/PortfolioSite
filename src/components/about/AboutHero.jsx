import React from 'react';

const AboutHero = () => {
  return (
    <section className="bg-luxury-black pt-32 pb-16 px-6 md:px-12 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-luxury-gold/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto text-center relative z-10">
        <p className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-bold mb-4">
          Biography
        </p>
        <h1 className="text-4xl md:text-6xl font-serif text-white">
          About Dr. Samiksha <span className="italic text-gray-500">Borele</span>
        </h1>
        <div className="w-24 h-1 bg-luxury-gold mx-auto mt-8"></div>
      </div>
    </section>
  );
};

export default AboutHero;