import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import AchievementsSection from './AchievementsSection';
import TrainingSection from './TrainingSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <TrainingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;