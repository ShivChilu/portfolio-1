import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon, Play, ArrowUpRight, Monitor } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { personalInfo } from '../data/portfolioData';

const Header = ({ startTour }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();
  const menuRef = useRef(null);
  const triggerRef = useRef(null);

  const navItems = [
    { label: 'Home', section: 'home' },
    { label: 'About', section: 'about' },
    { label: 'Skills', section: 'skills' },
    { label: 'Projects', section: 'projects' },
    { label: 'Experience', section: 'internship' },
    { label: 'Education', section: 'education' },
    { label: 'Certifications', section: 'certifications' },
    { label: 'Contact', section: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 180; // Offset for better detection
      
      for (const item of navItems) {
        const element = document.getElementById(item.section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust for sticky header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border-b border-zinc-200/50 dark:border-zinc-800/50 shadow-sm' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="text-lg font-bold tracking-tight cursor-pointer font-sans flex items-center gap-2 group text-zinc-900 dark:text-zinc-50"
          onClick={() => scrollToSection('home')}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-red-600 dark:bg-red-500 group-hover:scale-125 transition-transform duration-300"></span>
          <span className="font-semibold">{personalInfo.name}</span>
        </div>

        {/* Minimal Actions (Right) */}
        <div className="flex items-center gap-4">
          {/* Resume */}
          <a
            href={personalInfo.resumeUrl}
            className="flex items-center gap-1 text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white text-xs font-semibold transition-colors duration-200"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
