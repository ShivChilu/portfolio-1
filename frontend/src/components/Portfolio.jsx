import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';
import ParticlesBackground from './ParticlesBackground';
import FloatingButtons from './FloatingButtons';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import AchievementsSection from './AchievementsSection';
import TrainingSection from './TrainingSection';
import ResumeSection from './ResumeSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Check if user has already seen the loading screen in this session
    const hasSeenLoading = sessionStorage.getItem('hasSeenLoading');
    
    if (hasSeenLoading) {
      setIsLoading(false);
      setShowContent(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem('hasSeenLoading', 'true');
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return (
    <div className="portfolio-container">
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      {/* Scroll Progress Bar */}
      {showContent && (
        <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-gray-800/20">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      )}
      
      {showContent && (
        <>
          <ParticlesBackground />
          <FloatingButtons />
          <Header />
          <main className="pt-0 relative z-10">
            <HeroSection />
            <AboutSection />
            <EducationSection />
            <SkillsSection />
            <ProjectsSection />
            <AchievementsSection />
            <TrainingSection />
            <ResumeSection />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Portfolio;