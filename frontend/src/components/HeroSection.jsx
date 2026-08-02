import React, { useState, useEffect } from 'react';
import { ArrowDown, Code, ArrowUpRight, Github, Linkedin, Briefcase } from 'lucide-react';
import { personalInfo, summary } from '../data/portfolioData';

const HeroSection = () => {
  const [typedName, setTypedName] = useState("");
  const [typedTitle, setTypedTitle] = useState("");
  const [typedQuote, setTypedQuote] = useState("");
  const [typedLong, setTypedLong] = useState("");
  const [typedObjective, setTypedObjective] = useState("");
  const [activeElement, setActiveElement] = useState("name");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let nameText = personalInfo.name;
    let titleText = "Full Stack Developer";
    let quoteText = summary.short;
    let longText = summary.long;
    let objectiveText = summary.objective;

    let isCancelled = false;

    const startTyping = async () => {
      setActiveElement("name");
      for (let i = 0; i <= nameText.length; i++) {
        if (isCancelled) return;
        setTypedName(nameText.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 25));
      }

      setActiveElement("title");
      for (let i = 0; i <= titleText.length; i++) {
        if (isCancelled) return;
        setTypedTitle(titleText.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 15));
      }

      setActiveElement("quote");
      for (let i = 0; i <= quoteText.length; i++) {
        if (isCancelled) return;
        setTypedQuote(quoteText.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 8));
      }

      setActiveElement("long");
      for (let i = 0; i <= longText.length; i++) {
        if (isCancelled) return;
        setTypedLong(longText.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 4));
      }

      setActiveElement("objective");
      for (let i = 0; i <= objectiveText.length; i++) {
        if (isCancelled) return;
        setTypedObjective(objectiveText.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 4));
      }

      setActiveElement("done");
    };

    startTyping();

    return () => {
      isCancelled = true;
    };
  }, []);

  const getCursor = (elName) => {
    if (activeElement === elName) {
      return <span className="inline-block w-1.5 h-4 sm:h-5 ml-1.5 bg-red-600 dark:bg-red-500 animate-pulse align-middle"></span>;
    }
    return null;
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({
        x: (clientX / window.innerWidth - 0.5) * 20,
        y: (clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6 sm:px-12 lg:px-20 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300"
    >
      {/* SaaS Grid Background & Radial Glow */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
        style={{
          transform: `translate3d(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px, 0)`,
        }}
      />
      
      {/* Decorative Blur Spheres */}
      <div 
        className="absolute w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[100px] top-1/4 left-1/3 pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
        }}
      />
      <div 
        className="absolute w-80 h-80 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[100px] bottom-1/4 right-1/4 pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0)`,
        }}
      />

      <div className="max-w-7xl w-full grid lg:grid-cols-12 gap-12 items-center z-10 relative">
        
        {/* Left Column: Cutout Portrait (40-45%) */}
        <div className="lg:col-span-5 flex justify-center items-end relative h-[320px] sm:h-[420px] md:h-[480px] lg:h-[550px] overflow-visible">
          {/* Subtle cyan glow behind the figure */}
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-cyan-500/20 dark:bg-cyan-500/10 blur-[80px] bottom-10 left-1/2 -translate-x-1/2 pointer-events-none z-0" />
          
          <img 
            src="/profile_nobg.png" 
            alt={personalInfo.name} 
            className="h-full object-contain filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.15)] select-none pointer-events-none animate-in fade-in slide-in-from-bottom-12 duration-1000 z-10 relative transform lg:-translate-y-24 hover:scale-[1.02] transition-transform duration-300"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = `
                <div class="absolute inset-0 flex flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-900 text-zinc-400 rounded-3xl border border-zinc-200 dark:border-zinc-800">
                  <span class="text-xs font-semibold">Profile Photo</span>
                </div>
              `;
            }}
          />

          {/* Floating Social Badges next to neck */}
          <div className="absolute left-[15%] top-[38%] z-20 hidden lg:block animate-bounce" style={{ animationDuration: '3.5s' }}>
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center border border-zinc-200 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-lg text-zinc-600 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400 hover:scale-110 hover:border-red-500/35 transition-all duration-305"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          <div className="absolute right-[12%] top-[45%] z-20 hidden lg:block animate-bounce" style={{ animationDuration: '4.5s' }}>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center border border-zinc-200 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-lg text-zinc-600 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-400 hover:scale-110 hover:border-red-500/35 transition-all duration-305"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Hero Content (55-60%) */}
        <div className="lg:col-span-7 text-left space-y-6">

          {/* Heading */}
          <div className="space-y-3 min-h-[90px] sm:min-h-[110px]">
            {typedName && (
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 font-sans leading-[1.15]">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">{typedName}</span>
                {getCursor("name")}
              </h1>
            )}
            {typedTitle && (
              <p className="text-lg sm:text-2xl font-bold tracking-tight text-zinc-700 dark:text-zinc-300">
                {typedTitle}
                {getCursor("title")}
              </p>
            )}
          </div>

          {/* Introduction / Objective Paragraph */}
          <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm sm:text-base min-h-[220px]">
            {typedQuote && (
              <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100 border-l-2 border-red-500 pl-3 italic">
                {typedQuote}
                {getCursor("quote")}
              </h3>
            )}
            {typedLong && (
              <p className="text-zinc-655 dark:text-zinc-400">
                {typedLong}
                {getCursor("long")}
              </p>
            )}
            {typedObjective && (
              <p className="text-xs sm:text-sm text-zinc-550 dark:text-zinc-500">
                {typedObjective}
                {getCursor("objective")}
              </p>
            )}
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-wrap items-center gap-4 pt-2 transition-all duration-1000 transform ${
            activeElement === "done" 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
          }`}>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-zinc-900 dark:bg-zinc-50 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-950 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              View Projects
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 transition-all duration-200 hover:-translate-y-0.5"
            >
              Contact Me
            </button>

            <a
              href={personalInfo.resumeUrl}
              className="flex items-center gap-1.5 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200"
            >
              <span>Download CV</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Social Icons & Quick Stats */}
          <div className={`pt-6 flex flex-col sm:flex-row sm:items-center gap-6 justify-between border-t border-zinc-200/60 dark:border-zinc-800/60 transition-all duration-1000 delay-300 transform ${
            activeElement === "done" 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}>
            <div className="flex items-center gap-3">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-md">
              {personalInfo.heroStats.map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-base sm:text-lg font-extrabold text-zinc-900 dark:text-zinc-50">{stat.value}</div>
                  <div className="text-[9px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-zinc-400 dark:text-zinc-500 pointer-events-none">
        <span className="text-[9px] uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-zinc-300 dark:border-zinc-800 flex justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-zinc-400 dark:bg-zinc-600 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;