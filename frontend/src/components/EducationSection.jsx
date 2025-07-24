import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const EducationSection = () => {
  const educationData = [
    {
      institution: "Lovely Professional University",
      degree: "B. Tech in Computer Science and Engineering",
      duration: "August 2023 - Present",
      location: "Jalandhar, Punjab",
      performance: "CGPA: 8.41",
      type: "current"
    },
    {
      institution: "Narayana Junior College",
      degree: "12th with Science",
      duration: "April 2021 – March 2023",
      location: "Hyderabad, Telangana",
      performance: "Percentage: 98.70%",
      type: "completed"
    }
  ];

  return (
    <section id="education" className="pad-120" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="container">
        <div className="mb-96">
          <p className="caption mb-20" style={{ color: 'var(--text-secondary)' }}>
            Education
          </p>
          <h2 className="heading-1 mb-64">
            Academic Journey
          </h2>
          
          <div className="space-y-48">
            {educationData.map((edu, index) => (
              <div 
                key={index} 
                className="relative"
              >
                {/* Timeline Line */}
                {index < educationData.length - 1 && (
                  <div 
                    className="absolute left-24 top-96 w-0.5 h-48"
                    style={{ backgroundColor: 'var(--border-medium)' }}
                  />
                )}
                
                <div className="flex gap-32">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0">
                    <div 
                      className={`w-48 h-48 rounded-full flex items-center justify-center ${
                        edu.type === 'current' ? 'bg-brand-primary' : 'bg-border-medium'
                      }`}
                      style={{ 
                        backgroundColor: edu.type === 'current' ? 'var(--brand-primary)' : 'var(--border-medium)' 
                      }}
                    >
                      <GraduationCap 
                        size={20} 
                        style={{ 
                          color: edu.type === 'current' ? 'var(--text-inverse)' : 'var(--text-primary)' 
                        }} 
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div 
                      className="card-base p-40"
                      style={{ marginBottom: '0' }}
                    >
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-24">
                        <div className="flex-1">
                          <h3 className="heading-3 mb-12">{edu.institution}</h3>
                          <p className="body-medium mb-16" style={{ color: 'var(--text-primary)' }}>
                            {edu.degree}
                          </p>
                          
                          <div className="flex flex-wrap gap-32 mb-20">
                            <div className="flex items-center gap-8">
                              <Calendar size={16} style={{ color: 'var(--text-secondary)' }} />
                              <span className="body-small">{edu.duration}</span>
                            </div>
                            <div className="flex items-center gap-8">
                              <MapPin size={16} style={{ color: 'var(--text-secondary)' }} />
                              <span className="body-small">{edu.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div 
                            className="inline-block px-20 py-8 rounded-full"
                            style={{ 
                              backgroundColor: 'var(--secondary-olive)', 
                              color: 'var(--text-primary)' 
                            }}
                          >
                            <span className="body-small font-semibold">{edu.performance}</span>
                          </div>
                        </div>
                      </div>
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

export default EducationSection;