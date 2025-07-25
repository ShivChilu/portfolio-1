import React, { useEffect, useRef, useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Calendar, 
  TrendingUp, 
  Play, 
  Award,
  Users,
  Zap,
  Target,
  ArrowRight
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
      title: "AI Packing Assistant",
      period: "January 2025",
      category: "AI & Web Development",
      description: "Implemented a REST API-based system for the travel assistant that analyzed weather patterns and user profiles, delivering intelligent packing suggestions for 100+ destinations with real-time data processing.",
      technologies: ["HTML5", "Tailwind CSS", "JavaScript", "PHP", "REST API", "Weather API"],
      achievements: [
        "Improved user interaction by 25% and accuracy of suggestions by 35%",
        "Enhanced performance with backend query optimizations",
        "Reduced load time by 40% across 98% of devices",
        "Integrated real-time weather data from multiple sources"
      ],
      stats: {
        destinations: { value: "100+", label: "Destinations", icon: <Target size={16} /> },
        improvement: { value: "25%", label: "User Engagement", icon: <TrendingUp size={16} /> },
        performance: { value: "40%", label: "Load Time Reduction", icon: <Zap size={16} /> }
      },
      gradient: "from-blue-500/20 to-cyan-500/20",
      accentColor: "text-blue-400"
    },
    {
      id: 2,
      title: "Horticulture Connect",
      period: "September 2024",
      category: "Full-Stack Web Application",
      description: "Built a comprehensive scalable web application helping 100+ farmers monitor real-time crop market trends, optimize storage planning, and make data-driven agricultural decisions.",
      technologies: ["HTML5", "Tailwind CSS", "JavaScript", "MySQL", "PHP", "Chart.js", "Dashboard UI"],
      achievements: [
        "Boosted average farmer profits by 20% through integrated dashboards",
        "Achieved 9/10 satisfaction rating from local stakeholders",
        "Improved decision-making speed by 30% among users",
        "Successfully deployed"
      ],
      stats: {
        farmers: { value: "100+", label: "Active Farmers", icon: <Users size={16} /> },
        profit: { value: "20%", label: "Profit Increase", icon: <TrendingUp size={16} /> },
        satisfaction: { value: "9/10", label: "User Satisfaction", icon: <Award size={16} /> }
      },
      gradient: "from-green-500/20 to-emerald-500/20",
      accentColor: "text-green-400"
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
          {/* Action Buttons */}
{/*         <div className="flex gap-3 pt-2">
{/*           <button className="btn-secondary flex-1 text-sm py-2"> */}
{/*             <Github size={14} />
{/*             Code */}
{/*           </button> */} */}
{/*           <button className="btn-secondary flex-1 text-sm py-2"> */}
            <ExternalLink size={14} />
            // Demo
          </button> */}
        </div>
      // </div>
    // </div>
  );

  // const ProjectDetails = ({ project }) => (
{/*     <div className={`space-y-8 ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
      {/* Video Placeholder */} */}
{/*       <div className="glass-card">
        <div className="relative rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group cursor-pointer border-2 border-dashed border-white/20 hover:border-white/40 transition-colors duration-300">
          <div className="text-center space-y-4">
            <div className={`p-6 rounded-full bg-gradient-to-br ${project.gradient} group-hover:scale-110 transition-transform duration-300`}>
              <Play size={32} className="text-white" />
            </div>
            <div className="space-y-2">
{/*               <h4 className="heading-sm text-white">Project Demo Video</h4>
              <p className="body-sm text-white/60">
                Interactive demonstration of {project.title}
              </p> */}
{/*               <p className="caption text-white/40">
              </p> */}
            </div>
          </div>
{/*           <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div> */}
      </div> */}

      

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

          {/* Call to Action */}
          <div className={`mt-16 text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <div className="glass-card bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border-2 border-white/20 max-w-4xl mx-auto">
              <div className="space-y-6">
                <h3 className="heading-sm text-white">Want to See More?</h3>
                <p className="body-md text-white/80 max-w-2xl mx-auto">
                  These are just highlights of my work. I'm constantly building new projects and experimenting with cutting-edge technologies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-primary group">
                    <Github size={16} />
                    View All Projects
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <button className="btn-secondary">
                    <ExternalLink size={16} />
                    Live Demos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
