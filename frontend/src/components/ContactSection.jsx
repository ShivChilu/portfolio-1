import React, { useEffect, useRef, useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink, 
  Send,
  MessageCircle,
  Calendar
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { isDark } = useTheme();

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

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "chiluverushivaprasad02@gmail.com",
      href: "mailto:chiluverushivaprasad02@gmail.com",
      type: "email",
      gradient: "from-blue-500/20 to-cyan-500/20",
      accentColor: "text-blue-400"
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+91 7986955634",
      href: "tel:+917986955634",
      type: "phone",
      gradient: "from-green-500/20 to-emerald-500/20",
      accentColor: "text-green-400"
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Hyderabad, Telangana, India",
      href: null,
      type: "location",
      gradient: "from-purple-500/20 to-pink-500/20",
      accentColor: "text-purple-400"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      username: "@shiva01",
      value: "Connect professionally",
      href: "https://www.linkedin.com/in/shiva01/",
      gradient: "from-blue-600/20 to-blue-400/20",
      accentColor: "text-blue-400",
      stats: "500+ connections"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      username: "@ShivChilu",
      value: "View my code",
      href: "https://github.com/ShivChilu/",
      gradient: "from-gray-600/20 to-gray-400/20",
      accentColor: "text-gray-400",
      stats: "20+ repositories"
    }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className={`py-24 relative overflow-hidden ${isDark ? 'bg-gradient-to-br from-black to-gray-900/50' : 'bg-gradient-to-br from-gray-50 to-white'}`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${isDark ? 'bg-blue-500/5' : 'bg-blue-500/10'} rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-72 h-72 ${isDark ? 'bg-purple-500/5' : 'bg-purple-500/10'} rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <p className="caption text-cyan-400 mb-4 tracking-wider">
              GET IN TOUCH
            </p>
            <h2 className="heading-lg mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="body-lg max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Ready to bring innovative ideas to life? I'm actively seeking Summer 2026 internship opportunities 
              and always excited to discuss new projects and collaborations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Contact Information */}
            <div className={`space-y-8 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              {/* Availability Status */}
              <div className="glass-card bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-2 border-green-400/20">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="heading-sm mb-2">Available for Opportunities</h3>
                    <p className="body-sm" style={{ color: 'var(--text-secondary)' }}>
                      Actively seeking <span className="text-green-400 font-medium">Summer 2026</span> internship positions
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <h3 className="heading-sm">Contact Information</h3>
                {contactInfo.map((contact, index) => (
                  <div 
                    key={index}
                    className="glass-card hover-lift group cursor-pointer"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-6">
                      <div className={`flex-shrink-0 p-4 rounded-xl bg-gradient-to-br ${contact.gradient} ${contact.accentColor} group-hover:scale-110 transition-transform duration-300`}>
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="body-sm font-medium mb-1" style={{ color: 'var(--text-secondary)' }}>{contact.label}</p>
                            {contact.href ? (
                              <a 
                                href={contact.href}
                                className="body-md hover:text-blue-400 transition-colors duration-300 group-hover:underline"
                                style={{ color: 'var(--text-primary)' }}
                              >
                                {contact.value}
                              </a>
                            ) : (
                              <p className="body-md" style={{ color: 'var(--text-primary)' }}>{contact.value}</p>
                            )}
                          </div>
                          {contact.href && (
                            <ExternalLink size={16} className="group-hover:text-white/80 transition-colors duration-300" style={{ color: 'var(--text-muted)' }} />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <h3 className="heading-sm">Find Me Online</h3>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block glass-card hover-lift group"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className={`flex-shrink-0 p-4 rounded-xl bg-gradient-to-br ${social.gradient} ${social.accentColor} group-hover:scale-110 transition-transform duration-300`}>
                          {social.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <p className="body-md font-semibold" style={{ color: 'var(--text-primary)' }}>{social.label}</p>
                            <span className="caption" style={{ color: 'var(--text-secondary)' }}>{social.username}</span>
                          </div>
                          <p className="body-sm" style={{ color: 'var(--text-secondary)' }}>{social.value}</p>
                          <p className="caption" style={{ color: 'var(--text-muted)' }}>{social.stats}</p>
                        </div>
                      </div>
                      <ExternalLink size={16} className="group-hover:scale-110 transition-all duration-300" style={{ color: 'var(--text-muted)' }} />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Contact Form & CTA */}
            <div className={`space-y-8 ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              {/* Quick Contact Options */}
              <div className="glass-card">
                <h3 className="heading-sm mb-6">Quick Connect</h3>
                <div className="grid gap-4">
                  <a 
                    href="mailto:chiluverushivaprasad02@gmail.com"
                    className="btn-primary group w-full"
                  >
                    <Mail size={16} />
                    Send Email
                    <Send size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/shiva01/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary group w-full"
                  >
                    <Linkedin size={16} />
                    Connect on LinkedIn
                    <ExternalLink size={16} className="group-hover:scale-110 transition-transform duration-300" />
                  </a>

                  <button className="btn-secondary group w-full">
                    <Calendar size={16} />
                    Schedule a Call
                    <MessageCircle size={16} className="group-hover:bounce transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Collaboration CTA */}
              <div className="glass-card bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border-2" style={{ borderColor: 'var(--border-hover)' }}>
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto">
                    <MessageCircle size={32} className="text-blue-400" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="heading-sm">Ready to Collaborate?</h3>
                    <p className="body-md leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      Whether you're looking for a dedicated intern, have an exciting project in mind, 
                      or just want to discuss the latest in tech, I'd love to hear from you!
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-4" style={{ color: 'var(--text-secondary)' }}>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="caption">Usually responds within 24h</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievement Highlight */}
              <div className="glass-card">
                <h4 className="body-md font-semibold mb-4">What I Bring to the Table</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="body-sm" style={{ color: 'var(--text-secondary)' }}>150+ DSA problems solved with optimization focus</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="body-sm" style={{ color: 'var(--text-secondary)' }}>2 production-ready full-stack applications built</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="body-sm" style={{ color: 'var(--text-secondary)' }}>Team leadership and collaborative development experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="body-sm" style={{ color: 'var(--text-secondary)' }}>Passionate about learning and implementing new technologies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;