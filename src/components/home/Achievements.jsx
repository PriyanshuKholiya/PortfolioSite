import React from 'react';
import { Award } from 'lucide-react';

const Achievements = () => {
  const awards = [
    "Mentor of Change - NITI Aayog",
    "Chairperson - MENTORX Women Maharashtra",
    "World Record Holder - Largest Green Pledge",
    "Royal Eminence Award - Dubai",
    "Bharat Visionary Award",
    "Swami Vivekananda ChangeMaker Award"
  ];

  return (
    // Reduced padding: py-12
    <section className="bg-[#050505] py-12 px-6 md:px-12">
      <div className="container mx-auto max-w-3xl">
        
        {/* Header - Reduced margin */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Featured <span className="text-luxury-gold italic">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-luxury-gold mx-auto"></div>
        </div>

        {/* The List Layout - Compact */}
        <div className="space-y-3">
          {awards.map((award, index) => (
            <div 
              key={index}
              // Reduced padding: p-4 md:p-5
              className="flex items-center justify-between p-4 md:p-5 border border-gray-900 bg-[#0f0f0f] hover:border-luxury-gold/40 hover:bg-[#141414] transition-all duration-300 group cursor-default"
            >
              <div className="flex items-center gap-4">
                 {/* Number - Smaller */}
                <span className="text-luxury-gold/20 font-serif text-2xl font-bold group-hover:text-luxury-gold/50 transition">
                  {`0${index + 1}`}
                </span>
                
                {/* Text - Smaller */}
                <span className="text-base md:text-lg text-gray-300 font-serif group-hover:text-white transition">
                  {award}
                </span>
              </div>

              {/* Icon - Smaller */}
              <Award className="text-gray-600 group-hover:text-luxury-gold transition duration-300" size={18} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;