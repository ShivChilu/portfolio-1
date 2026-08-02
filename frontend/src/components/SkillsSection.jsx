import React, { useState, useRef, useEffect } from 'react';
import { skillsData } from '../data/portfolioData';
import { Search, Filter, ShieldCheck } from 'lucide-react';

const CATEGORIES = ["All", "Frontend", "Backend", "Database", "Tools", "Cloud", "CS Fundamentals"];

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [animateProgress, setAnimateProgress] = useState(false);
  const searchInputRef = useRef(null);

  // Expose focus trigger for keyboard shortcut /
  useEffect(() => {
    const handleShortcutFocus = (e) => {
      if (e.key === '/' && document.activeElement !== searchInputRef.current) {
        // Prevent default only if we focused it
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleShortcutFocus);
    return () => window.removeEventListener('keydown', handleShortcutFocus);
  }, []);

  // Trigger progress bar animations on section enter
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateProgress(true);
        }
      },
      { threshold: 0.15 }
    );

    const el = document.getElementById('skills');
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const filteredSkills = skillsData.filter(skill => {
    const matchesCategory = selectedCategory === "All" || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section 
      id="skills" 
      className="py-14 md:py-24 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200/50 dark:border-zinc-800/50 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
              Skills
            </h2>
          </div>

          {/* Search Box */}
          <div className="relative max-w-xs w-full">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-zinc-400" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search skills (e.g. React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-white dark:bg-zinc-905 border border-zinc-200 dark:border-zinc-800 rounded-full focus:outline-none focus:ring-1 focus:ring-red-500 text-zinc-900 dark:text-zinc-50 shadow-sm transition-all"
            />
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-950 shadow-sm'
                  : 'bg-zinc-200/50 hover:bg-zinc-200 dark:bg-zinc-900/60 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        {filteredSkills.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {filteredSkills.map((skill, index) => (
              <div 
                key={index}
                className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/50 shadow-sm hover:shadow-md hover:border-red-500/20 dark:hover:border-red-500/20 transition-all duration-200 flex flex-col items-start justify-between gap-2 group min-h-[92px]"
              >
                <span className="text-[9px] uppercase font-bold text-red-600 dark:text-red-400 tracking-wider">
                  {skill.category}
                </span>
                <span className="font-semibold text-sm text-zinc-850 dark:text-zinc-200 group-hover:text-zinc-950 dark:group-hover:text-zinc-50 transition-colors leading-tight">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-3xl bg-zinc-100/30 dark:bg-zinc-900/10">
            <ShieldCheck className="w-10 h-10 mx-auto text-zinc-400 mb-3 animate-pulse" />
            <h4 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm">No skills found</h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Try tweaking your search query or switching categories.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default SkillsSection;
