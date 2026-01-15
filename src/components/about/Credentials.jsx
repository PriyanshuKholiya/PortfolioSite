import React from 'react';
import { GraduationCap, Award, BookOpen, Globe } from 'lucide-react';

const Credentials = () => {
  const credentials = [
    {
      icon: <GraduationCap size={28} />,
      title: "Ph.D. in Management",
      school: "Chicago Open University, USA"
    },
    {
      icon: <BookOpen size={28} />,
      title: "MBA - Int. Business",
      school: "La Trobe University, Australia (2006)"
    },
    {
      icon: <Award size={28} />,
      title: "Master Certified Coach",
      school: "International Coaching Federation (ICF)"
    },
    {
      icon: <Globe size={28} />,
      title: "Global Business Mgmt",
      school: "Stansfield College, Singapore (2004)"
    },
    {
      icon: <Award size={28} />,
      title: "Business Etiquette",
      school: "Savoir Faire Academie (2024)"
    },
    {
      icon: <BookOpen size={28} />,
      title: "MBA - Marketing & HR",
      school: "IIPM"
    }
  ];

  return (
    <section className="bg-[#0f0f0f] py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif text-white text-center mb-12">
          Academic & Professional <span className="text-luxury-gold">Foundation</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((cred, index) => (
            <div key={index} className="bg-luxury-black p-8 border border-gray-800 text-center hover:border-luxury-gold transition duration-300 group">
              <div className="text-gray-500 mb-4 flex justify-center group-hover:text-luxury-gold transition">
                {cred.icon}
              </div>
              <h3 className="text-white font-serif text-lg mb-2">{cred.title}</h3>
              <p className="text-gray-400 text-sm">{cred.school}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credentials;