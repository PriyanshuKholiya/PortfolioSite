import React from 'react';
import { Award } from 'lucide-react';

const Achievements = () => {
  // Content strictly from PDF Page 2 "Featured Achievements" 
  const awards = [
    "Mentor of Change - NITI Aayog",
    "Chairperson - MENTORX Women Maharashtra",
    "World Record Holder - Largest Green Pledge",
    "Royal Eminence Award - Dubai",
    "Bharat Visionary Award",
    "Swami Vivekananda ChangeMaker Award"
  ];

  return (
    <section className="bg-[#050505] py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-4xl">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Featured <span className="text-luxury-gold italic">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-luxury-gold mx-auto"></div>
        </div>

        {/* The List Layout - Mimicking the reference image structure */}
        <div className="space-y-4">
          {awards.map((award, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-6 md:p-8 border border-gray-900 bg-[#0f0f0f] hover:border-luxury-gold/40 hover:bg-[#141414] transition-all duration-300 group cursor-default"
            >
              <div className="flex items-center gap-6">
                 {/* Number */}
                <span className="text-luxury-gold/20 font-serif text-4xl font-bold group-hover:text-luxury-gold/50 transition">
                  {`0${index + 1}`}
                </span>
                
                {/* Text */}
                <span className="text-lg md:text-xl text-gray-300 font-serif group-hover:text-white transition">
                  {award}
                </span>
              </div>

              {/* Icon */}
              <Award className="text-gray-600 group-hover:text-luxury-gold transition duration-300" size={24} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;