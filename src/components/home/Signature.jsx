import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Signature = () => {
  // Content from PDF Page 2 [cite: 23, 24]
  const qualities = [
    { title: "Vision with Velocity", desc: "Building future-ready enterprises across borders." },
    { title: "Strategic Excellence", desc: "Driving growth, scale, and sustainability." },
    { title: "Mindset Mastery", desc: "Transforming leaders through perspective and purpose." },
    { title: "Empathetic Power", desc: "Leading with authenticity and human-centered values." },
  ];

  return (
    <section className="bg-luxury-black min-h-[80vh] flex flex-col lg:flex-row">
      
      {/* Left Side: Content (Black Background) */}
      <div className="lg:w-1/2 px-6 md:px-16 py-20 flex flex-col justify-center order-2 lg:order-1">
        <div className="space-y-8 max-w-xl">
          <p className="text-luxury-gold uppercase tracking-widest text-sm font-semibold">
            Leadership Identity
          </p>
          
          <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
            Signature <br />
            <span className="italic text-gray-500">Qualities.</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed font-sans">
            Dr. Samiksha Borele combines visionary strategy with human-centric leadership to drive global impact.
          </p>

          {/* List of Qualities */}
          <div className="space-y-6 pt-4">
            {qualities.map((q, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <CheckCircle2 className="text-luxury-gold mt-1 shrink-0 group-hover:scale-110 transition" size={20} />
                <div>
                  <h4 className="text-white font-serif text-xl">{q.title}</h4>
                  <p className="text-gray-500 text-sm">{q.desc}</p>
                </div>
              </div>
            ))}
          </div>

         <div className="pt-8">
  <Link to="/about">
    <button className="flex items-center gap-2 text-white border-b border-luxury-gold pb-1 hover:text-luxury-gold transition duration-300 uppercase tracking-wider text-sm">
      Read Full Bio <ArrowRight size={16} />
    </button>
  </Link>
</div>
        </div>
      </div>

      {/* Right Side: Image (Matches image_d3a6e8.jpg layout) */}
      <div className="lg:w-1/2 order-1 lg:order-2 h-[50vh] lg:h-auto relative">
        <img 
          src="/image2.jpg" 
          alt="Dr. Samiksha Borele - Strategic Meeting" 
          className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
        />
        {/* Subtle overlay to ensure it sits well next to the black section */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

    </section>
  );
};

export default Signature;