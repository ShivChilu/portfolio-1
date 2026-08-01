import { useEffect } from 'react';

export const useKeyboardShortcuts = ({ onToggleTheme, onFocusSearch }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore shortcut keys when typing in input/textarea/select elements
      const activeEl = document.activeElement;
      if (
        activeEl &&
        (activeEl.tagName === 'INPUT' ||
          activeEl.tagName === 'TEXTAREA' ||
          activeEl.contentEditable === 'true')
      ) {
        return;
      }

      const key = e.key.toLowerCase();

      // "T" key to toggle theme
      if (key === 't') {
        e.preventDefault();
        if (onToggleTheme) onToggleTheme();
      }

      // "/" key to focus search or navigation
      if (key === '/') {
        e.preventDefault();
        if (onFocusSearch) onFocusSearch();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onToggleTheme, onFocusSearch]);
};
