import React from 'react';

const BioSegments = () => {
  return (
    <section className="bg-luxury-black pb-24 px-6 md:px-12 space-y-24">
      
      {/* SEGMENT 1: The Entrepreneurial Journey */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-6 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-serif text-white">
            The Entrepreneurial <span className="text-luxury-gold italic">Journey</span>
          </h2>
          <div className="space-y-4 text-gray-400 font-sans leading-relaxed text-lg">
            <p>
              Dr. Samiksha Borele is a globally respected entrepreneur and transformational mentor. 
              Beyond her role as President of <strong>Borele World</strong>, she drives strategic growth as a 
              <strong> Trustee of the Borele Foundation</strong> and holds Directorships at 
              <em> Bhaiji Infraprojects</em>, <em>SB Hospitality</em>, and <em>Ruchika Infra Pvt. Ltd</em>.
            </p>
            <p>
              As <span className="text-white font-semibold">CEO of Quantia Gravitas FZC LLC (UAE)</span>, she leads a future-focused enterprise 
              operating at the crossroads of innovation, sustainability, and human potential.
            </p>
          </div>
        </div>
        
      {/* Image */}
        <div className="relative h-[500px] border border-gray-800 p-4">
          <img 
            src="/image3.jpg" 
            alt="Entrepreneurial Journey" 
            className="w-full h-full object-cover transition duration-700" 
          />
        </div>

      </div>

      {/* SEGMENT 2: Leadership Philosophy */}
      <div className="container mx-auto max-w-4xl text-center py-12 border-y border-gray-900 bg-[#0a0a0a]">
        <h2 className="text-3xl font-serif text-white mb-6">
          Leadership <span className="text-luxury-gold">Philosophy</span>
        </h2>
        <p className="text-xl text-gray-300 italic font-serif leading-relaxed mb-6">
          "True leadership begins with mindset. It blends strategic foresight, emotional 
          intelligence, and ethical responsibility—creating leaders who are not only 
          successful but impactful."
        </p>
        <p className="text-gray-500 font-sans text-sm uppercase tracking-widest">
          Championing resilience, positivity, and conscious leadership.
        </p>
      </div>

      {/* SEGMENT 3: Beyond Business */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image 4 - Adjusted for better fit */}
        <div className="order-2 lg:order-1 relative h-auto aspect-[4/3] w-full">
          {/* Decorative box shifted slightly to frame the image better */}
          <div className="absolute top-4 left-4 w-full h-full border-2 border-luxury-gold/20 -z-10"></div>
          <img 
            src="/image4.jpg" 
            alt="Philanthropy" 
            // Changed to object-cover with top alignment to focus on faces
            className="w-full h-full object-cover object-top transition duration-700 shadow-2xl" 
          />
        </div>

        {/* Text */}
        <div className="order-1 lg:order-2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif text-white">
            Beyond <span className="text-luxury-gold italic">Business</span>
          </h2>
          <div className="space-y-4 text-gray-400 font-sans leading-relaxed text-lg">
             <p className="text-luxury-gold font-semibold uppercase tracking-wider text-sm">
                Philanthropy & Social Impact
             </p>
            <p>
              A dedicated philanthropist, Dr. Samiksha actively empowers women through education, 
              entrepreneurship, mental wellness, and leadership development.
            </p>
            <p>
              She is committed to ensuring inclusive and sustainable social progress, 
              building a legacy that transcends corporate success.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default BioSegments;