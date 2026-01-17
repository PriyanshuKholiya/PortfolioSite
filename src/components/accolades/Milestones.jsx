import React from 'react';
import { Mic, Book, Globe } from 'lucide-react';

const Milestones = () => {
  return (
    // Reduced py-24 -> py-16
    <section className="bg-[#0a0a0a] py-16 px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto space-y-16">
        
        {/* Row 1: World Record & TEDx */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* World Record Card - Compact */}
          <div className="relative bg-luxury-black border border-luxury-gold/30 p-8 flex flex-col justify-center items-start group hover:bg-[#111] transition">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
              <Globe size={80} /> {/* Reduced size */}
            </div>
            <h3 className="text-luxury-gold uppercase tracking-widest text-xs font-bold mb-3">
              Official World Record
            </h3>
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-3">
              Largest Green Pledge
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Recognized for mobilizing a massive global movement to "Save the Future" through environmental commitment.
            </p>
          </div>

          {/* TEDx Card - Compact */}
          <div className="relative bg-luxury-black border border-gray-800 p-8 flex flex-col justify-center items-start group hover:border-luxury-gold/30 transition">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
              <Mic size={80} /> {/* Reduced size */}
            </div>
            <h3 className="text-red-600 uppercase tracking-widest text-xs font-bold mb-3">
              Global Stage
            </h3>
            <h2 className="text-2xl md:text-3xl font-serif text-white mb-3">
              2x TEDx Speaker
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Global Keynote Speaker and Leadership & Mindset Evangelist, sharing transformative ideas on the world's most prestigious stages.
            </p>
          </div>
        </div>

        {/* Row 2: Authorship Feature */}
        <div className="flex flex-col lg:flex-row items-center gap-10 border-t border-gray-900 pt-16">
           {/* Book Cover - Scaled Down */}
           <div className="lg:w-1/3 flex justify-center">
             <div className="w-48 h-72 bg-gray-900 border border-gray-800 flex items-center justify-center shadow-xl shadow-luxury-gold/5 relative rotate-3 hover:rotate-0 transition duration-500">
                <Book size={48} className="text-gray-700" />
                <span className="absolute bottom-8 text-gray-500 text-[10px] uppercase">Book Cover</span>
             </div>
           </div>
           
           {/* Book Details - Compact Text */}
           <div className="lg:w-2/3 space-y-4 text-center lg:text-left">
             <p className="text-luxury-gold uppercase tracking-widest text-xs font-bold">
               Published Author
             </p>
             <h2 className="text-3xl md:text-4xl font-serif text-white">
               The Inner Compass: <br />
               <span className="italic text-gray-500">Finding Your True North</span>
             </h2>
             <p className="text-gray-300 text-base leading-relaxed max-w-lg">
               A definitive guide to purpose-driven leadership and self-mastery. 
               Dr. Borele explores the intersection of professional success and personal fulfillment.
             </p>
           
           </div>
        </div>

      </div>
    </section>
  );
};

export default Milestones;