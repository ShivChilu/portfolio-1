import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Sparkles, CheckCircle } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col justify-center items-center p-6 text-center">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">Project Not Found</h2>
        <p className="text-zinc-500 dark:text-zinc-400 mt-2 max-w-sm">The project case study you are looking for does not exist or has been moved.</p>
        <button 
          onClick={() => navigate('/')} 
          className="mt-6 px-5 py-2.5 rounded-full bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 font-semibold text-xs transition-transform hover:scale-105"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pt-24 pb-20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100 text-xs font-bold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </button>

        {/* Hero Meta */}
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-[10px] font-bold uppercase tracking-wider">
              {project.category}
            </span>
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 text-[10px] font-semibold">
                {tech}
              </span>
            ))}
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight">
            {project.title}
          </h1>
          
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Image Display */}
        <div className="aspect-[16/9] w-full rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800/80 shadow-md">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Core Layout Split */}
        <div className="grid md:grid-cols-12 gap-10">
          {/* Main Case Details */}
          <div className="md:col-span-8 space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">Overview & Challenges</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">Key Achievements & Implementations</h3>
              <div className="space-y-3">
                {project.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Info Sidebar */}
          <div className="md:col-span-4 space-y-6 bg-white dark:bg-zinc-900/30 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <h4 className="font-bold text-xs uppercase text-zinc-400 tracking-wider">Project Metadata</h4>
            
            <div className="space-y-4">
              {Object.entries(project.stats).map(([key, val]) => (
                <div key={key} className="space-y-1">
                  <div className="text-[10px] text-zinc-400 capitalize">{key}</div>
                  <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{val}</div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 space-y-3">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 rounded-xl text-xs font-bold transition-all shadow-sm"
              >
                <span>Live Preview</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded-xl text-xs font-bold transition-all"
              >
                <span>Source Code</span>
                <Github className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
