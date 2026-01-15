import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-luxury-black min-h-screen flex items-center overflow-hidden">
      {/* Background subtle texture or gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-luxury-black to-luxury-black opacity-70"></div>

      <div className="container mx-auto px-6 md:px-12 pt-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content - Text */}
          <div className="space-y-8 flex flex-col justify-center order-2 lg:order-1 animate-fade-in-up">
            {/* Top tags/roles */}
            <div className="space-y-2">
               <p className="text-luxury-gold text-sm md:text-base uppercase tracking-[0.2em] font-semibold font-sans">
                Global Entrepreneur | Visionary Leader | 2x TEDx Speaker
              </p>
               <p className="text-gray-400 text-xs md:text-sm uppercase tracking-[0.15em] font-sans">
               President - Borele World | CEO - Quantia Gravitas FZC LLC (UAE)
              </p>
            </div>
           

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-serif font-bold text-white leading-[1.1]">
              Dr. Samiksha <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold via-luxury-gold-light to-luxury-gold italic pr-2">
                Borele.
              </span>
            </h1>

             {/* Tagline */}
             <h2 className="text-xl md:text-2xl text-luxury-gold-light font-serif italic">
                Leading enterprises. Shaping mindsets. Creating global impact.
             </h2>

            {/* Power Statement */}
            <p className="text-gray-300 text-lg max-w-xl font-sans leading-relaxed opacity-90">
              Commanding the world of enterprise with clarity, courage, and conviction, 
              Dr. Samiksha Borele is a global entrepreneur redefining leadership across 
              business, mindset, and social impact.
            </p>
            
            {/* Functional Buttons */}
            <div className="pt-6 flex flex-wrap gap-6 font-sans font-semibold">
              <Link 
                to="/accolades" 
                className="bg-luxury-gold text-black px-8 py-4 uppercase tracking-wider hover:bg-white transition duration-300 flex items-center gap-2 group"
              >
                View Portfolio 
                <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
              </Link>
              
              <Link 
                to="/connect" 
                className="border-2 border-luxury-gold text-luxury-gold px-8 py-4 uppercase tracking-wider hover:bg-luxury-gold hover:text-black transition duration-300"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative h-full flex justify-center lg:justify-end order-1 lg:order-2 lg:mt-0 mt-10">
             {/* Decorative Gold Frame behind image */}
            <div className="absolute top-[10%] right-[-5%] w-[90%] h-[90%] border-[3px] border-luxury-gold/30 z-0 hidden lg:block"></div>
            
            {/* Image Container with styling */}
            <div className="relative z-10 w-full max-w-md lg:max-w-xl aspect-[3/4] overflow-hidden shadow-[0_20px_50px_rgba(212,175,55,0.15)]">
               {/* Hero Image */}
              <img 
                src="hero.png" 
                alt="Dr. Samiksha Borele" 
                className="w-full h-full object-cover object-top scale-105 hover:scale-100 transition-transform duration-700"
              />
               {/* Gradient Overlay */}
               <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-luxury-black/80 to-transparent"></div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Hero;