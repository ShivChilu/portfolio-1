import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, Award, Calendar, ExternalLink, CheckCircle, Clock, Zap } from 'lucide-react';

const TrainingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('training');
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
      progress: 75,
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
      progress: 85,
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
      title: "Cloud Computing",
      provider: "NPTEL",
      completion: "April 2025",
      status: "Completed",
      description: "Comprehensive study of cloud computing fundamentals, services, and deployment strategies.",
      grade: "Elite",
      credentialId: "NPTEL25CS001",
      skills: ["AWS", "Cloud Architecture", "Distributed Systems"],
      gradient: "from-green-500/20 to-emerald-500/20",
      accentColor: "text-green-400"
    },
    {
      title: "Introduction to Hardware and Operating Systems",
      provider: "IBM",
      completion: "September 2024",
      status: "Completed",
      description: "Fundamental concepts of computer hardware, operating systems, and system administration.",
      grade: "Distinction",
      credentialId: "IBM24HW002",
      skills: ["Operating Systems", "Hardware", "System Admin"],
      gradient: "from-orange-500/20 to-red-500/20",
      accentColor: "text-orange-400"
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

          {type === 'certification' && item.grade && (
            <div className={`text-center p-3 rounded-xl bg-gradient-to-br ${item.gradient} border border-white/20`}>
              <div className="body-sm font-bold text-white">{item.grade}</div>
              <div className="caption text-white/70">Grade</div>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="body-sm text-white/80 leading-relaxed">
          {item.description}
        </p>

        {/* Progress Bar for Training */}
        {type === 'training' && item.progress && (
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="caption text-white/60">COMPLETION PROGRESS</span>
              <span className="caption text-white/60">{item.progress}%</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
        )}

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

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          {type === 'certification' && (
            <>
              <button className="btn-secondary flex-1 text-sm py-2">
                <Award size={14} />
                View Certificate
              </button>
              <button className="btn-secondary flex-1 text-sm py-2">
                <ExternalLink size={14} />
                Verify
              </button>
            </>
          )}
          {type === 'training' && (
            <button className="btn-secondary w-full text-sm py-2">
              <ExternalLink size={14} />
              View Progress
            </button>
          )}
        </div>
      </div>
    </div>
  );

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
                  <TrainingCard key={index} item={cert} index={index} type="certification" />
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
