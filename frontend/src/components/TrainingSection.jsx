import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, Award, Calendar, CheckCircle, Clock, Zap, ExternalLink } from 'lucide-react';

const TrainingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('training');
  const [flippedCard, setFlippedCard] = useState(null);
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

  const trainings = [
    {
      title: "Data Structures and Algorithms Training",
      provider: "Cipher Schools",
      duration: "June 2025 - Present",
      status: "In Progress",
      description: "Comprehensive DSA course covering advanced concepts like dynamic programming, graph algorithms, and system design principles.",
      highlights: [
        "Advanced algorithm analysis and optimization techniques",
        "Complex data structure implementations",
        "Time and space complexity mastery",
        "Technical interview preparation"
      ],
      skills: ["Algorithms", "Data Structures", "Problem Solving", "Optimization"],
      gradient: "from-blue-500/20 to-cyan-500/20",
      accentColor: "text-blue-400"
    },
    {
      title: "Full Stack Development Training",
      provider: "Apna College",
      duration: "October 2024 - Present",
      status: "In Progress",
      description: "Project-based curriculum focused on modern web technologies with hands-on experience in building production-ready applications.",
      highlights: [
        "React.js and modern frontend development",
        "Node.js and Express.js backend architecture",
        "Database design and optimization",
        "Deployment and DevOps practices"
      ],
      skills: ["React", "Node.js", "MongoDB", "Git", "Deployment"],
      gradient: "from-purple-500/20 to-pink-500/20",
      accentColor: "text-purple-400"
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "Cloud Computing",
      provider: "NPTEL",
      completion: "October 2024",
      status: "Completed",
      description: "Comprehensive training on cloud computing fundamentals, services, deployment models, and best practices.",
      issuer: "NPTEL",
      date: "October 2024",
      skills: ["AWS", "Cloud Architecture", "Virtualization"],
      certificateUrl: "#",
      certificateImage: "/certificates/cloud-computing.jpg",
      gradient: "from-green-500/20 to-emerald-500/20",
      accentColor: "text-green-400"
    },
    {
      id: 2,
      title: "The Bits and Bytes of Computer Networking",
      provider: "Coursera",
      completion: "September 2024",
      status: "Completed",
      description: "In-depth study of computer networking concepts, protocols, and network infrastructure fundamentals.",
      issuer: "Coursera",
      date: "September 2024",
      skills: ["TCP/IP", "Network Protocols", "Network Architecture", "Troubleshooting"],
      certificateUrl: "#",
      certificateImage: "/certificates/networking.jpg",
      gradient: "from-blue-500/20 to-purple-500/20",
      accentColor: "text-blue-400"
    }
  ];

  const TrainingCard = ({ item, index, type }) => (
    <div 
      className={`glass-card hover-lift group ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-3 flex-1">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg bg-gradient-to-br ${item.gradient}`}>
                {type === 'training' ? (
                  <BookOpen size={20} className={item.accentColor} />
                ) : (
                  <Award size={20} className={item.accentColor} />
                )}
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                item.status === 'In Progress' 
                  ? 'bg-yellow-500/20 text-yellow-400' 
                  : 'bg-green-500/20 text-green-400'
              }`}>
                {item.status === 'In Progress' ? (
                  <div className="flex items-center gap-2">
                    <Clock size={12} />
                    {item.status}
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <CheckCircle size={12} />
                    {item.status}
                  </div>
                )}
              </div>
            </div>
            
            <h3 className="heading-sm text-white group-hover:text-blue-400 transition-colors duration-300">
              {item.title}
            </h3>
            
            <div className="flex items-center gap-4 text-white/60">
              <span className="body-sm font-medium">{item.provider}</span>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span className="body-sm">{type === 'training' ? item.duration : item.completion}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="body-sm text-white/80 leading-relaxed">
          {item.description}
        </p>

        {/* Highlights/Skills */}
        <div className="space-y-4">
          {item.highlights && (
            <div className="space-y-3">
              <h4 className="body-sm font-semibold text-white">Key Learning Areas</h4>
              <div className="space-y-2">
                {item.highlights.map((highlight, hlIndex) => (
                  <div key={hlIndex} className="flex items-start gap-3 group/highlight">
                    <Zap size={14} className={`${item.accentColor} mt-1 group-hover/highlight:scale-110 transition-transform duration-300`} />
                    <span className="body-sm text-white/80 group-hover/highlight:text-white transition-colors duration-300">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Tags */}
          <div className="space-y-2">
            <h4 className="body-sm font-semibold text-white">Skills Acquired</h4>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex}
                  className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const CertificationCard = ({ cert, index }) => {
    const isFlipped = flippedCard === cert.id;

    return (
      <div 
        className={`flip-card-container ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div 
          className={`flip-card ${isFlipped ? 'flipped' : ''}`}
          onClick={() => setFlippedCard(isFlipped ? null : cert.id)}
        >
          {/* Front of Card */}
          <div className="flip-card-front glass-card hover-lift cursor-pointer">
            <div className="space-y-6">
              {/* Certificate Image */}
              <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <img 
                  src={cert.certificateImage} 
                  alt={cert.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                    e.target.parentElement.innerHTML = '<div class="text-white/60 text-center"><div class="text-4xl mb-2">📚</div><div>Certificate Image</div></div>';
                  }}
                />
              </div>

              {/* Certificate Header */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${cert.gradient}`}>
                    <Award size={20} className={cert.accentColor} />
                  </div>
                  <div className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={12} />
                      Completed
                    </div>
                  </div>
                </div>
                
                <h3 className="heading-sm text-white">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-4 text-white/60">
                  <span className="body-sm font-medium">{cert.provider}</span>
                  <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span className="body-sm">{cert.completion}</span>
                  </div>
                </div>
              </div>

              {/* Click to flip indicator */}
              <div className="text-center pt-4 border-t border-white/10">
                <p className="caption text-white/60">Click to view details</p>
              </div>
            </div>
          </div>

          {/* Back of Card */}
          <div className="flip-card-back glass-card hover-lift cursor-pointer">
            <div className="space-y-6 h-full flex flex-col">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${cert.gradient}`}>
                  <Award size={20} className={cert.accentColor} />
                </div>
                <h3 className="heading-sm text-white">
                  {cert.title}
                </h3>
              </div>

              <div className="space-y-4 flex-1">
                {/* Issued By */}
                <div className="flex items-start gap-3">
                  <div className="text-2xl">📚</div>
                  <div>
                    <div className="body-sm font-semibold text-white">Issued by:</div>
                    <div className="body-sm text-white/80">{cert.issuer}</div>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🗓️</div>
                  <div>
                    <div className="body-sm font-semibold text-white">Date:</div>
                    <div className="body-sm text-white/80">{cert.date}</div>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex items-start gap-3">
                  <div className="text-2xl">🔍</div>
                  <div className="flex-1">
                    <div className="body-sm font-semibold text-white mb-2">Skills:</div>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-2 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* View Certificate Button */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 rounded-lg hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 border border-blue-400/30"
                >
                  <ExternalLink size={16} />
                  <span className="text-sm font-medium">View Certificate</span>
                </a>
              </div>

              {/* Click to flip indicator */}
              <div className="text-center">
                <p className="caption text-white/60">Click to flip back</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-900/50 to-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <p className="caption text-green-400 mb-4 tracking-wider">
              CONTINUOUS LEARNING
            </p>
            <h2 className="heading-lg text-white mb-6">
              Training & <span className="gradient-text">Certifications</span>
            </h2>
            <p className="body-lg text-white/70 max-w-3xl mx-auto">
              Committed to staying ahead of the curve through continuous skill development and industry certifications
            </p>
          </div>

          {/* Tab Navigation */}
          <div className={`flex justify-center mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-2 flex gap-2">
              <button
                onClick={() => setActiveTab('training')}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === 'training'
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-400/30'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-2">
                  <BookOpen size={16} />
                  <span className="font-medium">Current Training</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('certifications')}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === 'certifications'
                    ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Award size={16} />
                  <span className="font-medium">Certifications</span>
                </div>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8">
            {activeTab === 'training' 
              ? trainings.map((training, index) => (
                  <TrainingCard key={index} item={training} index={index} type="training" />
                ))
              : certifications.map((cert, index) => (
                  <CertificationCard key={cert.id} cert={cert} index={index} />
                ))
            }
          </div>

          {/* Learning Stats */}
          <div className={`mt-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <div className="glass-card bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 border-2 border-white/20">
              <div className="text-center mb-8">
                <h3 className="heading-sm text-white mb-2">Learning Journey</h3>
                <p className="body-sm text-white/70">Continuous growth through structured learning</p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold gradient-text">2</div>
                  <div className="body-sm text-white/80">Active Trainings</div>
                  <div className="caption text-white/60">In Progress</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold gradient-text">2</div>
                  <div className="body-sm text-white/80">Certifications</div>
                  <div className="caption text-white/60">Completed</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold gradient-text">500+</div>
                  <div className="body-sm text-white/80">Learning Hours</div>
                  <div className="caption text-white/60">Total Time</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold gradient-text">15+</div>
                  <div className="body-sm text-white/80">New Skills</div>
                  <div className="caption text-white/60">Acquired</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
