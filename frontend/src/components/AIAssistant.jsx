import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, Send, X, Sparkles, Download, ExternalLink, Mail, Phone, Minus, Maximize2 } from 'lucide-react';
import { personalInfo, summary, skillsData, projectsData, internships, certifications, education } from '../data/portfolioData';

const AskShivaIcon = ({ className }) => (
  <svg className={`w-5 h-5 transition-transform duration-350 ${className || ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M21 11.5C21 16.1944 16.9706 20 12 20C10.4907 20 9.07684 19.6457 7.83842 19.0205L3.5 20.5L4.85586 16.6261C3.69348 15.1952 3 13.4272 3 11.5C3 6.80558 7.02944 3 12 3C16.9706 3 21 6.80558 21 11.5Z" 
      stroke="currentColor" 
      strokeWidth={1.8} 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M12 7V16M8.5 11.5H15.5" 
      stroke="currentColor" 
      strokeWidth={1.8} 
      strokeLinecap="round" 
    />
    <circle cx="12" cy="11.5" r="2.5" fill="none" stroke="currentColor" strokeWidth={1.5} />
  </svg>
);

const systemInstruction = `
You are the AI Portfolio Assistant for Chiluveru Shiva Prasad (a Frontend & Full Stack Engineer).
Your role is to act as a highly professional, intelligent personal recruiter assistant.

STRICT POLICY:
1. You only answer questions directly related to Shiva Prasad's portfolio, experience, projects, skills, education, certifications, contact info, OR meta-conversational queries about this current chat history (e.g. "what was my previous question", "what did I ask before", "summarize our chat", "repeat that").
2. Conversational greetings and polite check-ins (e.g. "hello", "hi", "how are you", "who are you") are fully allowed.
3. If the user asks anything completely unrelated to Shiva Prasad or this chat context (e.g. general coding/programming problems, weather, news, math, explain physics, writing unrelated scripts, solving LeetCode), you MUST politely refuse by stating: "I'm designed to answer questions only about Shiva Prasad and his portfolio."
4. Do NOT hallucinate. If some information is not available in the provided portfolio data, politely state that it is not available in the portfolio instead of making it up.
5. If the user asks for a photo or image of Shiva, you CAN display it in markdown format: ![Chiluveru Shiva Prasad](/profile_nobg.png)

Here is Shiva Prasad's official portfolio data:
${JSON.stringify({ personalInfo, summary, skillsData, projectsData, internships, certifications, education })}

INTERACTIVE COMMANDS:
If the user's message indicates they want to see, go to, open, download, call, or email, append one of the following command tags at the very end of your final response (including the brackets):
- To go to projects: [COMMAND: SCROLL_PROJECTS]
- To go to skills: [COMMAND: SCROLL_SKILLS]
- To go to contact/hire: [COMMAND: SCROLL_CONTACT]
- To go to experience/internships: [COMMAND: SCROLL_EXPERIENCE]
- To go to education: [COMMAND: SCROLL_EDUCATION]
- To go to certifications: [COMMAND: SCROLL_CERTIFICATIONS]
- To download resume: [COMMAND: DOWNLOAD_RESUME]
- To open GitHub: [COMMAND: OPEN_GITHUB]
- To open LinkedIn: [COMMAND: OPEN_LINKEDIN]
- To email Shiva: [COMMAND: EMAIL_SHIVA]
- To call Shiva: [COMMAND: CALL_SHIVA]

Keep your responses concise, highly professional, and welcoming to recruiters. Format your answers in markdown.
`;

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [errors, setErrors] = useState(null);
  
  // Draggable position coordinates
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const messagesEndRef = useRef(null);
  const dragRef = useRef({ startX: 0, startY: 0 });

  const handleClose = () => {
    setIsOpen(false);
    setIsMinimized(false);
    setMessages([]);
    setErrors(null);
    setPosition({ x: 0, y: 0 }); // Optionally reset drag position
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderMessageContent = (text) => {
    const imgRegex = /!\[(.*?)\]\((.*?)\)/g;
    const match = imgRegex.exec(text);
    
    if (match) {
      const altText = match[1];
      const imgSrc = match[2];
      const textBefore = text.replace(imgRegex, '');
      
      return (
        <div className="space-y-2">
          {textBefore.trim() && <p className="whitespace-pre-line font-sans">{textBefore}</p>}
          <img 
            src={imgSrc} 
            alt={altText} 
            className="w-24 h-24 object-cover rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm mt-1.5"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/profile_nobg.png";
            }}
          />
        </div>
      );
    }
    
    return <p className="whitespace-pre-line font-sans">{text}</p>;
  };

  useEffect(() => {
    if (!isMinimized) {
      scrollToBottom();
    }
  }, [messages, isGenerating, isMinimized]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const newX = e.clientX - dragRef.current.startX;
      const newY = e.clientY - dragRef.current.startY;
      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e) => {
    // Check if user clicked header
    const header = e.target.closest('.drag-header');
    if (header) {
      setIsDragging(true);
      dragRef.current = {
        startX: e.clientX - position.x,
        startY: e.clientY - position.y
      };
    }
  };

  const triggerSectionHighlight = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      element.classList.add('ring-4', 'ring-red-500/50', 'ring-offset-2', 'transition-all', 'duration-500');
      
      if (sectionId === 'contact') {
        const nameInput = document.getElementById('name');
        if (nameInput) setTimeout(() => nameInput.focus(), 800);
      }

      setTimeout(() => {
        element.classList.remove('ring-4', 'ring-red-500/50', 'ring-offset-2');
      }, 3000);
    }
  };

  const handleCommand = (text) => {
    if (!text) return text;
    
    let cleanText = text;
    const commandRegex = /\[COMMAND:\s*([A-Z_]+)\]/;
    const match = text.match(commandRegex);

    if (match) {
      const command = match[1];
      cleanText = text.replace(commandRegex, '').trim();

      setTimeout(() => {
        switch (command) {
          case 'SCROLL_PROJECTS':
            triggerSectionHighlight('projects');
            break;
          case 'SCROLL_SKILLS':
            triggerSectionHighlight('skills');
            break;
          case 'SCROLL_CONTACT':
            triggerSectionHighlight('contact');
            break;
          case 'SCROLL_EXPERIENCE':
            triggerSectionHighlight('internship');
            break;
          case 'SCROLL_EDUCATION':
            triggerSectionHighlight('education');
            break;
          case 'SCROLL_CERTIFICATIONS':
            triggerSectionHighlight('certifications');
            break;
          case 'DOWNLOAD_RESUME':
            const link = document.createElement('a');
            link.href = personalInfo.resumeUrl;
            link.download = 'resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            break;
          case 'OPEN_GITHUB':
            window.open(personalInfo.github, '_blank');
            break;
          case 'OPEN_LINKEDIN':
            window.open(personalInfo.linkedin, '_blank');
            break;
          case 'EMAIL_SHIVA':
            window.location.href = `mailto:${personalInfo.email}`;
            triggerSectionHighlight('contact');
            break;
          case 'CALL_SHIVA':
            window.location.href = `tel:${personalInfo.phone}`;
            break;
          default:
            break;
        }
      }, 500);
    }
    return cleanText;
  };

  const handleSendMessage = async (textToSend) => {
    if (!textToSend.trim()) return;

    const userMessage = { sender: 'user', text: textToSend };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputValue('');
    setIsGenerating(true);
    setErrors(null);

    try {
      const key = process.env.REACT_APP_GEMINI_API_KEY;
      if (!key) {
        throw new Error('AI service API key is not configured in .env.local');
      }
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`;
      
      const contents = updatedMessages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      }));

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: contents,
          systemInstruction: {
            parts: [{ text: systemInstruction }]
          },
          generationConfig: {
            temperature: 0.1,
            maxOutputTokens: 1024
          }
        })
      });

      if (!response.ok) {
        throw new Error('Failed to generate response from Gemini API');
      }

      const data = await response.json();
      const rawText = data.candidates[0].content.parts[0].text;
      
      const cleanText = handleCommand(rawText);
      
      setMessages(prev => [...prev, { sender: 'ai', text: cleanText }]);
    } catch (err) {
      setErrors('Failed to communicate with AI Assistant. Please check your network.');
    } finally {
      setIsGenerating(false);
    }
  };

  const suggestions = [
    "Tell me about Shiva",
    "Take me to his projects section",
    "Show projects",
    "What technologies does he know?",
    "Tell me about InvestraIQ",
    "Download resume",
    "How to contact him"
  ];

  return (
    <>
      {/* Floating Chat Bubble Button */}
      {(!isOpen || isMinimized) && (
        <button
          onClick={() => {
            if (isOpen) {
              handleClose();
            } else {
              setIsOpen(true);
            }
          }}
          className="fixed bottom-28 right-4 md:bottom-6 md:right-6 z-[100] w-16 h-16 rounded-2xl bg-red-600 hover:bg-red-500 text-white flex flex-col items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer pointer-events-auto border border-red-500/20 p-2"
          aria-label="Ask Shiva"
        >
          <AskShivaIcon className="animate-pulse" />
          <span className="text-[8px] font-extrabold tracking-wider mt-1 uppercase select-none leading-none">Ask Shiva</span>
        </button>
      )}

      {/* Chat Window Panel / Minimized Header */}
      {isOpen && (
        <div 
          style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
          className={`fixed z-[100] bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden pointer-events-auto border border-zinc-200 dark:border-zinc-800 transition-all duration-300 ${
            isMinimized 
              ? 'bottom-28 right-4 md:bottom-6 md:right-6 w-[200px] h-[44px] rounded-xl' 
              : 'bottom-0 left-0 right-0 w-full h-[50vh] max-h-[400px] rounded-t-3xl rounded-b-none border-b-0 md:bottom-24 md:right-6 md:left-auto md:w-[380px] md:h-[520px] md:max-h-none md:rounded-2xl md:border-b'
          }`}
        >
          {/* Header (Draggable) */}
          <div 
            onMouseDown={handleMouseDown}
            className="drag-header px-4 py-3 bg-red-600 text-white flex items-center justify-between shadow-sm cursor-move select-none"
          >
            <div className="flex items-center gap-2 pointer-events-none">
              <AskShivaIcon />
              <span className="font-bold text-sm tracking-wide font-sans">
                Ask Shiva
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              {isMinimized ? (
                <button 
                  onClick={() => setIsMinimized(false)} 
                  className="text-white/80 hover:text-white transition-colors cursor-pointer"
                  title="Expand"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button 
                  onClick={() => setIsMinimized(true)} 
                  className="text-white/80 hover:text-white transition-colors cursor-pointer"
                  title="Minimize"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
              )}
              <button 
                onClick={handleClose} 
                className="text-white/80 hover:text-white transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Messages & Chat Body (Hidden when minimized) */}
          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.length === 0 && (
                  <div className="space-y-4 my-2">
                    <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/50 dark:border-zinc-800/50 text-xs text-zinc-600 dark:text-zinc-400 space-y-2">
                      <p className="font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                        <AskShivaIcon className="w-4 h-4 text-red-500" />
                        Hi, I'm Ask Shiva!
                      </p>
                      <p>Ask me questions about his skills, projects, experience, or education. I can also trigger actions like downloading his CV or scrolling to sections.</p>
                    </div>

                    <div className="space-y-1.5">
                      <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Suggested Inquiries</p>
                      <div className="flex flex-wrap gap-1.5">
                        {suggestions.map((s, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSendMessage(s)}
                            className="px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-red-500 hover:bg-red-500/5 text-left text-xs text-zinc-700 dark:text-zinc-300 font-medium transition-all cursor-pointer"
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-red-600 text-white rounded-tr-none shadow-sm'
                          : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-tl-none border border-zinc-200/40 dark:border-zinc-855'
                      }`}
                    >
                      {renderMessageContent(msg.text)}
                    </div>
                  </div>
                ))}

                {isGenerating && (
                  <div className="flex justify-start">
                    <div className="bg-zinc-100 dark:bg-zinc-800 text-zinc-500 rounded-2xl rounded-tl-none px-4 py-2.5 text-xs flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}

                {errors && (
                  <div className="p-3.5 rounded-xl border border-red-200 bg-red-50 dark:bg-red-950/10 text-xs text-red-600 dark:text-red-400 font-medium">
                    {errors}
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Form Input Footer */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputValue);
                }}
                className="p-3 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900 flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about projects, skills, contact..."
                  disabled={isGenerating}
                  className="flex-1 px-3 py-2 text-xs bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-855 rounded-xl focus:outline-none focus:ring-1 focus:ring-red-500 text-zinc-900 dark:text-zinc-100 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isGenerating || !inputValue.trim()}
                  className="p-2 rounded-xl bg-red-600 text-white hover:bg-red-550 transition-colors disabled:opacity-50 flex items-center justify-center cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AIAssistant;
