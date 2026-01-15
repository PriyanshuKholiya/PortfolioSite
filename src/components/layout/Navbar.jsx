import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png'; 

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
  ];

  const rightLinks = [
    { title: 'Accolades', path: '/accolades' },
    { title: 'Connect', path: '/connect' },
  ];

  const linkStyles = "text-gray-300 hover:text-luxury-gold transition duration-300 text-xs uppercase tracking-[0.15em] font-medium";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-luxury-black/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      
      {/* THE SUBTLE WHITE LINE */}
      <div className={`absolute bottom-0 left-0 w-full border-b border-white/10 ${isScrolled ? 'opacity-20' : 'opacity-100'} transition-opacity duration-500`}></div>

      <div className="container mx-auto px-6 md:px-12 relative flex justify-center items-center h-20"> {/* Increased height from h-16 to h-20 */}
        
        {/* 1. FAR LEFT: Larger Logo */}
        <div className="absolute left-0 md:left-6 top-1/2 -translate-y-1/2">
          <Link to="/">
            <img 
              src={logo} 
              alt="Logo" 
              // UPDATED: h-12 (scrolled) -> h-16 | h-10 (unscrolled) -> h-20
              className={`object-contain transition-all duration-500 ${isScrolled ? 'h-16' : 'h-24'}`} 
            />
          </Link>
        </div>

        {/* 2. CENTER GROUP: Links - Name - Links */}
        <div className="hidden md:flex items-center gap-12 lg:gap-20">
          
          {/* Left Links */}
          <div className="flex gap-10">
            {leftLinks.map((link, index) => (
              <Link key={index} to={link.path} className={linkStyles}>
                {link.title}
              </Link>
            ))}
          </div>

          {/* CENTER BRAND NAME */}
          <Link to="/" className="text-3xl lg:text-4xl font-serif text-white tracking-wide hover:text-luxury-gold transition duration-500 whitespace-nowrap px-4">
            Dr. Samiksha Borele
          </Link>

          {/* Right Links */}
          <div className="flex gap-10">
            {rightLinks.map((link, index) => (
              <Link key={index} to={link.path} className={linkStyles}>
                {link.title}
              </Link>
            ))}
          </div>

        </div>

        {/* 3. MOBILE: Menu Button */}
        <div className="absolute right-0 md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:text-luxury-gold transition p-2">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-luxury-black border-t border-gray-800 absolute w-full left-0 top-full shadow-2xl h-screen">
          <div className="flex flex-col items-center pt-20 space-y-8 font-sans">
             <Link to="/" className="text-3xl font-serif text-white mb-8">Dr. Samiksha Borele</Link>
             {[...leftLinks, ...rightLinks].map((link, index) => (
                <Link 
                  key={index} 
                  to={link.path} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-luxury-gold text-sm uppercase tracking-[0.2em]"
                >
                  {link.title}
                </Link>
              ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;