import React, { useEffect, useState } from 'react';
import { ArrowDown, Code, Zap, Target, Users } from 'lucide-react';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [typedText, setTypedText] = useState('');
  
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
            const clearInterval = setInterval(() => {
              setTypedText(prev => prev.slice(0, -1));
              if (typedText === '') {
                clearInterval(clearInterval);
                setCurrentRole((prev) => (prev + 1) % roles.length);
              }
            }, 50);
          }, 2000);
        }
      }, 100);
    };

    const timeout = setTimeout(typeText, 1000);
    return () => clearTimeout(timeout);
  }, [currentRole]);

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
      value: '8.41', 
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
    <section id="hero" className="min-h-screen bg-pattern flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${mounted ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            <div className="space-y-4">
              <p className="caption text-blue-400 tracking-wider">
                👋 Hello, I'm
              </p>
              
              <h1 className="heading-xl text-white">
                Shiva <span className="gradient-text">Prasad</span>
              </h1>
              
              <div className="h-16 flex items-center">
                <h2 className="heading-md text-white/80">
                  {typedText}
                  <span className="inline-block w-1 h-8 bg-blue-400 ml-1 animate-pulse"></span>
                </h2>
              </div>
              
              <p className="body-lg text-white/70 max-w-2xl leading-relaxed">
                Computer Science student passionate about building 
                <span className="text-blue-400 font-medium"> scalable web applications</span> and 
                solving <span className="text-purple-400 font-medium">complex algorithmic challenges</span>. 
                Currently seeking Summer 2026 internship opportunities to make a real impact.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                className="btn-primary group"
                onClick={scrollToAbout}
              >
                Explore My Work
                <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform duration-300" />
              </button>
              
              <button 
                className="btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className={`${mounted ? 'animate-fadeInRight' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-2 gap-6">
              {statsData.map((stat, index) => (
                <div 
                  key={index}
                  className="glass-card hover-lift group text-center"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400 group-hover:text-white transition-colors duration-300">
                      {stat.icon}
                    </div>
                    
                    <div className="space-y-1">
                      <div className="heading-md gradient-text font-bold">
                        {stat.value}
                      </div>
                      <div className="body-sm font-medium text-white">
                        {stat.label}
                      </div>
                      <div className="caption text-white/60">
                        {stat.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Action Card */}
            <div className="mt-8 glass-card text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-2 border-white/20">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Available for Internships
                </div>
                <p className="body-sm text-white/80">
                  Actively seeking <span className="font-semibold text-blue-400">Summer 2026</span> opportunities
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToAbout}
            className="flex flex-col items-center space-y-2 text-white/60 hover:text-white transition-colors duration-300 group"
          >
            <span className="caption">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center group-hover:border-white/60 transition-colors duration-300">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce group-hover:bg-white"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;