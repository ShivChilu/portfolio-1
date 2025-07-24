import React, { useEffect, useRef, useState } from 'react';
import { Code2, Target, Users, Lightbulb, Rocket, Heart } from 'lucide-react';

const AboutSection = () => {
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

  const highlights = [
    {
      icon: <Code2 size={28} />,
      title: "Full-Stack Development",
      description: "Experienced in building scalable web applications using modern technologies like React, Node.js, and MongoDB with a focus on clean architecture.",
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400"
    },
    {
      icon: <Target size={28} />,
      title: "Problem Solving",
      description: "Solved 150+ algorithmic problems on LeetCode with focus on time and space complexity optimization. Love tackling complex challenges.",
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400"
    },
    {
      icon: <Users size={28} />,
      title: "Team Leadership",
      description: "Led development teams and collaborated on version control using GitHub in project-based environments with agile methodologies.",
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400"
    },
    {
      icon: <Lightbulb size={28} />,
      title: "Innovation Mindset",
      description: "Always exploring new technologies and approaches to create efficient, user-centered solutions that make a real difference.",
      color: "from-yellow-500/20 to-orange-500/20",
      iconColor: "text-yellow-400"
    }
  ];

  const personalTraits = [
    { trait: "Passionate", icon: <Heart size={16} />, color: "text-red-400" },
    { trait: "Innovative", icon: <Lightbulb size={16} />, color: "text-yellow-400" },
    { trait: "Collaborative", icon: <Users size={16} />, color: "text-blue-400" },
    { trait: "Driven", icon: <Rocket size={16} />, color: "text-purple-400" }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-900/50 to-black/50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-50"></div>
      
      <div className="container relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <p className="caption text-blue-400 mb-4 tracking-wider">
              GET TO KNOW ME
            </p>
            <h2 className="heading-lg text-white mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="body-lg text-white/70 max-w-3xl mx-auto">
              A passionate developer with a vision to build tomorrow's digital solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Personal Story */}
            <div className={`space-y-8 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="glass-card space-y-6">
                <h3 className="heading-sm text-white">My Journey</h3>
                
                <div className="space-y-4 text-white/80">
                  <p className="body-md leading-relaxed">
                    I'm a <span className="text-blue-400 font-semibold">Computer Science student</span> graduating in 2027, 
                    with hands-on experience in scalable full-stack development, distributed systems, and 
                    object-oriented programming using Java, C++, Python, and JavaScript.
                  </p>
                  
                  <p className="body-md leading-relaxed">
                    Currently seeking a <span className="text-purple-400 font-semibold">Summer 2026 Software Engineering Internship</span> 
                    to contribute to impactful, high-performance systems and grow through global team collaboration and mentorship.
                  </p>
                  
                  <p className="body-md leading-relaxed">
                    I thrive on solving complex problems and building user-centered applications that make a 
                    <span className="text-green-400 font-semibold"> real difference</span> in people's lives.
                  </p>
                </div>

                {/* Personal Traits */}
                <div className="flex flex-wrap gap-3 pt-4">
                  {personalTraits.map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    >
                      <span className={item.color}>{item.icon}</span>
                      <span className="text-white text-sm font-medium">{item.trait}</span>
                    </div>
                  ))}
                </div>

                <button className="btn-primary group">
                  Let's Connect
                  <Users size={16} className="group-hover:scale-110 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Right: Highlights Grid */}
            <div className={`space-y-6 ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="glass-card hover-lift group cursor-pointer"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="flex gap-6">
                    <div className={`flex-shrink-0 p-4 rounded-xl bg-gradient-to-br ${highlight.color} ${highlight.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      {highlight.icon}
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <h4 className="heading-sm text-white group-hover:text-blue-400 transition-colors duration-300">
                        {highlight.title}
                      </h4>
                      <p className="body-sm text-white/70 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className={`mt-16 text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <div className="glass-card max-w-4xl mx-auto bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border-2 border-white/20">
              <div className="space-y-6">
                <h3 className="heading-sm text-white">Ready to Build Something Amazing?</h3>
                <p className="body-md text-white/80 max-w-2xl mx-auto">
                  I'm always excited to discuss new opportunities, innovative projects, or just chat about the latest in tech. 
                  Let's create something extraordinary together!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn-primary">
                    View My Projects
                  </button>
                  <button className="btn-secondary">
                    Download Resume
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

export default AboutSection;