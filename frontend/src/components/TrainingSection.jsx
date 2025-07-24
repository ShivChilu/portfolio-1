import React from 'react';
import { BookOpen, Calendar, Award, ExternalLink } from 'lucide-react';

const TrainingSection = () => {
  const trainings = [
    {
      title: "Data Structures and Algorithms Training",
      provider: "Cipher Schools",
      duration: "June 2025 - Present",
      status: "In Progress",
      type: "training",
      description: [
        "Pursuing an in-depth DSA course covering core concepts like arrays, linked lists, trees and graphs.",
        "Enhancing time and space complexity analysis skills to build efficient solutions for technical interviews and real-world applications."
      ]
    },
    {
      title: "Full Stack Development Training",
      provider: "Apna College",
      duration: "October 2024 - Present",
      status: "In Progress",
      type: "training",
      description: [
        "Learning full stack development through a project-based curriculum focused on modern web technologies.",
        "Developing responsive web applications using HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.",
        "Gaining expertise in Git, GitHub, API integration, deployment, and full-stack best practices."
      ]
    }
  ];

  const certifications = [
    {
      title: "Cloud Computing",
      provider: "NPTEL",
      completion: "April 2025",
      status: "Completed",
      type: "certification"
    },
    {
      title: "Introduction to Hardware and Operating Systems",
      provider: "IBM",
      completion: "September 2024",
      status: "Completed",
      type: "certification"
    }
  ];

  const allItems = [...trainings, ...certifications];

  return (
    <section className="pad-120" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="container">
        <div className="mb-96">
          <p className="caption mb-20" style={{ color: 'var(--text-secondary)' }}>
            Continuous Learning
          </p>
          <h2 className="heading-1 mb-64">
            Training & Certifications
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-40">
            {/* Training Section */}
            <div>
              <h3 className="heading-2 mb-40" style={{ fontSize: '1.5rem', marginBottom: '32px' }}>
                Current Training
              </h3>
              <div className="space-y-32">
                {trainings.map((training, index) => (
                  <div 
                    key={index}
                    className="p-32 rounded-lg border transition-all duration-300 hover:transform hover:scale-102"
                    style={{ 
                      backgroundColor: 'var(--bg-page)', 
                      borderColor: 'var(--border-medium)'
                    }}
                  >
                    <div className="flex items-start justify-between mb-20">
                      <div className="flex items-center gap-16">
                        <div 
                          className="p-12 rounded-lg"
                          style={{ backgroundColor: 'var(--secondary-olive)', color: 'var(--brand-primary)' }}
                        >
                          <BookOpen size={20} />
                        </div>
                        <div>
                          <h4 className="heading-3" style={{ fontSize: '1.1rem', marginBottom: '4px' }}>
                            {training.title}
                          </h4>
                          <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                            {training.provider}
                          </p>
                        </div>
                      </div>
                      <span 
                        className="px-12 py-6 rounded-full caption"
                        style={{ 
                          backgroundColor: 'var(--brand-primary)', 
                          color: 'var(--text-inverse)' 
                        }}
                      >
                        {training.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-8 mb-16">
                      <Calendar size={16} style={{ color: 'var(--text-secondary)' }} />
                      <span className="body-small">{training.duration}</span>
                    </div>
                    
                    <ul className="space-y-8">
                      {training.description.map((desc, descIndex) => (
                        <li key={descIndex} className="flex gap-12">
                          <div 
                            className="w-6 h-6 rounded-full mt-6 flex-shrink-0"
                            style={{ backgroundColor: 'var(--brand-primary)' }}
                          />
                          <span className="body-small" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            {desc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div>
              <h3 className="heading-2 mb-40" style={{ fontSize: '1.5rem', marginBottom: '32px' }}>
                Certifications
              </h3>
              <div className="space-y-32">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="p-32 rounded-lg border transition-all duration-300 hover:transform hover:scale-102"
                    style={{ 
                      backgroundColor: 'var(--bg-page)', 
                      borderColor: 'var(--border-medium)'
                    }}
                  >
                    <div className="flex items-start justify-between mb-20">
                      <div className="flex items-center gap-16">
                        <div 
                          className="p-12 rounded-lg"
                          style={{ backgroundColor: 'var(--secondary-olive)', color: 'var(--brand-primary)' }}
                        >
                          <Award size={20} />
                        </div>
                        <div>
                          <h4 className="heading-3" style={{ fontSize: '1.1rem', marginBottom: '4px' }}>
                            {cert.title}
                          </h4>
                          <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                            {cert.provider}
                          </p>
                        </div>
                      </div>
                      <span 
                        className="px-12 py-6 rounded-full caption"
                        style={{ 
                          backgroundColor: 'var(--secondary-olive)', 
                          color: 'var(--text-primary)' 
                        }}
                      >
                        {cert.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-8">
                        <Calendar size={16} style={{ color: 'var(--text-secondary)' }} />
                        <span className="body-small">{cert.completion}</span>
                      </div>
                      <button className="flex items-center gap-8 px-16 py-8 rounded-full hover:transform hover:scale-105 transition-all duration-300" style={{ backgroundColor: 'var(--border-medium)', color: 'var(--text-primary)' }}>
                        <ExternalLink size={14} />
                        <span className="caption">View</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;