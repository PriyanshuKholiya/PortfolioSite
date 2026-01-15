import React from 'react';
import { Building2, Globe2, Lightbulb, TrendingUp, Mic, BookOpen } from 'lucide-react';

const Snapshot = () => {
  const achievements = [
    {
      icon: <Building2 size={32} />,
      title: "President - Borele World",
      desc: "Leading a Real Estate & Hospitality Powerhouse with strategic excellence."
    },
    {
      icon: <Globe2 size={32} />,
      title: "CEO - Quantia Gravitas",
      desc: "Driving Innovation, Sustainability & Human Potential in the UAE."
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Mentor of Change",
      desc: "Appointed by NITI Aayog, Govt. of India to shape future innovators."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Mentor & Investor",
      desc: "Startup India Mentor & Investor at 'Path-Finder 2.0' & 'Big Fish Pool'."
    },
    {
      icon: <Mic size={32} />,
      title: "Speaker & Jury Member",
      desc: "2x TEDx Speaker and Jury for Fashion & Beauty Pageants."
    },
    {
      icon: <BookOpen size={32} />,
      title: "Published Author",
      desc: "Author of 'The Inner Compass: Finding Your True North'."
    }
  ];

  return (
    <section className="bg-luxury-black py-24 px-6 md:px-12 relative">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-luxury-gold uppercase tracking-[0.2em] text-xs font-bold">
            High-Impact Highlights
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            A Snapshot of <span className="italic text-gray-500">Excellence</span>
          </h2>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-[#0f0f0f] p-10 border border-gray-900 hover:border-luxury-gold/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-luxury-gold mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition duration-300">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif text-white mb-3 group-hover:text-luxury-gold-light transition">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-sans border-t border-gray-800 pt-4 mt-4 group-hover:border-gray-700 transition">
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
