import React from 'react';
import { Download, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section" style={{ backgroundColor: 'var(--bg-page)', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-40">
          {/* Content */}
          <div className="flex-1">
            <div className="mb-20">
              <p className="caption mb-8" style={{ color: 'var(--text-secondary)' }}>
                Computer Science Student
              </p>
              <h1 className="brand-display mb-24">
                Shiva<br />Prasad
              </h1>
              <p className="body-large mb-32" style={{ color: 'var(--text-primary)', maxWidth: '600px' }}>
                Aspiring Software Engineer graduating in 2027, seeking Summer 2026 internship opportunities. 
                Passionate about building scalable full-stack applications and solving complex algorithmic challenges.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-20">
                <button className="btn-primary">
                  <Download size={20} className="mr-8" />
                  Download Resume
                </button>
                <button 
                  className="btn-secondary"
                  onClick={scrollToAbout}
                >
                  View My Work
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div className="flex-1 lg:flex-none">
            <div className="grid grid-cols-2 gap-40 max-w-md">
              <div className="text-center">
                <div className="heading-2 mb-8">150+</div>
                <p className="body-small">DSA Problems Solved</p>
              </div>
              <div className="text-center">
                <div className="heading-2 mb-8">8.41</div>
                <p className="body-small">CGPA</p>
              </div>
              <div className="text-center">
                <div className="heading-2 mb-8">2</div>
                <p className="body-small">Major Projects</p>
              </div>
              <div className="text-center">
                <div className="heading-2 mb-8">2027</div>
                <p className="body-small">Graduation Year</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-96">
          <button 
            onClick={scrollToAbout}
            className="animate-bounce p-20"
            style={{ color: 'var(--brand-primary)' }}
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;