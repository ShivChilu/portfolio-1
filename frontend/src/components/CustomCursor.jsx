import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Detect if client is a touch device or mobile width
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(hasTouch || isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    // Track active interactions
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA';
      
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile]);

  // Trail physics interpolation
  useEffect(() => {
    if (isMobile || isHidden) return;

    let animationFrameId;
    
    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      animationFrameId = requestAnimationFrame(updateTrail);
    };

    animationFrameId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isMobile, isHidden]);

  if (isMobile || isHidden) return null;

  return (
    <>
      {/* Outer Ring */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 border border-zinc-950/20 dark:border-white/20 rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out will-change-transform ${
          isHovering ? 'scale-150 border-purple-500/50 bg-purple-500/5' : 'scale-100'
        }`}
        style={{
          transform: `translate3d(${trail.x}px, ${trail.y}px, 0)`,
        }}
      />
      {/* Inner Dot */}
      <div
        className={`fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] bg-zinc-950 dark:bg-white rounded-full pointer-events-none z-[9999] transition-transform duration-150 will-change-transform ${
          isHovering ? 'scale-75 bg-purple-500 dark:bg-purple-400' : 'scale-100'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
