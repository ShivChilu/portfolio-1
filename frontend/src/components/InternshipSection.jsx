import React from 'react';
import { internships } from '../data/portfolioData';
import { Briefcase, ArrowUpRight } from 'lucide-react';

const InternshipSection = () => {
  return (
    <section 
      id="internship" 
      className="py-14 md:py-24 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200/50 dark:border-zinc-800/50 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="space-y-3 mb-10 md:mb-16 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Work Experience
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl text-sm">
            Previous professional internships, contributions, and client collaborations.
          </p>
        </div>

        {/* Experience Cards Layout */}
        <div className="space-y-8 max-w-4xl">
          {internships.map((intern, index) => (
            <div 
              key={index}
              className="p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 shadow-sm flex flex-col md:flex-row md:items-start justify-between gap-6 hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200"
            >
              {/* Left Column: Role Details */}
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[10px] font-bold uppercase tracking-wider">
                    Internship
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    {intern.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    <Briefcase className="w-4 h-4 text-zinc-400" />
                    <span>{intern.company}</span>
                    {intern.verifyUrl && (
                      <a 
                        href={intern.verifyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400 inline-flex items-center gap-0.5 ml-1 transition-colors"
                        aria-label={`${intern.company} verification link`}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Bullets Description */}
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed list-disc pl-5">
                  {intern.description.map((bullet, bulletIdx) => (
                    <li key={bulletIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Duration badge */}
              <div className="shrink-0 text-left md:text-right">
                <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block">
                  Duration
                </span>
                <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200 mt-1 block">
                  {intern.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InternshipSection;
