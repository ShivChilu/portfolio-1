import React, { useEffect, useRef, useState } from 'react';
import { 
  Calendar, 
  TrendingUp, 
  Award,
  Users,
  Zap,
  Target,
  ExternalLink,
  Github
} from 'lucide-react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
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

  const projects = [
    {
      id: 1,
      title: "Fresh Meat Hub",
      period: "E-Commerce Platform",
      category: "Full-Stack Web Application",
      description: "A comprehensive e-commerce platform designed for a meat shop, featuring product listings, shopping cart, order management, and secure payment integration. Built with modern web technologies to deliver a seamless shopping experience for customers.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Payment Gateway", "REST API"],
      achievements: [
        "Fully functional e-commerce platform with product catalog",
        "Integrated secure payment processing system",
        "Real-time inventory management and order tracking",
        "Responsive design for seamless mobile shopping experience"
      ],
      stats: {
        features: { value: "15+", label: "Features", icon: <Target size={16} /> },
        performance: { value: "Fast", label: "Load Time", icon: <Zap size={16} /> },
        responsive: { value: "100%", label: "Mobile Ready", icon: <Award size={16} /> }
      },
      gradient: "from-red-500/20 to-orange-500/20",
      accentColor: "text-red-400",
      deployedLink: "https://fresh-meat-hub.onrender.com",
      sourceCode: "https://github.com/ShivChilu/fresh-meat-hub",
      coverImage: "/projects/fresh-meat-hub-cover.jpg"
    },
    {
      id: 2,
      title: "Metro Route Finder",
      period: "Optimization Algorithm",
      category: "Algorithm & Web Development",
      description: "An intelligent metro route finder that helps users find the cheapest and shortest paths in metro systems using Dijkstra's algorithm. Features real-time route calculation, fare optimization, and interactive metro map visualization.",
      technologies: ["React", "JavaScript", "Dijkstra's Algorithm", "Graph Data Structure", "Tailwind CSS", "Vercel"],
      achievements: [
        "Implemented Dijkstra's algorithm for optimal route finding",
        "Finds both shortest distance and cheapest fare routes",
        "Interactive metro map with station selection",
        "Real-time path calculation with detailed fare breakdown"
      ],
      stats: {
        algorithm: { value: "O(V²)", label: "Time Complexity", icon: <Target size={16} /> },
        routes: { value: "Optimal", label: "Route Finding", icon: <TrendingUp size={16} /> },
        stations: { value: "50+", label: "Metro Stations", icon: <Users size={16} /> }
      },
      gradient: "from-blue-500/20 to-cyan-500/20",
      accentColor: "text-blue-400",
      deployedLink: "https://metro-route-finder.vercel.app/",
      sourceCode: "https://github.com/ShivChilu/metro-route-finder",
      coverImage: "/projects/metro-route-finder-cover.jpg"
    }
  ];

  const ProjectCard = ({ project, index, isActive }) => (
    <div 
      className={`glass-card hover-lift cursor-pointer transition-all duration-500 ${
        isActive ? 'ring-2 ring-blue-400/50 bg-blue-500/5' : ''
      } ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.2}s` }}
      onClick={() => setActiveProject(index)}
    >
      <div className="space-y-6">
        {/* Project Cover Image */}
        {project.coverImage && (
          <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
            <img 
              src={project.coverImage} 
              alt={project.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                e.target.parentElement.innerHTML = '<div class="text-white/60">Project Cover Image</div>';
              }}
            />
          </div>
        )}

        {/* Project Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Calendar size={16} className="text-white/60" />
              <span className="caption text-white/60">{project.period}</span>
              <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-xs font-medium text-white`}>
                {project.category}
              </div>
            </div>
            <h3 className="heading-sm text-white group-hover:text-blue-400 transition-colors duration-300">
              {project.title}
            </h3>
          </div>
          <div className={`p-2 rounded-lg bg-gradient-to-br ${project.gradient}`}>
            <div className={`w-3 h-3 rounded-full ${project.accentColor.replace('text-', 'bg-')}`}></div>
          </div>
        </div>

        {/* Project Description */}
        <p className="body-sm text-white/80 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="space-y-3">
          <h4 className="body-sm font-semibold text-white">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span 
                key={techIndex}
                className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Project Links */}
        <div className="flex gap-3 pt-4 border-t border-white/10">
          <a
            href={project.deployedLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 rounded-lg hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 border border-blue-400/30"
          >
            <ExternalLink size={16} />
            <span className="text-sm font-medium">View Live</span>
          </a>
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <Github size={16} />
            <span className="text-sm font-medium">Source Code</span>
          </a>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
          {Object.entries(project.stats).map(([key, stat], statIndex) => (
            <div key={statIndex} className="text-center space-y-1">
              <div className={`text-lg font-bold ${project.accentColor}`}>
                {stat.value}
              </div>
              <div className="flex items-center justify-center gap-1">
                <span className="text-white/60">{stat.icon}</span>
                <span className="caption text-white/60">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ProjectDetails = ({ project }) => (
    <div className={`space-y-8 ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
      {/* Detailed Achievements */}
      <div className="glass-card">
        <h4 className="heading-sm text-white mb-6 flex items-center gap-2">
          <Award size={20} className="text-yellow-400" />
          Key Achievements
        </h4>
        <div className="space-y-4">
          {project.achievements.map((achievement, index) => (
            <div key={index} className="flex gap-4 group">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <TrendingUp size={14} className="text-green-400" />
              </div>
              <p className="body-sm text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300">
                {achievement}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Impact */}
      <div className="glass-card bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 border-2 border-white/10">
        <div className="text-center space-y-4">
          <h4 className="heading-sm text-white">Project Impact</h4>
          <div className="grid grid-cols-3 gap-6">
            {Object.entries(project.stats).map(([key, stat], statIndex) => (
              <div key={statIndex} className="space-y-3">
                <div className={`text-2xl font-bold ${project.accentColor}`}>
                  {stat.value}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-white/60">{stat.icon}</span>
                  </div>
                  <div className="body-sm text-white/80 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-900/50 to-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <p className="caption text-cyan-400 mb-4 tracking-wider">
              FEATURED WORK
            </p>
            <h2 className="heading-lg text-white mb-6">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="body-lg text-white/70 max-w-3xl mx-auto">
              Showcasing real-world applications that solve problems and create impact
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Project Cards */}
            <div className="space-y-6">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={project.id}
                  project={project}
                  index={index}
                  isActive={activeProject === index}
                />
              ))}
            </div>

            {/* Right: Project Details */}
            <div className="sticky top-8">
              <ProjectDetails project={projects[activeProject]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
