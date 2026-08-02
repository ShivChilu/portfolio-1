import React, { useState, useEffect } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import InternshipSection from './InternshipSection';
import EducationSection from './EducationSection';
import CertificationsSection from './CertificationsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import WebsiteTour from './WebsiteTour';
import FloatingDock from './FloatingDock';
import AIAssistant from './AIAssistant';
import { useTheme } from '../contexts/ThemeContext';
import { useKeyboardShortcuts } from '../hooks/useKeyboardShortcuts';

const Portfolio = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeTourStep, setActiveTourStep] = useState(0);
  const [isTourActive, setIsTourActive] = useState(false);
  const { toggleTheme } = useTheme();

  // Scroll Progress logic
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-start Website Tour on first visit
  useEffect(() => {
    const hasCompletedTour = localStorage.getItem('hasCompletedTour');
    if (hasCompletedTour !== 'true') {
      setIsTourActive(true);
    }
  }, []);

  // Keyboard Shortcuts Hook integration
  useKeyboardShortcuts({
    onToggleTheme: toggleTheme,
    onFocusSearch: () => {
      // Focus skills search input
      const searchInput = document.querySelector('#skills input');
      searchInput?.focus();
    }
  });

  const handleStartTour = () => {
    setActiveTourStep(0);
    setIsTourActive(true);
  };

  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 selection:bg-purple-500/20">
      
      
      {/* Website Tour Guide Overlay */}
      <WebsiteTour 
        activeTourStep={activeTourStep}
        setActiveTourStep={setActiveTourStep}
        isTourActive={isTourActive}
        setIsTourActive={setIsTourActive}
      />

      {/* macOS Style Navigation Floating Dock */}
      <FloatingDock startTour={handleStartTour} />

      {/* AI Recruiter Assistant Sparkles Interface */}
      <AIAssistant />

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-zinc-200 dark:bg-zinc-800/30">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header */}
      <Header startTour={handleStartTour} />

      {/* Main Sections */}
      <main className="relative">
        <HeroSection />
        <EducationSection />
        <SkillsSection />
        <InternshipSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Portfolio;