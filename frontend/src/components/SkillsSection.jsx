import React, { useEffect, useRef, useState } from 'react';
import { 
  Code, 
  Palette, 
  Server, 
  Database, 
  Wrench, 
  BookOpen,
  Zap,
  Layers,
  Globe,
  GitBranch
} from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/20 to-cyan-500/20",
      skills: [
        { name: "JavaScript", icon: "🟨" },
        { name: "Python", icon: "🐍" },
        { name: "Java", icon: "☕" },
        { name: "C++", icon: "⚡" }
      ]
    },
    {
      title: "Frontend Development",
      icon: <Palette size={24} />,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/20 to-pink-500/20",
      skills: [
        { name: "React.js", icon: "⚛️" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "HTML5", icon: "🌐" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server size={24} />,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/20 to-emerald-500/20",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚀" },
        { name: "RESTful APIs", icon: "🔗" },
        { name: "PHP", icon: "🐘" }
      ]
    },
    {
      title: "Database & Cloud",
      icon: <Database size={24} />,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/20 to-red-500/20",
      skills: [
        { name: "MongoDB", icon: "🍃" },
        { name: "MySQL", icon: "🐬" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench size={24} />,
      color: "from-indigo-500 to-blue-500",
      bgColor: "from-indigo-500/20 to-blue-500/20",
      skills: [
        { name: "Git/GitHub", icon: "🔧" },
        { name: "VS Code", icon: "💻" },
        { name: "Linux", icon: "🐧" }
      ]
    },
    {
      title: "Core Concepts",
      icon: <BookOpen size={24} />,
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-500/20 to-cyan-500/20",
      skills: [
        { name: "Data Structures", icon: "🧮" },
        { name: "Algorithms", icon: "🔍" },
        { name: "OOP", icon: "🏗️" }
      ]
    }
  ];

  const SkillItem = ({ skill }) => {
    return (
      <div className="flex items-center gap-3 py-2">
        <span className="text-sm">{skill.icon}</span>
        <span className="body-sm font-medium text-white">{skill.name}</span>
      </div>
    );
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className="py-24 bg-gradient-to-br from-black to-gray-900/50 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <p className="caption text-purple-400 mb-4 tracking-wider">
              TECHNICAL EXPERTISE
            </p>
            <h2 className="heading-lg text-white mb-6">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="body-lg text-white/70 max-w-3xl mx-auto">
              A comprehensive toolkit built through continuous learning and hands-on projects
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className={`glass-card hover-lift group ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.bgColor} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="heading-sm text-white group-hover:text-blue-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillItem 
                      key={skillIndex}
                      skill={skill}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className={`mt-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <div className="glass-card bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border-2 border-white/20">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold gradient-text">6+</div>
                  <div className="body-sm text-white/80">Programming Languages</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold gradient-text">10+</div>
                  <div className="body-sm text-white/80">Frameworks & Libraries</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold gradient-text">150+</div>
                  <div className="body-sm text-white/80">Problems Solved</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold gradient-text">2</div>
                  <div className="body-sm text-white/80">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
