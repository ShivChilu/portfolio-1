import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

// Custom high-fidelity Apple-style 3D glossy SVGs matching user mockup
const ResumeIcon = () => (
  <svg className="w-10 h-10 drop-shadow-md select-none pointer-events-none" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="16" fill="url(#resumeBg)" />
    <path d="M18 14C18 12.8954 18.8954 12 20 12H38L46 20V50C46 51.1046 45.1046 52 44 52H20C18.8954 52 18 51.1046 18 50V14Z" fill="white" fillOpacity="0.9" />
    <path d="M38 12V20H46L38 12Z" fill="#D8B4FE" />
    <rect x="24" y="26" width="16" height="3" rx="1.5" fill="#A78BFA" />
    <rect x="24" y="33" width="16" height="3" rx="1.5" fill="#C084FC" />
    <rect x="24" y="40" width="10" height="3" rx="1.5" fill="#E9D5FF" />
    <defs>
      <linearGradient id="resumeBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F5F3FF" />
        <stop offset="1" stopColor="#DDD6FE" />
      </linearGradient>
    </defs>
  </svg>
);

const RobotIcon = () => (
  <svg className="w-10 h-10 drop-shadow-md select-none pointer-events-none" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="16" fill="url(#robotBg)" />
    <rect x="14" y="28" width="4" height="10" rx="2" fill="#FDA4AF" />
    <circle cx="16" cy="26" r="3" fill="#E11D48" />
    <rect x="46" y="28" width="4" height="10" rx="2" fill="#FDA4AF" />
    <circle cx="48" cy="26" r="3" fill="#E11D48" />
    <rect x="20" y="20" width="24" height="26" rx="8" fill="url(#robotHead)" stroke="#4A5568" strokeWidth="1.5" />
    <rect x="23" y="25" width="18" height="11" rx="4" fill="#1A202C" />
    <circle cx="28" cy="30" r="2.5" fill="#60A5FA" />
    <circle cx="36" cy="30" r="2.5" fill="#60A5FA" />
    <rect x="28" y="39" width="8" height="2.5" rx="1.25" fill="#E2E8F0" />
    <defs>
      <linearGradient id="robotBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFF1F2" />
        <stop offset="1" stopColor="#FFE4E6" />
      </linearGradient>
      <linearGradient id="robotHead" x1="20" y1="20" x2="44" y2="46" gradientUnits="userSpaceOnUse">
        <stop stopColor="#CBD5E0" />
        <stop offset="1" stopColor="#718096" />
      </linearGradient>
    </defs>
  </svg>
);

const LaptopIcon = () => (
  <svg className="w-10 h-10 drop-shadow-md select-none pointer-events-none" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="16" fill="url(#laptopBg)" />
    <rect x="18" y="18" width="28" height="19" rx="3" fill="#4B5563" stroke="#1F2937" strokeWidth="1.5" />
    <rect x="20" y="20" width="24" height="15" rx="1" fill="#38BDF8" />
    <path d="M20 20L34 35H20V20Z" fill="white" fillOpacity="0.15" />
    <path d="M12 40C12 38.8954 12.8954 38 14 38H50C51.1046 38 52 38.8954 52 40V43C52 44.1046 51.1046 45 50 45H14C12.8954 45 12 44.1046 12 43V40Z" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1" />
    <rect x="26" y="40" width="12" height="2" rx="1" fill="#9CA3AF" />
    <defs>
      <linearGradient id="laptopBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F0F9FF" />
        <stop offset="1" stopColor="#E0F2FE" />
      </linearGradient>
    </defs>
  </svg>
);

const CraneIcon = () => (
  <svg className="w-10 h-10 drop-shadow-md select-none pointer-events-none" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="16" fill="url(#craneBg)" />
    <rect x="23" y="20" width="3" height="32" fill="#F59E0B" />
    <line x1="23" y1="25" x2="26" y2="29" stroke="#D97706" strokeWidth="1.5" />
    <line x1="23" y1="33" x2="26" y2="37" stroke="#D97706" strokeWidth="1.5" />
    <line x1="23" y1="41" x2="26" y2="45" stroke="#D97706" strokeWidth="1.5" />
    <rect x="14" y="17" width="36" height="3" fill="#D97706" rx="1" />
    <path d="M24 17L38 12M24 12V17" stroke="#718096" strokeWidth="1" />
    <rect x="20" y="14" width="5" height="5" rx="1" fill="#4B5563" />
    <line x1="42" y1="20" x2="42" y2="30" stroke="#4B5563" strokeWidth="1.2" />
    <rect x="36" y="30" width="12" height="6" rx="1.5" fill="#EF4444" />
    <rect x="38" y="32" width="8" height="2" rx="0.5" fill="#B91C1C" />
    <defs>
      <linearGradient id="craneBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FEF3C7" />
        <stop offset="1" stopColor="#FDE68A" />
      </linearGradient>
    </defs>
  </svg>
);

