import React from 'react';
import { Trophy, Target, Zap, Users2 } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      icon: <Target size={32} />,
      title: "150+ DSA Problems",
      description: "Solved 150+ DSA problems on LeetCode and other platforms with a focus on time/space optimization.",
      metric: "150+",
      label: "Problems Solved"
    },
    {
      icon: <Zap size={32} />,
      title: "Performance Optimization",
      description: "Improved farmer tool efficiency by reducing planning time by 30% in a live-use case.",
      metric: "30%",
      label: "Time Reduction"
    },
    {
      icon: <Trophy size={32} />,
      title: "Cross-Platform Deployment",
      description: "Deployed full-stack apps across mobile and desktop browsers with 98% compatibility.",
      metric: "98%",
      label: "Compatibility"
    },
    {
      icon: <Users2 size={32} />,
      title: "Team Leadership",
      description: "Led a mini-team of 3 peers in project-based development and version control using GitHub.",
      metric: "3",
      label: "Team Members"
    }
  ];

  return (
    <section className="pad-120" style={{ backgroundColor: 'var(--bg-page)' }}>
      <div className="container">
        <div className="mb-96">
          <p className="caption mb-20" style={{ color: 'var(--text-secondary)' }}>
            Achievements
          </p>
          <h2 className="heading-1 mb-64">
            Key Accomplishments
          </h2>
          
          <div className="grid md:grid-cols-2 gap-40">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="card-base group"
                style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                <div className="flex items-start gap-24 mb-24">
                  <div 
                    className="flex-shrink-0 p-16 rounded-lg"
                    style={{ backgroundColor: 'var(--secondary-olive)', color: 'var(--brand-primary)' }}
                  >
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-3 mb-12">{achievement.title}</h3>
                    <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
                
                <div className="mt-auto pt-24 border-t" style={{ borderColor: 'var(--border-light)' }}>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="heading-2" style={{ color: 'var(--brand-primary)' }}>
                        {achievement.metric}
                      </div>
                      <p className="caption">{achievement.label}</p>
                    </div>
                    <div 
                      className="w-12 h-12 rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: 'var(--brand-primary)' }}
                    />
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

export default AchievementsSection;
