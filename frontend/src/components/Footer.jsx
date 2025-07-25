import React, { useState } from 'react';
import { ArrowUp, Heart, Mail, Linkedin, Github, MapPin, Code, Coffee } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { isDark } = useTheme();

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', section: 'about' },
    { label: 'Experience', section: 'education' },
    { label: 'Skills', section: 'skills' },
    { label: 'Projects', section: 'projects' },
    { label: 'Contact', section: 'contact' }
  ];

  const socialLinks = [
    {
      icon: <Mail size={20} />,
      href: 'mailto:chiluverushivaprasad02@gmail.com',
      label: 'Email',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/shiva01/',
      label: 'LinkedIn',
      gradient: 'from-blue-600 to-blue-400'
    },
    {
      icon: <Github size={20} />,
      href: 'https://github.com/ShivChilu/',
      label: 'GitHub',
      gradient: 'from-gray-600 to-gray-400'
    }
  ];

  return (
    <footer className={`relative border-t overflow-hidden ${isDark ? 'bg-gradient-to-br from-black to-gray-900/50' : 'bg-gradient-to-br from-gray-50 to-white'}`} style={{ borderColor: 'var(--border-color)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 left-1/4 w-64 h-64 ${isDark ? 'bg-blue-500/5' : 'bg-blue-500/10'} rounded-full blur-3xl`}></div>
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 ${isDark ? 'bg-purple-500/5' : 'bg-purple-500/10'} rounded-full blur-3xl`}></div>
      </div>

      <div className="container relative z-10">
        {/* Back to Top Button */}
        {showScrollTop && (
          <div className="flex justify-center py-8">
            <button
              onClick={scrollToTop}
              className="group p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-filter backdrop-blur-md rounded-2xl border hover:scale-110 transition-all duration-300"
              style={{ borderColor: 'var(--border-color)' }}
            >
              <ArrowUp size={24} className="group-hover:text-blue-400 transition-colors duration-300" style={{ color: 'var(--text-primary)' }} />
            </button>
          </div>
        )}

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <h3 className="heading-md gradient-text">Shiva Prasad</h3>
                <p className="body-lg font-medium" style={{ color: 'var(--text-primary)' }}>
                  Computer Science Student & Aspiring Software Engineer
                </p>
                <p className="body-md leading-relaxed max-w-md" style={{ color: 'var(--text-secondary)' }}>
                  Passionate about building scalable solutions, solving complex problems, 
                  and creating meaningful impact through technology. Always learning, always growing.
                </p>
              </div>

              {/* Personal Motto */}
              <div className="glass-card max-w-md bg-gradient-to-r from-blue-500/10 to-purple-500/10 border" style={{ borderColor: 'var(--border-color)' }}>
                <div className="flex items-center gap-3">
                  <Code size={20} className="text-blue-400" />
                  <p className="body-sm italic" style={{ color: 'var(--text-secondary)' }}>
                    "Code with purpose, learn with passion, build with impact."
                  </p>
                </div>
              </div>

              {/* Current Status */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-full border border-green-400/30">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="caption font-medium">Available for Summer 2026 Internships</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="heading-sm">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.section)}
                    className="block text-left w-full px-3 py-2 rounded-lg transition-all duration-300 body-sm hover:bg-white/5"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact & Social */}
            <div className="space-y-6">
              <h4 className="heading-sm">Get In Touch</h4>
              
              {/* Contact Info */}
              <div className="space-y-3" style={{ color: 'var(--text-secondary)' }}>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-blue-400" />
                  <span className="body-sm">chiluverushivaprasad02@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-purple-400" />
                  <span className="body-sm">Hyderabad, Telangana, India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <p className="body-sm font-medium" style={{ color: 'var(--text-primary)' }}>Follow Me</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border hover:scale-110 transition-all duration-300 group"
                      style={{ 
                        backgroundColor: 'var(--bg-glass)', 
                        borderColor: 'var(--border-color)',
                        color: 'var(--text-primary)'
                      }}
                      title={social.label}
                    >
                      <span className="group-hover:text-blue-400 transition-colors duration-300">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

     {/* Bottom Bar */}
<div className="py-8 border-t" style={{ borderColor: 'var(--border-color)' }}>
  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
    {/* Copyright */}
    <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
      <span className="body-sm">© {currentYear} Shiva Prasad. All rights reserved.</span>
    </div>

    {/* Made With Love */}
    <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
      <span className="body-sm">Built with</span>
      <Heart size={14} className="text-red-400 animate-pulse" />
      <span className="body-sm">using React, Tailwind CSS & modern web technologies</span>
    </div>

    {/* Fun Stats */}
    <div className="flex items-center gap-2">
      <Code size={14} />
      <span className="caption">150+ problems solved</span>
    </div>
  </div>
</div>  ✅ Correctly closed here


      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
          >
            <ArrowUp size={20} className="text-white" />
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
