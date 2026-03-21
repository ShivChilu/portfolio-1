import React, { useEffect, useRef, useState } from 'react';
import { 
  Calendar, 
  TrendingUp, 
  Award,
  Users,
  Zap,
  Target,
  ExternalLink,
  Github,
  CheckCircle
} from 'lucide-react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
      period: "E-COMMERCE PLATFORM",
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
      period: "OPTIMIZATION ALGORITHM",
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

  const ProjectCard = ({ project, index }) => (
    <div 
      className={`group ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Main Card Container */}
      <div className="glass-card hover-lift overflow-hidden h-full flex flex-col">
        {/* Project Cover Image */}
        <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
          <img 
            src={project.coverImage} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
              e.target.parentElement.innerHTML = '<div class="text-white/60 text-center"><div class="text-5xl mb-2">🚀</div><div>Project Image</div></div>';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${project.gradient} backdrop-blur-md text-xs font-bold text-white border border-white/20`}>
              {project.period}
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 flex-1 flex flex-col space-y-4">
          {/* Title */}
          <div>
            <h3 className="heading-sm text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="caption text-white/60">{project.category}</p>
          </div>

          {/* Description */}
          <p className="body-sm text-white/80 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="space-y-2">
            <h4 className="body-sm font-semibold text-white/90">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="px-3 py-1 bg-white/10 text-white/90 text-xs rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div className="space-y-3 flex-1">
            <h4 className="body-sm font-semibold text-white/90 flex items-center gap-2">
              <Award size={16} className="text-yellow-400" />
              Key Achievements
            </h4>
            <div className="space-y-2">
              {project.achievements.slice(0, 3).map((achievement, achIndex) => (
                <div key={achIndex} className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-green-400 mt-1 flex-shrink-0" />
                  <span className="body-sm text-white/70 text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
            {Object.entries(project.stats).map(([key, stat], statIndex) => (
              <div key={statIndex} className="text-center space-y-1">
                <div className={`text-xl font-bold ${project.accentColor}`}>
                  {stat.value}
                </div>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-white/60">{stat.icon}</span>
                </div>
                <div className="caption text-white/60 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <a
              href={project.deployedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 rounded-lg hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 border border-blue-400/30 hover:border-blue-400/50 group/btn"
            >
              <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
              <span className="text-sm font-semibold">View Live</span>
            </a>
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 group/btn"
            >
              <Github size={16} className="group-hover/btn:rotate-12 transition-transform duration-300" />
              <span className="text-sm font-semibold">Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-900/50 to-black relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
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

          {/* Projects Grid - Side by Side */}
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
