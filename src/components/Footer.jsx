import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // or hardcode 2026 as per request, but dynamic is better. Will use 2026 if needed, or just let it be current. I'll use 2026 to match prompt precisely if I hardcode, but new Date() is standard. Let's use 2026.

  return (
    <footer className="bg-black/40 border-t border-glass-border pt-16 pb-8 px-6 md:px-12 relative z-10">
      <div className="container mx-auto flex flex-col items-center justify-center">
        
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="cursor-pointer mb-8"
        >
          <h2 className="text-2xl font-bold font-poppins text-white">
            Chakraveni<span className="text-primary">.</span>
          </h2>
        </Link>

        <div className="text-center space-y-2 mb-8">
          <p className="text-gray-400 font-medium text-lg">Designed and Developed by</p>
          <p className="text-white text-xl font-bold tracking-wide">Katari Chakraveni</p>
          <p className="text-primary font-medium">Python Full Stack Developer</p>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-glass-border to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 text-sm text-gray-500">
          <p>&copy; 2026 All Rights Reserved.</p>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 text-gray-400 hover:text-white transition-all transform hover:-translate-y-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
