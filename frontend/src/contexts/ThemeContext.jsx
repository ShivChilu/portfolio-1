import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Update CSS custom properties based on theme
    const root = document.documentElement;
    
    if (isDark) {
      // Dark theme colors
      root.style.setProperty('--bg-primary', '#0f0f11');
      root.style.setProperty('--bg-secondary', '#1a1a1d');
      root.style.setProperty('--bg-tertiary', '#252528');
      root.style.setProperty('--bg-glass', 'rgba(255, 255, 255, 0.05)');
      root.style.setProperty('--bg-card', 'rgba(255, 255, 255, 0.03)');
      
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#a1a1aa');
      root.style.setProperty('--text-muted', '#71717a');
      
      root.style.setProperty('--border-color', 'rgba(255, 255, 255, 0.1)');
      root.style.setProperty('--border-hover', 'rgba(255, 255, 255, 0.2)');
      
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      // Light theme colors
      root.style.setProperty('--bg-primary', '#ffffff');
      root.style.setProperty('--bg-secondary', '#f8fafc');
      root.style.setProperty('--bg-tertiary', '#f1f5f9');
      root.style.setProperty('--bg-glass', 'rgba(0, 0, 0, 0.05)');
      root.style.setProperty('--bg-card', 'rgba(0, 0, 0, 0.03)');
      
      root.style.setProperty('--text-primary', '#1e293b');
      root.style.setProperty('--text-secondary', '#64748b');
      root.style.setProperty('--text-muted', '#94a3b8');
      
      root.style.setProperty('--border-color', 'rgba(0, 0, 0, 0.1)');
      root.style.setProperty('--border-hover', 'rgba(0, 0, 0, 0.2)');
      
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }

    // Save theme preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const value = {
    isDark,
    toggleTheme,
    theme: isDark ? 'dark' : 'light'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};