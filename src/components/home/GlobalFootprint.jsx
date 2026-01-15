import React from 'react';
import { MapPin } from 'lucide-react';

const GlobalFootprint = () => {
  const locations = ["India", "UAE", "Australia", "Singapore", "Canada"];

  return (
    <section className="bg-luxury-black py-24 px-6 relative overflow-hidden">
      {/* Background World Map Effect (CSS generated) */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center bg-no-repeat grayscale pointer-events-none"></div>

      <div className="container mx-auto text-center relative z-10">
        
        <p className="text-luxury-gold uppercase tracking-widest text-sm font-semibold mb-4">
          International Presence
        </p>
        
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
          Global <span className="italic text-gray-500">Footprint.</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-16 font-sans">
          Driving influence across business, education, entrepreneurship, and leadership forums worldwide.
        </p>

        {/* Locations Grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {locations.map((loc, index) => (
            <div 
              key={index} 
              className="group flex items-center gap-2 border border-gray-800 bg-[#0a0a0a] px-8 py-4 rounded-full hover:border-luxury-gold transition-all duration-300"
            >
              <MapPin className="text-luxury-gold group-hover:scale-110 transition" size={18} />
              <span className="text-white uppercase tracking-wider text-sm font-semibold group-hover:text-luxury-gold-light transition">
                {loc}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GlobalFootprint;