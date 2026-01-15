import React from 'react';
import { Heart, Users, GraduationCap, Brain } from 'lucide-react';

const Philanthropy = () => {
  const initiatives = [
    { icon: <Users />, text: "Skill Development & Entrepreneurship" },
    { icon: <GraduationCap />, text: "Education & Scholarships" },
    { icon: <Brain />, text: "Mental Health Awareness" },
    { icon: <Heart />, text: "Leadership & Personal Growth" },
  ];

  return (
    <section className="bg-luxury-black py-24 px-6 md:px-12">
      <div className="container mx-auto bg-[#111] border border-gray-900 p-8 md:p-16 rounded-sm relative overflow-hidden">
        {/* Background Decorative Gradient */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-luxury-gold/5 to-transparent pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif text-white">
              The Borele <span className="text-luxury-gold">Foundation</span>
            </h2>
            <p className="text-gray-400 leading-relaxed font-sans">
              Dr. Samiksha Borele leads women-centric initiatives focused on transforming lives 
              and communities at scale. Her philanthropic work ensures inclusive and sustainable social progress.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {initiatives.map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-black/50 p-4 border border-gray-800">
                <div className="text-luxury-gold">{item.icon}</div>
                <span className="text-gray-300 text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philanthropy;