import React from 'react';
import { certifications } from '../data/portfolioData';
import { Award, ArrowUpRight, ShieldCheck } from 'lucide-react';

const CertificationsSection = () => {
  return (
    <section 
      id="certifications" 
      className="py-14 md:py-24 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200/50 dark:border-zinc-800/50 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="space-y-3 mb-10 md:mb-16 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Certifications
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl text-sm">
            Professional badges, course completions, and certifications validating key technical domains.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/40 shadow-sm hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Icon & Meta */}
                <div className="flex justify-between items-start">
                  <div className="p-2 bg-purple-500/10 rounded-xl">
                    <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-widest">
                    {cert.date}
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-1">
                  <h3 className="font-bold text-zinc-900 dark:text-zinc-50 text-sm leading-snug group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">{cert.provider}</p>
                </div>
              </div>

              {/* Action Credential ID & Button */}
              <div className="mt-6 pt-4 border-t border-zinc-155/60 dark:border-zinc-800/60 flex items-center justify-between gap-4">
                <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>ID: {cert.credentialId.slice(0, 10)}...</span>
                </div>
                
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-0.5 text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  <span>Verify</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CertificationsSection;
