import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react';

const TOUR_STEPS = [
  {
    targetId: 'home',
    title: 'Hero Section',
    description: 'Welcome! This is where you can view my professional introduction, primary tech stacks, and career trajectory.',
  },
  {
    targetId: 'about',
    title: 'About Me',
    description: 'Learn about my journey, current focus, and what sets my engineering approach apart.',
  },
  {
    targetId: 'skills',
    title: 'Interactive Skills Console',
    description: 'Search or filter my technical competencies across categories like Frontend, Backend, Databases, and Concepts.',
  },
  {
    targetId: 'projects',
    title: 'Selected Projects',
    description: 'Explore my production-ready developments, featuring interactive category filters, technologies used, and code logs.',
  },
  {
    targetId: 'internship',
    title: 'Professional Experience',
    description: 'Check out my professional work history and previous internship timelines.',
  },
  {
    targetId: 'education',
    title: 'Academic Background',
    description: 'My degree path, key coursework, and academic credentials at Lovely Professional University.',
  },
  {
    targetId: 'certifications',
    title: 'Professional Certifications',
    description: 'Industry credentials from organizations like NPTEL (IIT) and IBM.',
  },
  {
    targetId: 'contact',
    title: 'Contact Form',
    description: 'Have a project in mind or looking to hire? Drop a message here, or copy my email with a single click.',
  },
];

const WebsiteTour = ({ activeTourStep, setActiveTourStep, isTourActive, setIsTourActive }) => {
  const currentStep = TOUR_STEPS[activeTourStep];

  useEffect(() => {
    if (!isTourActive) return;

    // Scroll to the active target element
    const element = document.getElementById(currentStep.targetId);
    if (element) {
      // Highlight the targeted section
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Temporarily add a highlight border/shadow effect
      element.classList.add('ring-2', 'ring-purple-500/50', 'transition-all', 'duration-500');
      
      return () => {
        element.classList.remove('ring-2', 'ring-purple-500/50');
      };
    }
  }, [activeTourStep, isTourActive, currentStep]);

  if (!isTourActive) return null;

  const handleNext = () => {
    if (activeTourStep < TOUR_STEPS.length - 1) {
      setActiveTourStep(activeTourStep + 1);
    } else {
      handleFinish();
    }
  };

  const handlePrev = () => {
    if (activeTourStep > 0) {
      setActiveTourStep(activeTourStep - 1);
    }
  };

  const handleFinish = () => {
    setIsTourActive(false);
    localStorage.setItem('hasCompletedTour', 'true');
  };

  const handleSkip = () => {
    setIsTourActive(false);
    localStorage.setItem('hasCompletedTour', 'true');
  };

  return (
    <div className="fixed bottom-6 right-6 md:right-8 max-w-sm w-[calc(100vw-3rem)] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl p-6 z-[100] animate-in fade-in slide-in-from-bottom-5 duration-300">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold text-sm">
          <Sparkles className="w-4 h-4" />
          <span>Tour Guide • {activeTourStep + 1} of {TOUR_STEPS.length}</span>
        </div>
        <button 
          onClick={handleSkip}
          className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors p-1 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
          aria-label="Skip Tour"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Content */}
      <div className="space-y-2 mb-6">
        <h4 className="font-bold text-lg text-zinc-950 dark:text-zinc-50">{currentStep.title}</h4>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{currentStep.description}</p>
      </div>

      {/* Progress Line */}
      <div className="h-1 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden mb-5">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
          style={{ width: `${((activeTourStep + 1) / TOUR_STEPS.length) * 100}%` }}
        />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <button
          onClick={handleSkip}
          className="text-xs font-medium text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
        >
          Skip Tour
        </button>
        <div className="flex items-center gap-2">
          {activeTourStep > 0 && (
            <button
              onClick={handlePrev}
              className="flex items-center gap-1 px-3 py-1.5 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg text-xs font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5" /> Back
            </button>
          )}
          <button
            onClick={handleNext}
            className="flex items-center gap-1 px-4 py-1.5 bg-zinc-950 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 text-white dark:text-zinc-950 rounded-lg text-xs font-semibold shadow-sm transition-colors"
          >
            {activeTourStep === TOUR_STEPS.length - 1 ? 'Finish' : 'Next'} <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebsiteTour;
