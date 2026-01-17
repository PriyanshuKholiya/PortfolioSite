import React from 'react';

const AboutHero = () => {
  return (
    // UPDATED: Increased top padding (pt-36 md:pt-44) to creating breathing room from the Navbar
    <section className="bg-luxury-black pt-36 md:pt-44 pb-12 px-6 md:px-12 relative overflow-hidden">
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-luxury-gold/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto text-center relative z-10 animate-fade-in-up">
        
        {/* Tag */}
        <p className="text-luxury-gold uppercase tracking-[0.25em] text-[10px] font-bold mb-3">
          Biography
        </p>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-serif text-white leading-tight">
          About Dr. Samiksha <span className="italic text-gray-500">Borele</span>
        </h1>

        {/* Divider */}
        <div className="w-16 h-0.5 bg-luxury-gold mx-auto mt-6"></div>
      </div>
    </section>
  );
};

export default AboutHero;