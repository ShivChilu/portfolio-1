import React from 'react';
import { Code2, Target, Users } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code2 size={32} />,
      title: "Full-Stack Development",
      description: "Experienced in building scalable web applications using modern technologies like React, Node.js, and MongoDB."
    },
    {
      icon: <Target size={32} />,
      title: "Problem Solving",
      description: "Solved 150+ algorithmic problems on LeetCode with focus on time and space complexity optimization."
    },
    {
      icon: <Users size={32} />,
      title: "Team Leadership",
      description: "Led development teams and collaborated on version control using GitHub in project-based environments."
    }
  ];

  return (
    <section id="about" className="pad-120" style={{ backgroundColor: 'var(--bg-page)' }}>
      <div className="container">
        <div className="mb-96">
          <p className="caption mb-20" style={{ color: 'var(--text-secondary)' }}>
            About Me
          </p>
          <h2 className="heading-1 mb-40">
            Passionate Developer Building Tomorrow's Solutions
          </h2>
          <div className="grid lg:grid-cols-2 gap-96">
            <div>
              <p className="body-medium mb-32" style={{ color: 'var(--text-primary)' }}>
                Computer Science student graduating in 2027 with hands-on experience in scalable 
                full-stack development, distributed systems, and object-oriented programming using 
                Java, C++, Python, and JavaScript.
              </p>
              <p className="body-small mb-40" style={{ color: 'var(--text-secondary)' }}>
                Seeking a Summer 2026 Software Engineering Internship to contribute to impactful, 
                high-performance systems and grow through global team collaboration and mentorship. 
                I thrive on solving complex problems and building user-centered applications.
              </p>
              <button className="btn-primary">
                Let's Connect
              </button>
            </div>
            <div className="space-y-40">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex gap-24">
                  <div 
                    className="flex-shrink-0 p-16 rounded-lg"
                    style={{ backgroundColor: 'var(--bg-card)', color: 'var(--brand-primary)' }}
                  >
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="heading-3 mb-12">{highlight.title}</h3>
                    <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;