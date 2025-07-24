import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "chiluverushivaprasad02@gmail.com",
      href: "mailto:chiluverushivaprasad02@gmail.com",
      type: "email"
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+91 7986955634",
      href: "tel:+917986955634",
      type: "phone"
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Hyderabad, Telangana, India",
      href: null,
      type: "location"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/shiva01",
      href: "https://www.linkedin.com/in/shiva01/",
      color: "#0073e6"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "github.com/ShivChilu",
      href: "https://github.com/ShivChilu/",
      color: "#333"
    }
  ];

  return (
    <section id="contact" className="pad-120" style={{ backgroundColor: 'var(--bg-page)' }}>
      <div className="container">
        <div className="mb-96">
          <p className="caption mb-20" style={{ color: 'var(--text-secondary)' }}>
            Get In Touch
          </p>
          <h2 className="heading-1 mb-64">
            Let's Connect
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-96">
            {/* Contact Information */}
            <div>
              <p className="body-medium mb-48" style={{ color: 'var(--text-primary)' }}>
                I'm actively seeking Summer 2026 Software Engineering Internship opportunities. 
                Let's discuss how I can contribute to your team and grow together.
              </p>
              
              <div className="space-y-32">
                <h3 className="heading-3" style={{ fontSize: '1.2rem', marginBottom: '24px' }}>
                  Contact Information
                </h3>
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-20">
                    <div 
                      className="flex-shrink-0 p-16 rounded-lg"
                      style={{ backgroundColor: 'var(--bg-card)', color: 'var(--brand-primary)' }}
                    >
                      {contact.icon}
                    </div>
                    <div>
                      <p className="caption mb-4">{contact.label}</p>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="body-small hover:underline transition-colors duration-300"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="body-small" style={{ color: 'var(--text-primary)' }}>
                          {contact.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links & Call to Action */}
            <div>
              <div className="space-y-48">
                <div>
                  <h3 className="heading-3" style={{ fontSize: '1.2rem', marginBottom: '24px' }}>
                    Find Me Online
                  </h3>
                  <div className="space-y-24">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-24 rounded-lg border transition-all duration-300 hover:transform hover:scale-105 group"
                        style={{ 
                          backgroundColor: 'var(--bg-card)', 
                          borderColor: 'var(--border-medium)',
                          textDecoration: 'none'
                        }}
                      >
                        <div className="flex items-center gap-20">
                          <div 
                            className="flex-shrink-0 p-12 rounded-lg"
                            style={{ backgroundColor: 'var(--secondary-olive)', color: 'var(--brand-primary)' }}
                          >
                            {social.icon}
                          </div>
                          <div>
                            <p className="body-small font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                              {social.label}
                            </p>
                            <p className="caption" style={{ color: 'var(--text-secondary)' }}>
                              {social.value}
                            </p>
                          </div>
                        </div>
                        <ExternalLink 
                          size={16} 
                          className="group-hover:transform group-hover:scale-110 transition-transform duration-300"
                          style={{ color: 'var(--text-secondary)' }}
                        />
                      </a>
                    ))}
                  </div>
                </div>

                <div 
                  className="p-40 rounded-lg text-center"
                  style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-medium)' }}
                >
                  <h3 className="heading-3 mb-20" style={{ fontSize: '1.2rem' }}>
                    Ready to Collaborate?
                  </h3>
                  <p className="body-small mb-32" style={{ color: 'var(--text-secondary)' }}>
                    I'm always open to discussing new opportunities, innovative projects, 
                    or just having a conversation about technology.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-16 justify-center">
                    <a 
                      href="mailto:chiluverushivaprasad02@gmail.com"
                      className="btn-primary"
                      style={{ textDecoration: 'none' }}
                    >
                      <Mail size={16} className="mr-8" />
                      Send Email
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/shiva01/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{ textDecoration: 'none' }}
                    >
                      <Linkedin size={16} className="mr-8" />
                      Connect on LinkedIn
                    </a>
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