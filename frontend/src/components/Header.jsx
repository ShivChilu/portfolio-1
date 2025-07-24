import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'About', section: 'about' },
    { label: 'Experience', section: 'education' },
    { label: 'Skills', section: 'skills' },
    { label: 'Projects', section: 'projects' },
    { label: 'Contact', section: 'contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md bg-black/20 border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <nav className="flex justify-between items-center py-6">
          {/* Logo */}
          <div 
            className="text-2xl font-bold cursor-pointer hover:text-blue-400 transition-colors duration-300 font-['Space_Grotesk']"
            onClick={() => scrollToSection('hero')}
          >
            <span className="gradient-text">Shiva Prasad</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="relative text-white/80 hover:text-white transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/5 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="theme-toggle group"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              ) : (
                <Moon size={20} className="group-hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 bg-black/20 backdrop-blur-md rounded-lg border border-white/10 mt-2">
            {navItems.map((item, index) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="block w-full text-left px-6 py-3 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </button>
            ))}
            <div className="px-6 pt-4 flex justify-center">
              <button 
                onClick={toggleTheme}
                className="theme-toggle group"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                ) : (
                  <Moon size={20} className="group-hover:-rotate-12 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;