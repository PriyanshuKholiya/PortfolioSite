import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    // 1. Outer Section: Full dynamic height (100dvh)
    <section className="relative bg-luxury-black h-[100dvh] w-full overflow-hidden flex flex-col">
      
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-luxury-black to-luxury-black opacity-70"></div>

      {/* 2. Main Container: Adds padding-top (pt-24) to clear the Navbar */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex-1 flex flex-col justify-center pt-24 lg:pt-28">
        
        {/* Grid: Aligns content vertically in the center of the remaining space */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center h-full max-h-[85vh]">
          
          {/* LEFT CONTENT: TEXT */}
          <div className="space-y-4 lg:space-y-6 flex flex-col justify-center order-2 lg:order-1 animate-fade-in-up">
            
            {/* Top Tags */}
            <div className="space-y-1 lg:space-y-2">
               <p className="text-luxury-gold text-xs lg:text-sm uppercase tracking-[0.2em] font-semibold font-sans">
                Global Entrepreneur | Visionary Leader | 2x TEDx Speaker
              </p>
               <p className="text-gray-400 text-[10px] lg:text-xs uppercase tracking-[0.15em] font-sans">
               President - Borele World | CEO - Quantia Gravitas FZC LLC (UAE)
              </p>
            </div>
           
            {/* Main Headline - Responsive Text Sizes */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-serif font-bold text-white leading-[1.1]">
              Dr. Samiksha <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold via-luxury-gold-light to-luxury-gold italic pr-2">
                Borele.
              </span>
            </h1>

             {/* Tagline */}
             <h2 className="text-lg lg:text-xl 2xl:text-2xl text-luxury-gold-light font-serif italic">
                Leading enterprises. Shaping mindsets. Creating global impact.
             </h2>

            {/* Power Statement */}
            <p className="text-gray-300 text-sm lg:text-base 2xl:text-lg max-w-lg font-sans leading-relaxed opacity-90">
              Commanding the world of enterprise with clarity, courage, and conviction, 
              Dr. Samiksha Borele is a global entrepreneur redefining leadership across 
              business, mindset, and social impact.
            </p>
            
            {/* Buttons */}
            <div className="pt-4 lg:pt-6 flex flex-wrap gap-4 font-sans font-semibold">
              <Link 
                to="/accolades" 
                className="bg-[#4169E1] text-white px-6 py-3 lg:px-8 lg:py-4 text-xs lg:text-sm uppercase tracking-wider hover:bg-white hover:text-[#4169E1] transition duration-300 flex items-center gap-2 group"
              >
                View Portfolio 
                <ArrowRight className="group-hover:translate-x-1 transition" size={18} />
              </Link>
              
              <Link 
                to="/connect" 
                className="border-2 border-[#4169E1] text-[#4169E1] px-6 py-3 lg:px-8 lg:py-4 text-xs lg:text-sm uppercase tracking-wider hover:bg-[#4169E1] hover:text-white transition duration-300"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* RIGHT CONTENT: IMAGE */}
          {/* Constrained Height: Prevents image from pushing layout too tall */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 h-full max-h-[50vh] lg:max-h-[75vh] w-full items-center">
             
            {/* Decorative Gold Frame */}
            <div className="absolute top-[5%] right-[-10px] h-[90%] w-auto aspect-[4/5] border-[3px] border-luxury-gold/30 z-0 hidden lg:block"></div>
            
            {/* Image Container */}
            <div className="relative z-10 h-full w-auto aspect-[4/5] shadow-[0_20px_50px_rgba(212,175,55,0.15)]">
              <img 
                src="hero.jpeg" 
                alt="Dr. Samiksha Borele" 
                className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-700"
              />
               <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-luxury-black/80 to-transparent"></div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Hero;