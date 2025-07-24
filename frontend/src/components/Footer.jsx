import React, { useState } from 'react';
import { ArrowUp, Heart, Mail, Linkedin, Github, MapPin, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

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
    <footer className="relative bg-gradient-to-br from-black to-gray-900/50 border-t border-white/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Back to Top Button */}
        {showScrollTop && (
          <div className="flex justify-center py-8">
            <button
              onClick={scrollToTop}
              className="group p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-filter backdrop-blur-md rounded-2xl border border-white/20 hover:scale-110 transition-all duration-300 hover:border-white/40"
            >
              <ArrowUp size={24} className="text-white group-hover:text-blue-400 transition-colors duration-300" />
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
                <p className="body-lg text-white/90 font-medium">
                  Computer Science Student & Aspiring Software Engineer
                </p>
                <p className="body-md text-white/70 leading-relaxed max-w-md">
                  Passionate about building scalable solutions, solving complex problems, 
                  and creating meaningful impact through technology. Always learning, always growing.
                </p>
              </div>

              {/* Personal Motto */}
              <div className="glass-card max-w-md bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/20">
                <div className="flex items-center gap-3">
                  <Code size={20} className="text-blue-400" />
                  <p className="body-sm text-white/80 italic">
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
              <h4 className="heading-sm text-white">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.section)}
                    className="block text-left w-full px-3 py-2 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 body-sm"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact & Social */}
            <div className="space-y-6">
              <h4 className="heading-sm text-white">Get In Touch</h4>
              
              {/* Contact Info */}
              <div className="space-y-3 text-white/70">
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
                <p className="body-sm font-medium text-white">Follow Me</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:scale-110 transition-all duration-300 group hover:border-white/40`}
                      title={social.label}
                    >
                      <span className="text-white group-hover:text-blue-400 transition-colors duration-300">
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
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-white/60">
              <span className="body-sm">© {currentYear} Shiva Prasad. All rights reserved.</span>
            </div>

            {/* Made With Love */}
            <div className="flex items-center gap-2 text-white/60">
              <span className="body-sm">Built with</span>
              <Heart size={14} className="text-red-400 animate-pulse" />
              <span className="body-sm">using React, Tailwind CSS & modern web technologies</span>
            </div>

            {/* Fun Stats */}
            <div className="flex items-center gap-6 text-white/50">
              <div className="flex items-center gap-2">
                <Coffee size={14} />
                <span className="caption">Powered by coffee</span>
              </div>
              <div className="flex items-center gap-2">
                <Code size={14} />
                <span className="caption">150+ problems solved</span>
              </div>
            </div>
          </div>
        </div>
      </div>

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