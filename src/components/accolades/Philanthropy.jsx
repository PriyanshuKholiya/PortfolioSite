import React from 'react';
import { Heart, Users, GraduationCap, Brain } from 'lucide-react';

const Philanthropy = () => {
  const initiatives = [
    { icon: <Users size={20} />, text: "Skill Development" }, // Shortened text slightly
    { icon: <GraduationCap size={20} />, text: "Education" },
    { icon: <Brain size={20} />, text: "Mental Health" },
    { icon: <Heart size={20} />, text: "Leadership" },
  ];

  return (
    // Reduced py-24 -> py-16
    <section className="bg-luxury-black py-16 px-6 md:px-12">
      {/* Reduced inner padding p-8 md:p-10 */}
      <div className="container mx-auto bg-[#111] border border-gray-900 p-8 md:p-10 rounded-sm relative overflow-hidden">
        
        {/* Background Decorative Gradient */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-luxury-gold/5 to-transparent pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-white">
              The Borele <span className="text-luxury-gold">Foundation</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed font-sans">
              Dr. Samiksha Borele leads women-centric initiatives focused on transforming lives 
              and communities at scale. Her philanthropic work ensures inclusive and sustainable social progress.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {initiatives.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-black/50 p-3 border border-gray-800">
                <div className="text-luxury-gold">{item.icon}</div>
                <span className="text-gray-300 text-xs font-medium uppercase tracking-wide">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philanthropy;