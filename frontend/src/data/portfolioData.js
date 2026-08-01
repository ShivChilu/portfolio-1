// Centralized Portfolio Data for Shiva Prasad
// Modify this file to easily update text, skills, projects, and credentials.

export const personalInfo = {
  name: "Chiluveru Shiva Prasad",
  title: "Frontend & Full Stack Engineer",
  subtitle: "Building Premium Digital Experiences",
  location: "",
  phone: "+91 7986955634",
  email: "shivaprasad0914@gmail.com",
  linkedin: "https://www.linkedin.com/in/shiva01/",
  github: "https://github.com/ShivChilu/",
  resumeUrl: "/resume.pdf", // Add CV/Resume Link here
  graduationYear: "2027",
  cgpa: "8.25",
  heroStats: [
    { value: "8.25", label: "CGPA (LPU)" },
    { value: "2+", label: "Years Dev Experience" },
    { value: "3+", label: "Certifications" }
  ]
};

export const summary = {
  short: "Building software that solves real problems—not just projects that complete assignments.",
  long: "I'm Shiva Prasad, a Full Stack Developer and B.Tech Computer Science student at Lovely Professional University (Class of 2027). I build modern web applications with React, Node.js, Express.js, MySQL, MongoDB, and Tailwind CSS, with a growing focus on scalable backend systems, cloud technologies, and AI-powered products.",
  objective: "Beyond academics, I've delivered real client solutions through my startup Tivrox, developed end-to-end applications from idea to deployment, and earned the AWS Certified Cloud Practitioner certification. Every project I build is an opportunity to improve my engineering fundamentals, write cleaner code, and design systems that are reliable, maintainable, and user-focused. Today, I'm focused on becoming a software engineer who can contribute from day one in fast-paced product teams—building scalable applications, learning continuously, and turning ambitious ideas into production-ready software.",
  difference: [
    {
      title: "Design-Minded Engineering",
      description: "I don't just build functional backends; I bridge the gap between engineering and UI/UX to create fluid, premium user interfaces."
    },
    {
      title: "Optimized Problem Solving",
      description: "With 150+ DSA problems solved on LeetCode, I write clean code that respects space and time complexity constraints."
    },
    {
      title: "Full-Stack Adaptability",
      description: "Experienced in PHP/MySQL as well as modern MERN stacks, allowing me to adapt to diverse engineering cultures rapidly."
    }
  ]
};

export const skillsData = [
  // Frontend
  { name: "React.js", category: "Frontend", level: 90 },
  { name: "JavaScript (ES6+)", category: "Frontend", level: 95 },
  { name: "Tailwind CSS", category: "Frontend", level: 90 },
  { name: "HTML5 & CSS3", category: "Frontend", level: 95 },
  { name: "UI/UX & Design Systems", category: "Frontend", level: 85 },
  // Backend
  { name: "Node.js", category: "Backend", level: 80 },
  { name: "Express.js", category: "Backend", level: 85 },
  { name: "PHP", category: "Backend", level: 75 },
  { name: "RESTful APIs", category: "Backend", level: 90 },
  // Database
  { name: "MongoDB", category: "Database", level: 85 },
  { name: "MySQL", category: "Database", level: 80 },
  // Tools
  { name: "Git & GitHub", category: "Tools", level: 90 },
  { name: "VS Code", category: "Tools", level: 95 },
  // Cloud
  { name: "Vercel / Render", category: "Cloud", level: 85 },
  { name: "AWS Basics", category: "Cloud", level: 60 },
  // CS Fundamentals
  { name: "Data Structures", category: "CS Fundamentals", level: 90 },
  { name: "Algorithms", category: "CS Fundamentals", level: 85 },
  { name: "Object Oriented Programming (OOP)", category: "CS Fundamentals", level: 90 },
  { name: "Distributed Systems", category: "CS Fundamentals", level: 70 }
];

