import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const bootSequence = [
    { text: "Booting system...", delay: 500 },
    { text: "Initializing portfolio...", delay: 800 },
    { text: "Access granted ✓", delay: 600 },
    { text: "", delay: 400 },
    { text: "Welcome to my portfolio", delay: 600 },
    { text: ">>> Shiva Prasad", delay: 500 },
    { text: ">>> Computer Science Student", delay: 500 },
    { text: ">>> Full Stack Developer", delay: 500 },
    { text: "", delay: 400 },
    { text: "System Ready 🚀", delay: 800 }
  ];

  useEffect(() => {
    if (currentLine < bootSequence.length) {
      const timer = setTimeout(() => {
        setLines(prev => [...prev, bootSequence[currentLine].text]);
        setCurrentLine(prev => prev + 1);
      }, bootSequence[currentLine].delay);

      return () => clearTimeout(timer);
    } else if (!isComplete) {
      // Wait a bit before fading out
      const completeTimer = setTimeout(() => {
        setIsComplete(true);
        setTimeout(() => {
          onComplete();
        }, 800);
      }, 1000);

      return () => clearTimeout(completeTimer);
    }
  }, [currentLine, isComplete, onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 transition-opacity duration-800 ${
        isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Terminal Window */}
      <div className="relative z-10 w-full max-w-3xl mx-4 animate-fadeInScale">
        {/* Terminal Container with Glow */}
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-2xl blur-sm opacity-75 animate-pulse"></div>
          
          {/* Terminal Window */}
          <div className="relative bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-cyan-400/50 shadow-2xl shadow-cyan-500/20 overflow-hidden">
            {/* Window Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/80 border-b border-cyan-400/30">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center text-xs text-white/60 font-mono">
                shiva@portfolio:~
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-8 font-mono text-sm min-h-[400px]">
              {lines.map((line, index) => (
                <div 
                  key={index}
                  className={`mb-3 ${
                    line.includes('Welcome') ? 'text-cyan-400 text-lg font-bold mt-6' :
                    line.includes('>>>') ? 'text-green-400 text-base' :
                    line.includes('System Ready') ? 'text-yellow-400 text-lg font-bold mt-4' :
                    line.includes('granted') ? 'text-green-400' :
                    'text-white/80'
                  }`}
                  style={{
                    animation: 'fadeIn 0.3s ease-out'
                  }}
                >
                  {line}
                  {index === lines.length - 1 && currentLine < bootSequence.length && (
                    <span className="inline-block w-2 h-4 ml-1 bg-cyan-400 animate-pulse"></span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
