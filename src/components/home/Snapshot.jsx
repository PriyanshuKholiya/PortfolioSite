import React from 'react';
import { Building2, Globe2, Lightbulb, TrendingUp, Mic, BookOpen } from 'lucide-react';

const Snapshot = () => {
  const achievements = [
    {
      icon: <Building2 size={28} />,
      title: "President - Borele World",
      desc: "Leading a Real Estate & Hospitality Powerhouse with strategic excellence."
    },
    {
      icon: <Globe2 size={28} />,
      title: "CEO - Quantia Gravitas",
      desc: "Driving Innovation, Sustainability & Human Potential in the UAE."
    },
    {
      icon: <Lightbulb size={28} />,
      title: "Mentor of Change",
      desc: "Appointed by NITI Aayog, Govt. of India to shape future innovators."
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Mentor & Investor",
      desc: "Startup India Mentor & Investor at 'Path-Finder 2.0' & 'Big Fish Pool'."
    },
    {
      icon: <Mic size={28} />,
      title: "Speaker & Jury Member",
      desc: "2x TEDx Speaker and Jury for Fashion & Beauty Pageants."
    },
    {
      icon: <BookOpen size={28} />,
      title: "Published Author",
      desc: "Author of 'The Inner Compass: Finding Your True North'."
    }
  ];

  return (
    // UPDATED: Balanced padding (py-16)
    <section className="bg-luxury-black py-16 px-6 md:px-12 relative">
      <div className="container mx-auto">
        
        {/* Header - Balanced spacing */}
        <div className="text-center mb-12 space-y-3">
          <p className="text-luxury-gold uppercase tracking-[0.2em] text-xs font-bold">
            High-Impact Highlights
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-white">
            A Snapshot of <span className="italic text-gray-500">Excellence</span>
          </h2>
        </div>

        {/* The Grid - Balanced Gap (gap-6) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <div 
              key={index}
              // UPDATED: Comfortable padding (p-8)
              className="group relative bg-[#0f0f0f] p-8 border border-gray-900 hover:border-luxury-gold/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-luxury-gold mb-5 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition duration-300">
                {item.icon}
              </div>

              {/* Content - Restored Title Size */}
              <h3 className="text-xl font-serif text-white mb-3 group-hover:text-luxury-gold-light transition">
                {item.title}
              </h3>
              
              {/* Description - Restored Readability (text-sm) */}
              <p className="text-gray-400 text-sm leading-relaxed font-sans border-t border-gray-800 pt-4 mt-2 group-hover:border-gray-700 transition">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Snapshot;