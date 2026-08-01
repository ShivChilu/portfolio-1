import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/portfolioData';
import { ArrowUpRight, Github, FolderGit, Layout, BrainCircuit, Database, Star } from 'lucide-react';

const CATEGORIES = ["All", "Featured Projects", "AI Projects", "Full Stack", "Backend", "Frontend"];

const ProjectsSection = () => {
  return (
    <section 
      id="projects" 
      className="py-24 bg-white dark:bg-zinc-950 border-b border-zinc-200/50 dark:border-zinc-800/50 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/10 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Body Content */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                      {project.title}
                    </h3>
                    <span className="px-2.5 py-1 rounded-full bg-red-500/10 text-red-650 dark:text-red-400 text-[10px] font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-550 dark:text-zinc-400 leading-relaxed">
                    {project.longDescription || project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-zinc-150 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 text-[10px] font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons Action Group */}
                <div className="pt-6 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center gap-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-red-600 dark:bg-red-500 hover:bg-red-700 dark:hover:bg-red-600 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all flex items-center justify-center"
                    aria-label="View Github Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
