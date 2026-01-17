import React from 'react';

const BioSegments = () => {
  return (
    <section className="bg-luxury-black pb-24 px-6 md:px-12 space-y-32">
      
      {/* SEGMENT 1: The Entrepreneurial Journey */}
      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 animate-fade-in-up order-2 lg:order-1">
          <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
            The Entrepreneurial <br />
            <span className="text-luxury-gold italic">Journey.</span>
          </h2>
          
          <div className="space-y-6 text-gray-300 font-sans leading-relaxed text-lg text-justify">
            <p>
              Dr. Samiksha Borele is a globally respected entrepreneur and transformational mentor whose influence spans borders and industries. 
              As the <strong>President of Borele World</strong>, she has cultivated a reputation for excellence in the Real Estate and Hospitality sectors, 
              driving strategic growth through <em>Bhaiji Infraprojects</em>, <em>SB Hospitality</em>, and <em>Ruchika Infra Pvt. Ltd</em>.
            </p>
            <p>
              Her vision extends beyond traditional business. As <span className="text-white font-semibold">CEO of Quantia Gravitas FZC LLC (UAE)</span>, 
              she is at the forefront of a future-focused enterprise operating at the critical intersection of innovation, sustainability, and human potential. 
              She bridges the gap between established markets and emerging technologies, fostering partnerships that redefine what is possible in the global arena.
            </p>
            <p>
              With a leadership style characterized by "Vision with Velocity," Dr. Borele does not just navigate markets; she shapes them—combining 
              robust economic strategies with a deep commitment to ethical leadership.
            </p>
          </div>
        </div>
        
        {/* Image Container */}
        <div className="order-1 lg:order-2 relative w-full aspect-[3/4] md:aspect-[4/5] lg:h-[700px] border border-gray-800 p-3 shadow-2xl bg-[#0a0a0a]">
          <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-luxury-gold/20 -mt-4 -mr-4 hidden lg:block"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-luxury-gold/20 -mb-4 -ml-4 hidden lg:block"></div>
          
          <img 
            src="/image3.jpeg"
            alt="Entrepreneurial Journey" 
            className="w-full h-full object-cover object-center transition duration-1000 ease-in-out" 
          />
        </div>
      </div>

      {/* SEGMENT 2: Leadership Philosophy */}
      <div className="container mx-auto max-w-5xl text-center py-16 border-y border-gray-900 bg-[#0a0a0a] relative overflow-hidden">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] font-serif text-white/5 whitespace-nowrap pointer-events-none select-none">
          VISIONARY
        </span>
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">
            Leadership <span className="text-luxury-gold">Philosophy</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 italic font-serif leading-relaxed mb-8 px-4 max-w-3xl mx-auto">
            "True leadership begins with mindset. It blends strategic foresight, emotional 
            intelligence, and ethical responsibility—creating leaders who are not only 
            successful but impactful."
          </p>
          <p className="text-luxury-gold font-sans text-xs uppercase tracking-[0.25em] font-bold">
            — Dr. Samiksha Borele
          </p>
        </div>
      </div>

      {/* SEGMENT 3: Beyond Business */}
      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Image Container */}
        <div className="relative w-full aspect-[3/4] md:aspect-[4/5] lg:h-[700px] border border-gray-800 p-3 shadow-2xl bg-[#0a0a0a]">
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-luxury-gold/20 -mt-4 -ml-4 hidden lg:block"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-luxury-gold/20 -mb-4 -mr-4 hidden lg:block"></div>

          <img 
            src="/image4.jpg"
            alt="Philanthropy" 
            className="w-full h-full object-cover object-center transition duration-1000 ease-in-out" 
          />
        </div>

        {/* Text Content */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
            Beyond <br />
            <span className="text-luxury-gold italic">Business.</span>
          </h2>
          
          <div className="space-y-6 text-gray-300 font-sans leading-relaxed text-lg text-justify">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-[1px] w-12 bg-luxury-gold"></div>
              <p className="text-luxury-gold font-semibold uppercase tracking-wider text-xs">
                Philanthropy & Social Impact
              </p>
            </div>
            
            <p>
              Success is not merely defined by financial milestones, but by the lives touched and the legacies built. 
              A dedicated philanthropist, Dr. Samiksha actively empowers women through education, 
              entrepreneurship, mental wellness, and leadership development.
            </p>
            <p>
              Through the <strong>Borele Foundation</strong>, she champions initiatives that dismantle barriers for underrepresented communities. 
              Whether it is sponsoring educational programs or mentoring young women to break glass ceilings, her work is rooted in the belief 
              that when you empower a woman, you empower a nation.
            </p>
            <p>
              She is committed to ensuring inclusive and sustainable social progress, creating a ripple effect of positivity that transcends 
              corporate boardrooms and reaches the very heart of society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSegments;