export const projectsData = [
  {
    id: "investra-iq",
    title: "Investra IQ",
    category: "AI & Securities Terminal",
    description: "InvestraIQ is a production-inspired, multi-agent securities research terminal designed to solve data fragmentation and AI hallucinations in equity analysis.",
    longDescription: "Built using React, Node.js, and Google Gemini 2.5 Flash, the platform coordinates parallel REST requests across Alpha Vantage, Tavily, and Serper APIs using Promise.all(). It resolves network latencies by optimizing search depth parameters and implements a custom in-memory and session-storage caching architecture. The system compiles deduplicated market contexts into a single-inference LLM call, simulating a debate among seven expert analyst personas. The clean, dark-themed dashboard delivers fully explainable, auditable investment scorecards backed by verifiable primary source citations.",
    technologies: ["React.js", "Node.js", "Gemini 2.5 Flash", "Express.js", "REST APIs"],
    keyFeatures: [
      "Coordinates parallel REST requests across API boundaries using Promise.all()",
      "Optimized query routing and custom in-memory/session-storage caching architecture",
      "Simulates a multi-agent debate among 7 expert analyst personas for objective scorecards",
      "Auditable scorecards with primary source verification and citation markers"
    ],
    stats: {
      speed: "Parallel APIs",
      agents: "7 Persona Debate",
      citations: "100% Verifiable"
    },
    demoUrl: "https://investraiq-1.onrender.com",
    githubUrl: "https://github.com/ShivChilu/InvestraIQ",
    caseStudyUrl: "#",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "packsavy",
    title: "PackSavy",
    category: "AI Packing Assistant",
    description: "Built a full-stack web application using React.js, Node.js, Express.js, REST APIs, and Tailwind CSS to generate personalized AI-powered travel packing recommendations.",
    longDescription: "Integrated Google Gemini and Open Weather APIs with scalable backend services, optimized application performance, and converted UI/UX wireframes into responsive, mobile-first user interfaces. Collaborated on application architecture, debugged issues, implemented clean and maintainable code, and used Git and GitHub for version control throughout development.",
    technologies: ["React.js", "Node.js", "Express.js", "Gemini AI", "Tailwind CSS", "OpenWeather API"],
    keyFeatures: [
      "Generates personalized AI travel packing lists using Google Gemini integration",
      "Integrates live weather forecasting using OpenWeather API integration",
      "Responsive mobile-first user interfaces converted from wireframe designs",
      "Version control and collaborative codebase management using Git and GitHub"
    ],
    stats: {
      architecture: "AI Integration",
      reliability: "Mobile First UI",
      database: "Gemini / Weather"
    },
    demoUrl: "https://github.com/ShivChilu/portfolio-1",
    githubUrl: "https://github.com/ShivChilu/portfolio-1",
    caseStudyUrl: "#",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80"
  }
];

export const internships = [
  {
    company: "Vanillakart",
    role: "Full Stack Intern",
    duration: "Sep 2025 – Nov 2025",
    verifyUrl: "https://drive.google.com/file/d/1xWc8NdvSyn92CIIUGIbQQZvFBveJICgh/view",
    description: [
      "Collaborated with cross-functional teams to design, develop, and deploy responsive full-stack web applications using React.js, Node.js, Express.js, MongoDB, and REST APIs for real-world client projects.",
      "Wrote clean, modular, and maintainable code, debugged application issues, optimized performance, and enhanced customer-facing web applications using modern web development practices.",
      "Used Git and GitHub for version control workflows while implementing scalable backend services and participating in project reviews to ensure timely delivery."
    ]
  }
];

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    provider: "AWS",
    date: "May 2025",
    credentialId: "efeed383-7b92-4a45-b218-ecae0986e493",
    verifyUrl: "https://www.credly.com/badges/efeed383-7b92-4a45-b218-ecae0986e493"
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    provider: "Google",
    date: "2025",
    credentialId: "XBKROSCDWX3M",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/XBKROSCDWX3M"
  },
  {
    title: "Cloud Computing",
    provider: "NPTEL",
    date: "2025",
    credentialId: "NPTEL25CS11S133730096204232940",
    verifyUrl: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S133730096204232940.pdf"
  }
];

export const education = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    duration: "Aug 2023 - Present",
    location: "Phagwara, Punjab",
    performance: "CGPA: 8.25",
    coursework: ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management Systems", "Web Technology", "Software Engineering"]
  },
  {
    institution: "Narayana Junior College",
    degree: "Intermediate - PCM",
    duration: "Apr 2022 - Mar 2023",
    location: "Hyderabad, Telangana",
    performance: "Percentage: 98.7",
    coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science Basics"]
  },
  {
    institution: "Jawahar Navodaya Vidyalaya",
    degree: "Class 10th - CBSE",
    duration: "Apr 2020 - Mar 2021",
    location: "Nalgonda, Telangana",
    performance: "Percentage: 96.0",
    coursework: ["Secondary Education"]
  }
];
