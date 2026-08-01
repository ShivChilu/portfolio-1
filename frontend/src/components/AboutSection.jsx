import React from 'react';
import { personalInfo, summary } from '../data/portfolioData';
import { Sparkles, Terminal, Code, Cpu } from 'lucide-react';

const AboutSection = () => {
  const diffIcons = [
    <Sparkles className="w-5 h-5 text-amber-500" />,
    <Terminal className="w-5 h-5 text-blue-500" />,
    <Code className="w-5 h-5 text-purple-500" />
  ];

  const milestones = [
    {
      year: "2023",
      title: "Started B.Tech CSE at LPU",
      description: "Began deep dive into computer science fundamentals, data structures, and software engineering methodologies."
    },
    {
      year: "2024",
      title: "Full-Stack Development Focus",
      description: "Mastered frontend and backend Web technologies. Built regional scaling software for farmer communities."
    },
    {
      year: "2025",
      title: "AI Integration & Cloud Study",
      description: "Completed Cloud Computing certifications and built predictive AI Travel Packing assistants using REST APIs."
    },
    {
      year: "2026-2027",
      title: "Next Horizon",
      description: "Seeking a Summer 2026 software engineering internship to contribute to global SaaS and infrastructure projects."
    }
  ];

  return (
    <section 
      id="about" 
      className="py-24 bg-white dark:bg-zinc-950 border-b border-zinc-200/50 dark:border-zinc-800/50 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="space-y-3 mb-16 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            About Me & Journey
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl text-sm">
            Bridging the gap between scalable engineering and gorgeous interfaces.
          </p>
        </div>

        {/* Narrative Grid - 2 Column Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Story Panel */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span>Story</span>
            </h3>
            
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {summary.long}
            </p>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {summary.objective}
            </p>

            {/* What makes me different */}
            <div className="pt-4 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-450">
                What Makes Me Different
              </h4>
              <div className="space-y-3">
                {summary.difference.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 flex gap-3 items-start"
                  >
                    <div className="p-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg shrink-0 mt-0.5">
                      {diffIcons[idx % diffIcons.length]}
                    </div>
                    <div>
                      <h5 className="font-bold text-zinc-900 dark:text-zinc-150 text-xs">{item.title}</h5>
                      <p className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-0.5 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Timeline Panel */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              Journey
            </h3>
            
            <div className="relative border-l border-zinc-200 dark:border-zinc-800 pl-6 ml-2 space-y-6">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="relative group">
                  {/* Indicator Dot */}
                  <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-800 group-hover:bg-purple-500 dark:group-hover:bg-purple-400 transition-colors duration-300" />
                  
                  <span className="text-[9px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest">
                    {milestone.year}
                  </span>
                  <h4 className="font-bold text-xs text-zinc-900 dark:text-zinc-100 mt-0.5">
                    {milestone.title}
                  </h4>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
