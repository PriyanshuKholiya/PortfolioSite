import React from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

const ContactSection = () => {
  // Offerings from PDF Page 5 [cite: 82]
  const offerings = [
    "Speaking Engagements",
    "Strategic Advisory",
    "Mentorship Programs",
    "Global Partnerships"
  ];

  return (
    <section className="bg-luxury-black py-20 px-6 md:px-12 min-h-screen flex items-center relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#111] to-luxury-black z-0"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Context & Offerings */}
          <div className="space-y-12 animate-fade-in-up">
            <div>
              <p className="text-luxury-gold uppercase tracking-[0.25em] text-xs font-bold mb-4">
                Get in Touch
              </p>
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
                Collaborate. <br />
                <span className="italic text-gray-500">Learn. Lead.</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md font-sans">
                Dr. Samiksha Borele - Building enterprises. Empowering minds. Shaping the future.
              </p>
            </div>

            {/* Offerings List [cite: 82] */}
            <div className="space-y-6 border-t border-gray-800 pt-8">
              <h3 className="text-white font-serif text-xl">Inquiries Open For:</h3>
              <ul className="space-y-4">
                {offerings.map((item, index) => (
                  <li key={index} className="flex items-center gap-4 text-gray-300 group">
                    <CheckCircle2 className="text-luxury-gold group-hover:scale-110 transition" size={20} />
                    <span className="font-sans text-sm tracking-wide uppercase group-hover:text-white transition">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Email */}
            <div className="flex items-center gap-4 pt-4">
              <div className="bg-[#1a1a1a] p-4 rounded-full border border-gray-800 text-luxury-gold">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest">Email Directly</p>
                <a href="mailto:contact@samikshaborele.com" className="text-white font-serif text-xl hover:text-luxury-gold transition">
                  contact@samikshaborele.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: The "Executive" Form */}
          <div className="bg-[#0a0a0a] border border-gray-900 p-8 md:p-12 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-luxury-gold/20"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-luxury-gold/20"></div>

            <h3 className="text-2xl font-serif text-white mb-8">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-gray-500 uppercase tracking-wider">Full Name</label>
                  <input type="text" className="w-full bg-[#111] border border-gray-800 text-white p-3 focus:outline-none focus:border-luxury-gold transition duration-300" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-gray-500 uppercase tracking-wider">Email Address</label>
                  <input type="email" className="w-full bg-[#111] border border-gray-800 text-white p-3 focus:outline-none focus:border-luxury-gold transition duration-300" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-500 uppercase tracking-wider">Subject</label>
                <select className="w-full bg-[#111] border border-gray-800 text-gray-400 p-3 focus:outline-none focus:border-luxury-gold transition duration-300">
                  <option>Select Inquiry Type</option>
                  <option>Speaking Engagement</option>
                  <option>Strategic Advisory</option>
                  <option>Mentorship</option>
                  <option>Global Partnership</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-gray-500 uppercase tracking-wider">Message</label>
                <textarea rows="4" className="w-full bg-[#111] border border-gray-800 text-white p-3 focus:outline-none focus:border-luxury-gold transition duration-300" placeholder="How can we collaborate?"></textarea>
              </div>

              <button className="w-full bg-luxury-gold text-black py-4 uppercase tracking-widest font-bold hover:bg-white transition duration-300 flex justify-center items-center gap-2">
                Submit Inquiry <ArrowRight size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;