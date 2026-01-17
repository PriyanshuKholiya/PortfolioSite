import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  
  // Check if the current page is the '/connect' page
  const isConnectPage = location.pathname === '/connect';

  return (
    <footer className="bg-luxury-black border-t border-gray-900">
      
      {/* Conditionally render the "Call to Impact" section ONLY if NOT on Connect page */}
      {!isConnectPage && (
        // UPDATED: Reduced padding (py-24 -> py-12)
        <div className="py-12 px-6 text-center border-b border-gray-900">
          
          {/* UPDATED: Reduced text size (text-5xl -> text-3xl/4xl) and margin (mb-8 -> mb-6) */}
          <h2 className="text-2xl md:text-4xl font-serif text-white mb-6 leading-tight">
            "Where leadership meets purpose, <br />
            <span className="italic text-luxury-gold">transformation follows."</span>
          </h2>
          
          {/* UPDATED: Reduced button padding (px-8 py-4 -> px-6 py-3) and font size */}
          <Link 
            to="/connect" 
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 uppercase tracking-widest text-xs font-bold hover:bg-luxury-gold transition duration-300"
          >
            Connect Now <ArrowUpRight size={18} />
          </Link>
        </div>
      )}

      {/* Copyright */}
      {/* UPDATED: Reduced padding (py-6 -> py-4) and text size */}
      <div className="text-center py-4 text-gray-600 text-[10px] uppercase tracking-widest border-t border-gray-900">
        &copy; {new Date().getFullYear()} Dr. Samiksha Borele. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;