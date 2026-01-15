import React from 'react';
import { Trophy, Star, Award, Medal } from 'lucide-react';

const AwardsGrid = () => {
  // Updated with specific data from PDF Pages 4-6
  const awards = [
    { title: "Best Teacher Award 2024", sub: "Eminent Principals Association", icon: <Star size={24} /> },
    { title: "Rising Star of Bharat", sub: "CT University Startup Meet", icon: <Star size={24} /> },
    { title: "Sashakt Nari Samman", sub: "MMIFF & Sharda University", icon: <Award size={24} /> },
    { title: "India's Most Trusted Titans", sub: "Excellence in Innovation", icon: <Trophy size={24} /> },
    { title: "Teacher Inspiration Award", sub: "UNESCO & Sharda Society", icon: <Award size={24} /> },
    { title: "Golden Pinnacle Award", sub: "Natl. Sports & Youth Council", icon: <Medal size={24} /> },
    { title: "Royal Eminence Award", sub: "Westford University, Dubai", icon: <Trophy size={24} /> },
    { title: "Bharat Visionary Award", sub: "Venture Vault, Punjab", icon: <Award size={24} /> },
    { title: "World Record Holder", sub: "Largest Green Pledge", icon: <Star size={24} /> },
  ];

  return (
    <section className="bg-luxury-black py-20 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-luxury-gold uppercase tracking-widest text-xs font-bold mb-3">Recognition</p>
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            Global Honors & <span className="italic text-gray-500">Awards</span>
          </h2>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((item, index) => (
            <div 
              key={index} 
              className="group bg-[#0f0f0f] p-8 border border-gray-900 hover:border-luxury-gold/60 transition duration-500 hover:-translate-y-1"
            >
              <div className="text-gray-600 group-hover:text-luxury-gold transition-colors duration-300 mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-serif text-white mb-2 group-hover:text-luxury-gold-light transition">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm font-sans uppercase tracking-wider">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Recognition Note [cite: 143-149] */}
        <div className="mt-16 text-center max-w-4xl mx-auto border-t border-gray-900 pt-10">
          <p className="text-gray-400 font-serif italic text-lg">
            "Recognized by FICCI, IIT Guwahati, IIT Ropar, UNESCO, and global leadership forums for 
            excellence in education, entrepreneurship, and social impact."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AwardsGrid;