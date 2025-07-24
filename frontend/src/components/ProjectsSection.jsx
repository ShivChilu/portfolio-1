import React from 'react';
import { ExternalLink, Github, Calendar, Users, TrendingUp, Play } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Packing Assistant",
      period: "January 2025",
      description: "Implemented a REST API-based system for the travel assistant that analyzed weather patterns and user profiles, delivering packing suggestions for 100+ destinations.",
      technologies: ["HTML5", "Tailwind CSS", "JavaScript", "PHP"],
      achievements: [
        "Improved user interaction by 25% and accuracy of suggestions by 35% via a drag-and-drop UI",
        "Enhanced performance with backend query optimizations and responsive design",
        "Reduced load time by 40% across 98% of devices"
      ],
      stats: {
        destinations: "100+",
        improvement: "25%",
        performance: "40%"
      }
    },
    {
      title: "Horticulture Connect",
      period: "September 2024",
      description: "Built a scalable web application helping 100+ farmers monitor real-time crop market trends and optimize storage planning.",
      technologies: ["HTML5", "Tailwind CSS", "JavaScript", "MySQL", "PHP"],
      achievements: [
        "Boosted average farmer profits by 20% through integrated dashboards and profit-enhancing tools",
        "Conducted user testing with local stakeholders, achieving 9/10 satisfaction on usability",
        "Improved decision speed by 30% among test users"
      ],
      stats: {
        farmers: "100+",
        profit: "20%",
        satisfaction: "9/10"
      }
    }
  ];

  return (
    <section id="projects" className="pad-120" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="container">
        <div className="mb-96">
          <p className="caption mb-20" style={{ color: 'var(--text-secondary)' }}>
            Technical Projects
          </p>
          <h2 className="heading-1 mb-64">
            Featured Work
          </h2>
          
          <div className="space-y-96">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="relative"
              >
                <div 
                  className="grid lg:grid-cols-2 gap-64 p-40 rounded-lg"
                  style={{ backgroundColor: 'var(--bg-page)', border: '1px solid var(--border-medium)' }}
                >
                  {/* Project Content */}
                  <div className="space-y-32">
                    <div>
                      <div className="flex items-center gap-16 mb-16">
                        <Calendar size={16} style={{ color: 'var(--text-secondary)' }} />
                        <span className="caption">{project.period}</span>
                      </div>
                      <h3 className="heading-2 mb-20">{project.title}</h3>
                      <p className="body-small mb-32" style={{ color: 'var(--text-secondary)' }}>
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="heading-3 mb-16" style={{ fontSize: '1rem' }}>Technologies Used</h4>
                      <div className="flex flex-wrap gap-12">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-16 py-8 rounded-full body-small"
                            style={{ 
                              backgroundColor: 'var(--secondary-olive)', 
                              color: 'var(--text-primary)' 
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="heading-3 mb-16" style={{ fontSize: '1rem' }}>Key Achievements</h4>
                      <ul className="space-y-12">
                        {project.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex gap-12">
                            <TrendingUp size={16} style={{ color: 'var(--brand-primary)', marginTop: '4px' }} />
                            <span className="body-small" style={{ color: 'var(--text-secondary)' }}>
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-20">
                      <button className="btn-secondary">
                        <Github size={16} className="mr-8" />
                        View Code
                      </button>
                      <button className="btn-secondary">
                        <ExternalLink size={16} className="mr-8" />
                        Live Demo
                      </button>
                    </div>
                  </div>

                  {/* Video Placeholder */}
                  <div className="space-y-32">
                    <div 
                      className="relative rounded-lg overflow-hidden aspect-video flex items-center justify-center group cursor-pointer"
                      style={{ backgroundColor: 'var(--bg-card)', border: '2px dashed var(--border-medium)' }}
                    >
                      <div className="text-center">
                        <Play size={48} style={{ color: 'var(--brand-primary)', margin: '0 auto 16px' }} />
                        <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                          Project Demo Video
                        </p>
                        <p className="caption mt-8">
                          (Placeholder - Add your video manually)
                        </p>
                      </div>
                      <div 
                        className="absolute inset-0 bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ backgroundColor: 'var(--brand-primary)' }}
                      />
                    </div>

                    {/* Project Stats */}
                    <div className="grid grid-cols-3 gap-20">
                      {Object.entries(project.stats).map(([key, value], statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className="heading-3 mb-8" style={{ color: 'var(--brand-primary)' }}>
                            {value}
                          </div>
                          <p className="caption capitalize">{key}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;