import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pad-120" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="container">
        {/* Back to Top Button */}
        <div className="flex justify-center mb-64">
          <button
            onClick={scrollToTop}
            className="p-16 rounded-full transition-all duration-300 hover:transform hover:scale-110"
            style={{ 
              backgroundColor: 'var(--brand-primary)', 
              color: 'var(--text-inverse)',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <ArrowUp size={24} />
          </button>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-64 mb-64">
          {/* Brand Section */}
          <div>
            <div className="mb-24">
              <h3 className="heading-2" style={{ fontSize: '1.5rem', marginBottom: '16px' }}>
                Shiva Prasad
              </h3>
              <p className="body-small mb-16" style={{ color: 'var(--text-secondary)' }}>
                Computer Science Student & Aspiring Software Engineer
              </p>
              <p className="caption" style={{ color: 'var(--text-secondary)' }}>
                Passionate about building scalable solutions and solving complex problems.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="heading-3 mb-24" style={{ fontSize: '1rem' }}>
              Quick Links
            </h4>
            <div className="space-y-12">
              {[
                { label: 'About', section: 'about' },
                { label: 'Education', section: 'education' },
                { label: 'Skills', section: 'skills' },
                { label: 'Projects', section: 'projects' },
                { label: 'Contact', section: 'contact' }
              ].map((link, index) => (
                <button
                  key={index}
                  onClick={() => {
                    document.getElementById(link.section)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-left hover:underline transition-colors duration-300 caption"
                  style={{ 
                    color: 'var(--text-secondary)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px 0'
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Summary */}
          <div>
            <h4 className="heading-3 mb-24" style={{ fontSize: '1rem' }}>
              Get In Touch
            </h4>
            <div className="space-y-12">
              <p className="caption" style={{ color: 'var(--text-secondary)' }}>
                chiluverushivaprasad02@gmail.com
              </p>
              <p className="caption" style={{ color: 'var(--text-secondary)' }}>
                +91 7986955634
              </p>
              <p className="caption" style={{ color: 'var(--text-secondary)' }}>
                Hyderabad, Telangana, India
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div 
          className="pt-32 border-t text-center"
          style={{ borderColor: 'var(--border-medium)' }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-16">
            <p className="caption" style={{ color: 'var(--text-secondary)' }}>
              © {currentYear} Shiva Prasad. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <p className="caption" style={{ color: 'var(--text-secondary)' }}>
                Built with
              </p>
              <Heart size={14} style={{ color: 'var(--brand-primary)' }} />
              <p className="caption" style={{ color: 'var(--text-secondary)' }}>
                using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;