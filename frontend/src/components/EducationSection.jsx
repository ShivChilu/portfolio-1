import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, MapPin, Calendar, Award, TrendingUp, Star } from 'lucide-react';

const EducationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      institution: "Lovely Professional University",
      degree: "B. Tech in Computer Science and Engineering",
      duration: "August 2023 - Present",
      location: "Jalandhar, Punjab",
      performance: "8.41 CGPA",
      type: "current",
      description: "Focused on advanced computer science concepts including algorithms, data structures, software engineering, and emerging technologies.",
      highlights: [
        "Specialized in Full-Stack Development",
        "Active member of Coding Club",
        "Participated in multiple hackathons",
        "Leadership role in team projects"
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
      accentColor: "text-blue-400"
    },
    {
      institution: "Narayana Junior College",
      degree: "Intermediate (Science Stream)",
      duration: "April 2021 – March 2023",
      location: "Hyderabad, Telangana",
      performance: "98.70%",
      type: "completed",
      description: "Completed higher secondary education with focus on Physics, Chemistry, and Mathematics, building strong analytical and problem-solving foundation.",
      highlights: [
        "Top 1% performance in state",

      ],
      gradient: "from-purple-500/20 to-pink-500/20",
      accentColor: "text-purple-400"
    }
  ];

  const EducationCard = ({ education, index, isLast }) => (
    <div className="relative">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-white/20 to-transparent lg:left-12"></div>
      )}
      
      <div className={`flex gap-6 lg:gap-8 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: `${index * 0.2}s` }}>
        {/* Timeline Icon */}
        <div className="flex-shrink-0">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${education.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20`}>
            <GraduationCap size={24} className={education.accentColor} />
          </div>
          {education.type === 'current' && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
          )}
        </div>
        
        {/* Content Card */}
        <div className="flex-1">
          <div className="glass-card hover-lift group">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  {education.type === 'current' && (
                    <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      Currently Studying
                    </div>
                  )}
                </div>
                
                <h3 className="heading-sm text-white group-hover:text-blue-400 transition-colors duration-300">
                  {education.institution}
                </h3>
                
                <p className="body-md text-white/90 font-medium">
                  {education.degree}
                </p>
                
                <div className="flex flex-wrap gap-4 text-white/60">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span className="body-sm">{education.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span className="body-sm">{education.location}</span>
                  </div>
                </div>
              </div>
              
              {/* Performance Badge */}
              <div className={`flex-shrink-0 p-4 rounded-xl bg-gradient-to-br ${education.gradient} text-center border border-white/20`}>
                <div className="flex items-center gap-2 mb-1">
                  <Award size={16} className={education.accentColor} />
                  <span className="caption text-white/80">PERFORMANCE</span>
                </div>
                <div className="text-xl font-bold text-white">
                  {education.performance}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="body-sm text-white/80 leading-relaxed mb-6">
              {education.description}
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              <h4 className="body-sm font-semibold text-white flex items-center gap-2">
                <Star size={16} className="text-yellow-400" />
                Key Highlights
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {education.highlights.map((highlight, hlIndex) => (
                  <div key={hlIndex} className="flex items-center gap-2 group/highlight">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover/highlight:scale-125 transition-transform duration-300"></div>
                    <span className="body-sm text-white/80 group-hover/highlight:text-white transition-colors duration-300">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Indicator for Current Education */}
            {education.type === 'current' && (
              <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="caption text-white/60">DEGREE PROGRESS</span>
                  <span className="caption text-white/60">Year 3 of 4</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: '75%' }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section 
      id="education" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-black to-gray-900/50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/6 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <p className="caption text-purple-400 mb-4 tracking-wider">
              ACADEMIC BACKGROUND
            </p>
            <h2 className="heading-lg text-white mb-6">
              Educational <span className="gradient-text">Journey</span>
            </h2>
            <p className="body-lg text-white/70 max-w-3xl mx-auto">
              Building a strong foundation through rigorous academic pursuits and continuous learning
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-12">
            {educationData.map((education, index) => (
              <EducationCard 
                key={index}
                education={education}
                index={index}
                isLast={index === educationData.length - 1}
              />
            ))}
          </div>

          {/* Academic Stats */}
          <div className={`mt-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <div className="glass-card bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border-2 border-white/20">
              <div className="text-center mb-8">
                <h3 className="heading-sm text-white mb-2">Academic Excellence</h3>
                <p className="body-sm text-white/70">Consistent performance and dedication to learning</p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold gradient-text">8.41</div>
                  <div className="body-sm text-white/80">Current CGPA</div>
                  <div className="caption text-white/60">Out of 10.0</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold gradient-text">98.7%</div>
                  <div className="body-sm text-white/80">12th Grade</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold gradient-text">2027</div>
                  <div className="body-sm text-white/80">Graduation Year</div>
                  <div className="caption text-white/60">B. Tech CSE</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold gradient-text">Top 5%</div>
                  <div className="body-sm text-white/80">Class Rank</div>
                  <div className="caption text-white/60">Academic Standing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
