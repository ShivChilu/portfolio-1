import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Check, Copy } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [copied, setCopied] = useState(false);

  const showNotification = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    showNotification('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Mock Express.js post endpoint simulation
    setTimeout(() => {
      setIsSubmitting(false);
      showNotification('Message sent successfully! (Simulated)');
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200/50 dark:border-zinc-800/50 transition-colors duration-300 relative"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="space-y-3 mb-16 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Let's Collaborate
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl text-sm">
            Have a project in mind, an internship opening, or just want to grab a coffee? Drop a line below.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
              Get in Touch
            </h3>

            {/* Email Copy Card */}
            <div className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/30 flex justify-between items-center group shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Mail className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-zinc-400">Email Address</div>
                  <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{personalInfo.email}</div>
                </div>
              </div>

              <button
                onClick={copyEmail}
                className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Meta Info List */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <Phone className="w-4 h-4 text-zinc-400" />
                <span>{personalInfo.phone}</span>
              </div>

              {personalInfo.location && (
                <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                  <MapPin className="w-4 h-4 text-zinc-400" />
                  <span>{personalInfo.location}</span>
                </div>
              )}
            </div>

            {/* Socials Connection */}
            <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Connect Online</h4>
              <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-sm font-semibold text-zinc-700 dark:text-zinc-300 transition-all shadow-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-sm font-semibold text-zinc-700 dark:text-zinc-300 transition-all shadow-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-905 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-850 rounded-xl text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                  {errors.name && <p className="text-[10px] text-red-500">{errors.name}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-850 rounded-xl text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                  {errors.email && <p className="text-[10px] text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-850 rounded-xl text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                />
                {errors.message && <p className="text-[10px] text-red-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-zinc-950 dark:bg-zinc-50 hover:bg-zinc-850 dark:hover:bg-zinc-200 text-white dark:text-zinc-950 font-bold text-sm transition-all duration-200 shadow-md hover:-translate-y-0.5 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Floating Toast Notification */}
      <div 
        className={`fixed bottom-6 left-6 px-4 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl text-xs font-bold shadow-2xl z-[999] transition-all duration-300 flex items-center gap-2 ${
          showToast ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        <span>{toastMessage}</span>
      </div>

    </section>
  );
};

export default ContactSection;