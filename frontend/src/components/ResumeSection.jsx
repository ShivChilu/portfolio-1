import React, { useEffect, useRef, useState } from 'react';
import { 
  GraduationCap, 
  Code, 
  Briefcase, 
  Award,
  Trophy,
  Download,
  FileText,
  Calendar,
  MapPin
} from 'lucide-react';

const ResumeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('education');
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

  const tabs = [
    { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> },
    { id: 'skills', label: 'Skills', icon: <Code size={18} /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase size={18} /> },
    { id: 'extracurricular', label: 'Extracurricular', icon: <Trophy size={18} /> },
    { id: 'certificates', label: 'Certificates', icon: <Award size={18} /> }
  ];

  const educationData = [
    {
      institution: "Lovely Professional University",
      location: "Punjab, India",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      grade: "CGPA: 8.16*",
      period: "Since August 2022",
      color: "from-blue-500 to-cyan-500"
    },
    {
      institution: "St Theresa's Convent School",
      location: "Karnal, Haryana",
      degree: "Intermediate",
      grade: "Percentage: 90.4%",
      period: "April 2021 - March 2022",
      color: "from-purple-500 to-pink-500"
    },
    {
      institution: "Delhi Public School",
      location: "Karnal, Haryana",
      degree: "Matriculation",
      grade: "Percentage: 93.3%",
      period: "April 2019 - March 2020",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const skillsData = [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "Python", "Java", "C++"]
    },
    {
      category: "Frontend",
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "PHP", "RESTful APIs"]
    },
    {
      category: "Database",
      skills: ["MongoDB", "MySQL"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git/GitHub", "VS Code", "Linux"]
    }
  ];

  const projectsData = [
    {
      name: "Fresh Meat Hub",
      type: "E-Commerce Platform",
      description: "Full-stack e-commerce platform with product catalog, payment integration, and order management",
      tech: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      name: "Metro Route Finder",
      type: "Algorithm Project",
      description: "Route optimization using Dijkstra's algorithm with interactive metro map visualization",
      tech: ["React", "JavaScript", "Graph Algorithms"]
    }
  ];

  const extracurricularData = [
    {
      activity: "Technical Problem Solving",
      description: "Solved 150+ algorithmic problems on LeetCode",
      achievement: "Strong focus on DSA and optimization"
    },
    {
      activity: "Open Source Contributions",
      description: "Active contributor on GitHub with 20+ repositories",
      achievement: "Collaborative development experience"
    }
  ];

  const certificatesData = [
    {
      name: "Cloud Computing",
      issuer: "NPTEL",
      date: "October 2024",
      grade: "Elite - 64%"
    },
    {
      name: "The Bits and Bytes of Computer Networking",
      issuer: "Coursera (Google)",
      date: "September 2024",
      grade: "Completed"
    }
  ];

  const EducationContent = () => (
    <div className="space-y-6">
      {educationData.map((edu, index) => (
        <div 
          key={index}
          className={`glass-card hover-lift group ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <h3 className={`text-2xl font-bold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent mb-2`}>
                {edu.institution}
              </h3>
              <div className="flex items-center gap-2 text-white/60 mb-3">
                <MapPin size={16} />
                <span className="text-sm">{edu.location}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-blue-400 text-sm font-medium px-4 py-2 bg-blue-500/10 rounded-full border border-blue-400/30">
              <Calendar size={16} />
              <span>{edu.period}</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-white text-lg font-medium">{edu.degree}</p>
            <p className="text-white/80 text-lg">{edu.grade}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const SkillsContent = () => (
    <div className="grid md:grid-cols-2 gap-6">
      {skillsData.map((category, index) => (
        <div 
          key={index}
          className={`glass-card hover-lift ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Code size={20} className="text-blue-400" />
            {category.category}
          </h4>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <span 
                key={skillIndex}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white rounded-lg border border-blue-400/30 text-sm font-medium hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const ProjectsContent = () => (
    <div className="space-y-6">
      {projectsData.map((project, index) => (
        <div 
          key={index}
          className={`glass-card hover-lift ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-2xl font-bold text-white">{project.name}</h3>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-medium border border-purple-400/30">
              {project.type}
            </span>
          </div>
          <p className="text-white/80 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, techIndex) => (
              <span 
                key={techIndex}
                className="px-3 py-1 bg-white/10 text-white/90 rounded-full text-xs border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const ExtracurricularContent = () => (
    <div className="space-y-6">
      {extracurricularData.map((activity, index) => (
        <div 
          key={index}
          className={`glass-card hover-lift ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg">
              <Trophy size={24} className="text-yellow-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">{activity.activity}</h3>
              <p className="text-white/80 mb-2">{activity.description}</p>
              <p className="text-green-400 text-sm font-medium">{activity.achievement}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const CertificatesContent = () => (
    <div className="grid md:grid-cols-2 gap-6">
      {certificatesData.map((cert, index) => (
        <div 
          key={index}
          className={`glass-card hover-lift ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg">
              <Award size={24} className="text-green-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
              <p className="text-white/60 text-sm mb-1">{cert.issuer}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-white/60 text-sm">{cert.date}</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                  {cert.grade}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'education':
        return <EducationContent />;
      case 'skills':
        return <SkillsContent />;
      case 'projects':
        return <ProjectsContent />;
      case 'extracurricular':
        return <ExtracurricularContent />;
      case 'certificates':
        return <CertificatesContent />;
      default:
        return <EducationContent />;
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Shiva_Prasad_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="resume" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-900/50 to-black relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <p className="caption text-blue-400 mb-4 tracking-wider">
              MY RESUME
            </p>
            <h2 className="heading-lg text-white mb-6">
              Professional <span className="gradient-text">Background</span>
            </h2>
            <p className="body-lg text-white/70 max-w-3xl mx-auto">
              A comprehensive overview of my education, skills, and achievements
            </p>
          </div>

          {/* Tab Navigation */}
          <div className={`flex flex-wrap justify-center gap-3 mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 font-medium ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-white border-2 border-blue-400/50 shadow-lg shadow-blue-500/20'
                    : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className={`mb-12 ${isVisible ? 'animate-fadeInScale' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            {renderContent()}
          </div>

          {/* Download Button */}
          <div className={`flex justify-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <button
              onClick={handleDownload}
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105"
            >
              <FileText size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>Download Resume</span>
              <Download size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
