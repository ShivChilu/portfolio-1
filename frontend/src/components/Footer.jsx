import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200/50 dark:border-zinc-800/50 transition-colors duration-300 relative">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Copyright */}
        <div className="text-zinc-500 dark:text-zinc-400 text-xs text-center md:text-left leading-relaxed">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="mt-1 text-[10px] text-zinc-400">Handcrafted in Hyderabad, India.</p>
        </div>

        {/* Right Side: Social & Back to Top */}
        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noreferrer" 
              className="text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4.5 h-4.5" />
            </a>
          </div>

          {/* Floating or inline back to top */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-100 hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
