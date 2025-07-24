import React from 'react';
import { Code, Layout, Server, Database, Wrench, BookOpen } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code size={24} />,
      skills: ["Java", "Python", "C", "C++", "PHP", "JavaScript"]
    },
    {
      title: "Frontend",
      icon: <Layout size={24} />,
      skills: ["HTML5", "CSS3", "Tailwind CSS", "React.js", "UI/UX", "Accessibility"]
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      skills: ["PHP", "Node.js", "Express.js", "RESTful APIs"]
    },
    {
      title: "Database",
      icon: <Database size={24} />,
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench size={24} />,
      skills: ["Git", "GitHub", "Visual Studio Code", "Agile Development"]
    },
    {
      title: "CS Concepts",
      icon: <BookOpen size={24} />,
      skills: ["Data Structures", "Algorithms", "OOP", "Debugging", "Distributed Systems"]
    }
  ];

  return (
    <section id="skills" className="pad-120" style={{ backgroundColor: 'var(--bg-page)' }}>
      <div className="container">
        <div className="mb-96">
          <p className="caption mb-20" style={{ color: 'var(--text-secondary)' }}>
            Technical Proficiencies
          </p>
          <h2 className="heading-1 mb-64">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-40">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="card-base group cursor-pointer"
                style={{ height: 'fit-content' }}
              >
                <div className="flex items-center gap-16 mb-24">
                  <div 
                    className="p-12 rounded-lg transition-colors duration-300"
                    style={{ 
                      backgroundColor: 'var(--secondary-olive)',
                      color: 'var(--brand-primary)'
                    }}
                  >
                    {category.icon}
                  </div>
                  <h3 className="heading-3">{category.title}</h3>
                </div>
                
                <div className="space-y-12">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center gap-12 py-8 px-16 rounded-lg transition-all duration-300 hover:transform hover:scale-105"
                      style={{ 
                        backgroundColor: 'var(--bg-page)',
                        border: '1px solid var(--border-light)'
                      }}
                    >
                      <div 
                        className="w-8 h-8 rounded-full"
                        style={{ backgroundColor: 'var(--brand-primary)' }}
                      />
                      <span className="body-small font-medium" style={{ color: 'var(--text-primary)' }}>
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;