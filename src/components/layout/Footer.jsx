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
        <div className="py-24 px-6 text-center border-b border-gray-900">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
            "Where leadership meets purpose, <br />
            <span className="italic text-luxury-gold">transformation follows."</span>
          </h2>
          
          <Link 
            to="/connect" 
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 uppercase tracking-widest font-bold hover:bg-luxury-gold transition duration-300"
          >
            Connect Now <ArrowUpRight size={20} />
          </Link>
        </div>
      )}


      
      {/* Copyright */}
      <div className="text-center py-6 text-gray-600 text-xs uppercase tracking-widest border-t border-gray-900">
        &copy; {new Date().getFullYear()} Dr. Samiksha Borele. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;