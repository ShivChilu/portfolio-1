import React, { useEffect, useState } from 'react';
import { ArrowDown, Code, Zap, Target, Users } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [typedText, setTypedText] = useState('');
  const { isDark } = useTheme();
  
  const roles = [
    'Full Stack Developer',
    'Problem Solver',
    'Tech Enthusiast',
    'Future Engineer'
  ];
  
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    // Typing animation
    const typeText = () => {
      const currentText = roles[currentRole];
      let index = 0;
      
      const typeInterval = setInterval(() => {
        if (index < currentText.length) {
          setTypedText(currentText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            // Clear text
            const clearTextInterval = setInterval(() => {
              setTypedText(prev => {
                if (prev.length <= 1) {
                  clearInterval(clearTextInterval);
                  setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
                  return '';
                }
                return prev.slice(0, -1);
              });
            }, 50);
          }, 2000);
        }
      }, 100);
    };

    const timeout = setTimeout(typeText, 1000);
    return () => clearTimeout(timeout);
  }, [currentRole, roles]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const statsData = [
    { 
      icon: <Code size={24} />, 
      value: '150+', 
      label: 'Problems Solved',
      description: 'LeetCode DSA challenges completed'
    },
    { 
      icon: <Target size={24} />, 
      value: '8.28', 
      label: 'CGPA',
      description: 'Academic performance excellence'
    },
    { 
      icon: <Zap size={24} />, 
      value: '2', 
      label: 'Major Projects',
      description: 'Production-ready applications'
    },
    { 
      icon: <Users size={24} />, 
      value: '2027', 
      label: 'Graduation',
      description: 'Ready for exciting opportunities'
    }
  ];

  return (
    <section id="hero" className="min-h-screen bg-pattern flex items-center justify-center relative overflow-hidden pt-24 px-4 md:px-0">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 ${isDark ? 'bg-blue-500/10' : 'bg-blue-500/20'} rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 ${isDark ? 'bg-purple-500/10' : 'bg-purple-500/20'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '1s' }}></div>
        <div className={`absolute top-3/4 left-1/2 w-48 h-48 ${isDark ? 'bg-cyan-500/10' : 'bg-cyan-500/20'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-6 md:space-y-8 ${mounted ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            <div className="space-y-3 md:space-y-4">
              <p className="caption text-blue-400 tracking-wider text-sm md:text-base">
                👋 Hello, I'm
              </p>
              
              <h1 className="heading-xl text-4xl md:text-5xl lg:text-6xl">
                Shiva <span className="gradient-text">Prasad</span>
              </h1>
              
              <div className="h-12 md:h-16 flex items-center overflow-hidden">
                <h2 className="heading-md text-xl md:text-2xl lg:text-3xl" style={{ color: 'var(--text-secondary)' }}>
                  {typedText}
                  <span className="inline-block w-0.5 md:w-1 h-6 md:h-8 bg-blue-400 ml-1 animate-pulse"></span>
                </h2>
              </div>
              
              <p className="body-lg max-w-2xl leading-relaxed text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>
                Computer Science student passionate about building 
                <span className="text-blue-400 font-medium"> scalable web applications</span> and 
                solving <span className="text-purple-400 font-medium">complex algorithmic challenges</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
              <button 
                className="btn-primary group text-sm md:text-base py-3 md:py-4"
                onClick={scrollToAbout}
              >
                Explore My Work
                <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform duration-300" />
              </button>
              
              <button 
                className="btn-secondary text-sm md:text-base py-3 md:py-4"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className={`${mounted ? 'animate-fadeInRight' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {statsData.map((stat, index) => (
                <div 
                  key={index}
                  className="glass-card hover-lift group text-center p-4 md:p-6"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center space-y-2 md:space-y-3">
                    <div className="p-2 md:p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400 group-hover:text-white transition-colors duration-300">
                      {stat.icon}
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-2xl md:text-3xl lg:text-4xl gradient-text font-bold">
                        {stat.value}
                      </div>
                      <div className="text-xs md:text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                        {stat.label}
                      </div>
                      <div className="caption text-xs hidden md:block" style={{ color: 'var(--text-secondary)' }}>
                        {stat.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Action Card */}
            <div className="mt-6 md:mt-8 glass-card text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-2 p-4 md:p-6" style={{ borderColor: 'var(--border-hover)' }}>
              <div className="space-y-2 md:space-y-3">
                <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-green-500/20 text-green-400 rounded-full text-xs md:text-sm font-medium">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Available for Internships
                </div>
                <p className="text-xs md:text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Actively seeking <span className="font-semibold text-blue-400">opportunities</span> 
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex">
          <button 
            onClick={scrollToAbout}
            className="flex flex-col items-center space-y-2 hover:text-white transition-colors duration-300 group"
            style={{ color: 'var(--text-secondary)' }}
          >
            <span className="caption text-xs">Scroll to explore</span>
            <div className="w-6 h-10 border-2 rounded-full flex justify-center group-hover:border-white/60 transition-colors duration-300" style={{ borderColor: 'var(--border-color)' }}>
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce group-hover:bg-white" style={{ backgroundColor: 'var(--text-secondary)' }}></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;