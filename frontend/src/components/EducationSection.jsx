import React from 'react';
import { education } from '../data/portfolioData';
import { BookOpen, GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const EducationSection = () => {
  return (
    <section 
      id="education" 
      className="py-14 md:py-24 bg-white dark:bg-zinc-950 border-b border-zinc-200/50 dark:border-zinc-800/50 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="space-y-3 mb-10 md:mb-16 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Education Timeline
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl text-sm">
            Degree pathways, academic benchmarks, and educational history.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="space-y-12 max-w-4xl relative before:absolute before:inset-0 before:right-auto before:left-8 before:w-px before:bg-zinc-200 dark:before:bg-zinc-800">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-16 group">
              {/* Timeline Dot */}
              <div className="absolute left-8 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white dark:border-zinc-905 bg-red-600 dark:bg-red-500 group-hover:scale-120 transition-transform duration-300 z-10" />

              {/* Card Container */}
              <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/30 dark:bg-zinc-900/10 hover:border-zinc-350 dark:hover:border-zinc-700/80 transition-all duration-300 shadow-sm hover:shadow-md">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-red-600 dark:text-red-400 tracking-wider flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.duration}</span>
                    </span>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
                      {edu.degree}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-zinc-500 dark:text-zinc-400">
                      <div className="font-semibold text-zinc-700 dark:text-zinc-300">
                        {edu.institution}
                      </div>
                      <span className="hidden sm:inline">•</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold self-start">
                    <Award className="w-3.5 h-3.5" />
                    <span>{edu.performance}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EducationSection;
