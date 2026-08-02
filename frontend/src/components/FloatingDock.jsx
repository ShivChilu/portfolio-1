import React, { useState, useEffect, useRef } from 'react';
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

const HomeIcon = () => (
  <svg className="w-5 h-5 transition-transform duration-350 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const HamburgerIcon = () => (
  <svg className="w-5 h-5 transition-transform duration-350" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

const FloatingDock = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Touch Gesture tracking references
  const startYRef = useRef(0);
  const startDistRef = useRef(0);
  const isPinchingRef = useRef(false);
  const dockRef = useRef(null);

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

    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    checkMobile();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Global Outside Click listener to collapse dock on screen touch
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isMobile && !isCollapsed && dockRef.current && !dockRef.current.contains(e.target)) {
        setIsCollapsed(true);
      }
    };

    document.addEventListener('touchstart', handleOutsideClick);
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('touchstart', handleOutsideClick);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMobile, isCollapsed]);

  const dockItems = [
    {
      icon: <HomeIcon />,
      label: "Home",
      target: "home",
      action: () => scrollToSection('home')
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
    },
    {
      icon: <ResumeIcon />,
      label: "Resume",
      target: "resume",
      action: () => {
        window.open(personalInfo.resumeUrl, "_blank");
      }
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

  // Touch handlers for Swiping and Pinching gestures
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      startYRef.current = e.touches[0].clientY;
    } else if (e.touches.length === 2) {
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      startDistRef.current = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
      isPinchingRef.current = true;
    }
  };

  const handleTouchMove = (e) => {
    if (isPinchingRef.current && e.touches.length === 2) {
      e.preventDefault(); // Stop window scrolling
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      const currentDist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
      
      // If fingers pinch inward by more than 40px, collapse
      if (currentDist < startDistRef.current - 45) {
        setIsCollapsed(true);
        isPinchingRef.current = false;
      }
    }
  };

  const handleTouchEnd = (e) => {
    isPinchingRef.current = false;
    if (e.changedTouches.length === 1 && startYRef.current !== 0) {
      const deltaY = e.changedTouches[0].clientY - startYRef.current;
      // Swipe down threshold: 50px
      if (deltaY > 55) {
        setIsCollapsed(true);
      }
      startYRef.current = 0;
    }
  };

  return (
    <div 
      ref={dockRef}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[99] flex items-center justify-center pointer-events-none w-full px-4 md:px-0"
    >
      {isCollapsed && isMobile ? (
        /* Minimized Circular Button on Mobile (with Hamburger Icon) */
        <button
          onClick={() => setIsCollapsed(false)}
          className="w-14 h-14 rounded-full bg-red-600 border border-red-500/25 shadow-[0_0_20px_rgba(220,38,38,0.35)] pointer-events-auto flex flex-col items-center justify-center text-white cursor-pointer active:scale-95 transition-all duration-300 animate-pulse hover:scale-105 active:shadow-inner"
          aria-label="Expand Navigation Dock"
        >
          <HamburgerIcon />
        </button>
      ) : (
        /* Expanded Dynamic Island Dock (or standard desktop dock) */
        <div 
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onDoubleClick={() => isMobile && setIsCollapsed(true)}
          style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
          className={`flex items-end gap-1.5 px-3 py-2.5 rounded-[1.5rem] border border-red-500/30 bg-red-600/95 dark:bg-red-700/95 backdrop-blur-2xl shadow-xl pointer-events-auto select-none cursor-pointer transition-all duration-500 ${
            isMobile ? 'w-[92vw] justify-around max-w-[400px]' : ''
          }`}
          onMouseLeave={() => setHoveredIdx(null)}
        >
          {dockItems.map((item, idx) => {
            const isActive = activeSection === item.target;
            
            // macOS style scale physics (Desktop hover effect only)
            let scaleClass = "scale-100";
            if (!isMobile) {
              if (hoveredIdx === idx) {
                scaleClass = "scale-[1.12] -translate-y-1.5";
              } else if (hoveredIdx !== null && Math.abs(hoveredIdx - idx) === 1) {
                scaleClass = "scale-[1.05] -translate-y-0.5";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => {
                  item.action();
                  if (isMobile) {
                    setIsCollapsed(true); // Minimize on navigate
                  }
                }}
                onMouseEnter={() => !isMobile && setHoveredIdx(idx)}
                className={`relative flex flex-col items-center justify-center ${isMobile ? 'flex-1 py-1' : 'w-14 py-1.5'} rounded-xl transition-all duration-250 cursor-pointer group origin-bottom ${scaleClass} ${
                  isActive 
                    ? 'text-white bg-white/15' 
                    : 'text-red-100/80 hover:text-white'
                }`}
                aria-label={item.label}
              >
                {/* SVG Icon */}
                {item.icon}

                {/* Text Label */}
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
