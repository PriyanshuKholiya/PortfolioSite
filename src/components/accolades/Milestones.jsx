import React from 'react';
import { Mic, Book, Globe } from 'lucide-react';

const Milestones = () => {
  return (
    <section className="bg-[#0a0a0a] py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto space-y-24">
        
        {/* Row 1: World Record & TEDx [cite: 62, 68] */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* World Record Card */}
          <div className="relative bg-luxury-black border border-luxury-gold/30 p-10 flex flex-col justify-center items-start group hover:bg-[#111] transition">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
              <Globe size={120} />
            </div>
            <h3 className="text-luxury-gold uppercase tracking-widest text-sm font-bold mb-4">
              Official World Record
            </h3>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Largest Green Pledge
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Recognized for mobilizing a massive global movement to "Save the Future" through environmental commitment.
            </p>
          </div>

          {/* TEDx Card */}
          <div className="relative bg-luxury-black border border-gray-800 p-10 flex flex-col justify-center items-start group hover:border-luxury-gold/30 transition">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
              <Mic size={120} />
            </div>
            <h3 className="text-red-600 uppercase tracking-widest text-sm font-bold mb-4">
              Global Stage
            </h3>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              2x TEDx Speaker
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Global Keynote Speaker and Leadership & Mindset Evangelist, sharing transformative ideas on the world's most prestigious stages.
            </p>
          </div>
        </div>

        {/* Row 2: Authorship Feature [cite: 69-71] */}
        <div className="flex flex-col lg:flex-row items-center gap-12 border-t border-gray-900 pt-20">
           {/* Book Cover Placeholder */}
           <div className="lg:w-1/3 flex justify-center">
             <div className="w-64 h-96 bg-gray-900 border border-gray-800 flex items-center justify-center shadow-2xl shadow-luxury-gold/5 relative rotate-3 hover:rotate-0 transition duration-500">
                <Book size={64} className="text-gray-700" />
                <span className="absolute bottom-10 text-gray-500 text-xs uppercase">Book Cover</span>
             </div>
           </div>
           
           {/* Book Details */}
           <div className="lg:w-2/3 space-y-6 text-center lg:text-left">
              <p className="text-luxury-gold uppercase tracking-widest text-sm font-bold">
                Published Author
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-white">
                The Inner Compass: <br />
                <span className="italic text-gray-500">Finding Your True North</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
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