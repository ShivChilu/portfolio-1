import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

// Sleek, minimal line-art SVGs (Stripe/Linear style)
const ResumeIcon = () => (
  <svg className="w-5 h-5 transition-transform duration-350 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

const LaptopIcon = () => (
  <svg className="w-5 h-5 transition-transform duration-350 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
    <polyline points="9 8 7 10 9 12" />
    <polyline points="15 8 17 10 15 12" />
  </svg>
);

const ProjectsIcon = () => (
  <svg className="w-5 h-5 transition-transform duration-350 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const StatsIcon = () => (
  <svg className="w-5 h-5 transition-transform duration-350 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const ContactIcon = () => (
  <svg className="w-5 h-5 transition-transform duration-350 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const FloatingDock = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      const sections = ['home', 'education', 'skills', 'internship', 'projects', 'certifications', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dockItems = [
    {
      icon: <ResumeIcon />,
      label: "CV",
      target: "resume",
      action: () => {
        window.open(personalInfo.resumeUrl, "_blank");
      }
    },
    {
      icon: <LaptopIcon />,
      label: "GitHub",
      target: "github",
      action: () => {
        window.open(personalInfo.github, "_blank");
      }
    },
    {
      icon: <ProjectsIcon />,
      label: "Projects",
      target: "projects",
      action: () => scrollToSection('projects')
    },
    {
      icon: <StatsIcon />,
      label: "Skills",
      target: "skills",
      action: () => scrollToSection('skills')
    },
    {
      icon: <ContactIcon />,
      label: "Contact",
      target: "contact",
      action: () => scrollToSection('contact')
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[99] flex items-center justify-center pointer-events-none">
      {isCollapsed ? (
        <button
          onClick={() => setIsCollapsed(false)}
          className="w-8 h-8 rounded-full bg-red-600 dark:bg-red-500 border border-red-500/20 shadow-lg pointer-events-auto hover:scale-110 transition-all duration-300 animate-pulse flex items-center justify-center cursor-pointer group"
          title="Click to expand dock menu"
          aria-label="Expand menu"
        >
          <span className="w-3 h-3 rounded-full bg-white opacity-85 group-hover:scale-110 transition-transform"></span>
        </button>
      ) : (
        <div 
          onDoubleClick={() => setIsCollapsed(true)}
          title="Double-click to collapse"
          className="flex items-end gap-1.5 px-3.5 py-2.5 rounded-[1.5rem] border border-red-500/30 bg-red-600/95 dark:bg-red-700/95 backdrop-blur-2xl shadow-xl pointer-events-auto transition-all duration-300 select-none cursor-pointer"
          onMouseLeave={() => setHoveredIdx(null)}
        >
          {dockItems.map((item, idx) => {
            const isActive = activeSection === item.target;
            
            // macOS scale physics simulation
            let scaleClass = "scale-100";
            if (hoveredIdx === idx) {
              scaleClass = "scale-[1.12] -translate-y-1.5";
            } else if (hoveredIdx !== null && Math.abs(hoveredIdx - idx) === 1) {
              scaleClass = "scale-[1.05] -translate-y-0.5";
            }

            return (
              <button
                key={idx}
                onClick={item.action}
                onMouseEnter={() => setHoveredIdx(idx)}
                className={`relative flex flex-col items-center justify-center w-14 py-1.5 rounded-xl transition-all duration-200 cursor-pointer group origin-bottom ${scaleClass} ${
                  isActive 
                    ? 'text-white bg-white/15' 
                    : 'text-red-100/80 hover:text-white'
                }`}
                aria-label={item.label}
              >
                {/* SVG Icon */}
                {item.icon}

                {/* Permanent Text Label */}
                <span className="mt-1 text-[8px] font-bold tracking-wider uppercase font-sans select-none leading-none opacity-90 group-hover:opacity-100 transition-opacity">
                  {item.label}
                </span>

                {/* Active Indicator Dot */}
                {isActive && (
                  <span className="absolute bottom-0.5 w-1 h-1 rounded-full bg-white"></span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FloatingDock;
