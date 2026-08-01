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
            Degree pathways, academic benchmarks, and specialized coursework.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="space-y-12 max-w-4xl relative before:absolute before:inset-0 before:right-auto before:left-8 before:w-px before:bg-zinc-200 dark:before:bg-zinc-800">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-16 group">
              {/* Icon Marker */}
              <div className="absolute left-4 top-0 -ml-4 w-8 h-8 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex items-center justify-center group-hover:border-purple-500 dark:group-hover:border-purple-400 transition-colors duration-300">
                <GraduationCap className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
              </div>

              {/* Card */}
              <div className="p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/10 shadow-sm hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{edu.institution}</h3>
                    <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">{edu.degree}</p>
                    
                    <div className="flex flex-wrap items-center gap-3 pt-1.5 text-xs text-zinc-400 dark:text-zinc-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{edu.duration}</span>
                      </div>
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

                {/* Coursework tags */}
                <div className="mt-4 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 space-y-2">
                  <span className="text-[10px] uppercase font-bold text-zinc-400 dark:text-zinc-500 tracking-wider flex items-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    <span>Key Coursework</span>
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course, idx) => (
                      <span 
                        key={idx} 
                        className="px-2.5 py-1 rounded-lg bg-zinc-200/50 dark:bg-zinc-850 text-zinc-600 dark:text-zinc-400 text-[10px] font-semibold"
                      >
                        {course}
                      </span>
                    ))}
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
