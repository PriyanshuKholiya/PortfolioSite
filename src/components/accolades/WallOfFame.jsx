import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const WallOfFame = () => {
  // CONFIGURATION: Number of images to show initially
  const INITIAL_COUNT = 12;
  const TOTAL_IMAGES = 52; // Set this to the exact number of images you have
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  // Generates the array based on your folder structure: /awards/Image (1).jpeg
  const allImages = Array.from({ length: TOTAL_IMAGES }, (_, i) => ({
    id: i,
    // This matches your filenames with the space: Image (1).jpeg
    src: `/awards/Image (${i + 1}).jpeg`, 
    alt: `Award Moment ${i + 1}`,
  }));

  // Logic to toggle between "Show More" and "Show Less"
  const handleToggle = () => {
    if (visibleCount >= allImages.length) {
      setVisibleCount(INITIAL_COUNT); // Collapse
      document.getElementById('wall-of-fame').scrollIntoView({ behavior: 'smooth' });
    } else {
      setVisibleCount(prev => Math.min(prev + 12, allImages.length)); // Show next 12
    }
  };

  return (
    <section id="wall-of-fame" className="bg-luxury-black py-24 px-6 md:px-12 border-t border-gray-900">
      <div className="container mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-luxury-gold uppercase tracking-[0.2em] text-xs font-bold">
            Moments of Glory
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            Wall of <span className="italic text-gray-500">Fame</span>
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mt-6"></div>
        </div>

        {/* MASONRY GRID LAYOUT */}
        <div className="columns-1 md:columns-3 lg:columns-4 gap-4 space-y-4">
          
          {allImages.slice(0, visibleCount).map((img) => (
            <div 
              key={img.id} 
              className="break-inside-avoid relative group overflow-hidden border border-gray-800 bg-[#111] hover:border-luxury-gold/50 transition duration-500"
            >
              <img 
                src={img.src} 
                alt={img.alt}
                loading="lazy"
                // REMOVED 'grayscale' and 'group-hover:grayscale-0'
                className="w-full h-auto object-cover transition-all duration-700 hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none'; 
                  console.warn(`Missing image: ${img.src}`);
                }}
              />
              
              {/* Optional: Gold Tint Overlay on Hover (Subtle) */}
              <div className="absolute inset-0 bg-luxury-gold/10 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>
            </div>
          ))}
          
        </div>

        {/* LOAD MORE BUTTON */}
        <div className="mt-16 text-center">
          <button 
            onClick={handleToggle}
            className="inline-flex items-center gap-2 border border-luxury-gold text-luxury-gold px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-luxury-gold hover:text-black transition duration-300"
          >
            {visibleCount >= allImages.length ? (
              <>Show Less <Minus size={18} /></>
            ) : (
              <>View More Moments <Plus size={18} /></>
            )}
          </button>
          
          {/* Counter Text */}
          <p className="text-gray-600 text-xs mt-4 tracking-wider">
            Showing {Math.min(visibleCount, allImages.length)} of {allImages.length}
          </p>
        </div>

      </div>
    </section>
  );
};

export default WallOfFame;