const StatsIcon = () => (
  <svg className="w-10 h-10 drop-shadow-md select-none pointer-events-none" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="16" fill="url(#statsBg)" />
    <rect x="18" y="28" width="7" height="22" rx="3.5" fill="url(#bar1)" />
    <rect x="28.5" y="35" width="7" height="15" rx="3.5" fill="url(#bar2)" />
    <rect x="39" y="18" width="7" height="32" rx="3.5" fill="url(#bar3)" />
    <defs>
      <linearGradient id="statsBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F3F4F6" />
        <stop offset="1" stopColor="#E5E7EB" />
      </linearGradient>
      <linearGradient id="bar1" x1="18" y1="28" x2="25" y2="50" gradientUnits="userSpaceOnUse">
        <stop stopColor="#34D399" />
        <stop offset="1" stopColor="#10B981" />
      </linearGradient>
      <linearGradient id="bar2" x1="28.5" y1="35" x2="35.5" y2="50" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F472B6" />
        <stop offset="1" stopColor="#EC4899" />
      </linearGradient>
      <linearGradient id="bar3" x1="39" y1="18" x2="46" y2="50" gradientUnits="userSpaceOnUse">
        <stop stopColor="#60A5FA" />
        <stop offset="1" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
  </svg>
);

const ContactIcon = () => (
  <svg className="w-10 h-10 drop-shadow-md select-none pointer-events-none" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="16" fill="url(#contactBg)" />
    <rect x="14" y="20" width="36" height="24" rx="4" fill="url(#envelope)" stroke="#7C3AED" strokeWidth="1" />
    <path d="M14 20L32 32L50 20" stroke="#6D28D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="32" cy="30" r="8" fill="#3B82F6" stroke="white" strokeWidth="1.5" />
    <text x="32" y="33" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">@</text>
    <defs>
      <linearGradient id="contactBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F3E8FF" />
        <stop offset="1" stopColor="#E9D5FF" />
      </linearGradient>
      <linearGradient id="envelope" x1="14" y1="20" x2="50" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#C084FC" />
        <stop offset="1" stopColor="#A855F7" />
      </linearGradient>
    </defs>
  </svg>
);

const FloatingDock = ({ startTour }) => {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const dockItems = [
    {
      icon: <ResumeIcon />,
      label: "Resume",
      action: () => {
        window.open(personalInfo.resumeUrl, "_blank");
      }
    },
    {
      icon: <LaptopIcon />,
      label: "GitHub",
      action: () => {
        window.open(personalInfo.github, "_blank");
      }
    },
    {
      icon: <CraneIcon />,
      label: "Projects",
      action: () => scrollToSection('projects')
    },
    {
      icon: <StatsIcon />,
      label: "Stats & Skills",
      action: () => scrollToSection('skills')
    },
    {
      icon: <ContactIcon />,
      label: "Contact",
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
          className="w-6 h-6 rounded-full bg-red-600 dark:bg-red-500 border border-white/20 dark:border-zinc-800/50 shadow-xl pointer-events-auto hover:scale-125 transition-all duration-300 animate-pulse flex items-center justify-center cursor-pointer group"
          title="Click to expand dock menu"
          aria-label="Expand menu"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-white opacity-85 group-hover:scale-110 transition-transform"></span>
        </button>
      ) : (
        <div 
          onDoubleClick={() => setIsCollapsed(true)}
          title="Double-click to collapse"
          className="flex items-end gap-3 px-4 py-3 rounded-[1.75rem] border border-red-500/30 bg-red-600/90 dark:bg-red-700/80 backdrop-blur-2xl shadow-xl pointer-events-auto transition-all duration-300 select-none cursor-pointer"
          onMouseLeave={() => setHoveredIdx(null)}
        >
          {dockItems.map((item, idx) => {
            let scaleClass = "scale-100";
            if (hoveredIdx === idx) {
              scaleClass = "scale-[1.28] -translate-y-2.5";
            } else if (hoveredIdx !== null && Math.abs(hoveredIdx - idx) === 1) {
              scaleClass = "scale-[1.12] -translate-y-1";
            }

            return (
              <button
                key={idx}
                onClick={item.action}
                onMouseEnter={() => setHoveredIdx(idx)}
                className={`relative flex flex-col items-center justify-center p-1 rounded-2xl transition-all duration-200 cursor-pointer group origin-bottom ${scaleClass}`}
                aria-label={item.label}
              >
                {/* Custom SVG Icon */}
                {item.icon}

                {/* Hover Tooltip label */}
                <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 text-[10px] font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FloatingDock;
