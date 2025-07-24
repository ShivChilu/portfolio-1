// Mock data for Shiva Prasad's Portfolio
// This file contains all the static data used throughout the portfolio

export const personalInfo = {
  name: "Shiva Prasad",
  title: "Computer Science Student",
  location: "Hyderabad, Telangana, India",
  phone: "+91 7986955634",
  email: "chiluverushivaprasad02@gmail.com",
  linkedin: "https://www.linkedin.com/in/shiva01/",
  github: "https://github.com/ShivChilu/",
  graduationYear: "2027",
  cgpa: "8.41"
};

export const summary = {
  short: "Aspiring Software Engineer graduating in 2027, seeking Summer 2026 internship opportunities. Passionate about building scalable full-stack applications and solving complex algorithmic challenges.",
  long: "Computer Science student graduating in 2027 with hands-on experience in scalable full-stack development, distributed systems, and object-oriented programming using Java, C++, Python, and JavaScript. Seeking a Summer 2026 Software Engineering Internship to contribute to impactful, high-performance systems and grow through global team collaboration and mentorship."
};

export const education = [
  {
    institution: "Lovely Professional University",
    degree: "B. Tech in Computer Science and Engineering",
    duration: "August 2023 - Present",
    location: "Jalandhar, Punjab",
    performance: "CGPA: 8.41",
    type: "current"
  },
  {
    institution: "Narayana Junior College",
    degree: "12th with Science",
    duration: "April 2021 – March 2023",
    location: "Hyderabad, Telangana",
    performance: "Percentage: 98.70%",
    type: "completed"
  }
];

export const skills = {
  languages: ["Java", "Python", "C", "C++", "PHP", "JavaScript"],
  frontend: ["HTML5", "CSS3", "Tailwind CSS", "React.js", "UI/UX", "Accessibility"],
  backend: ["PHP", "Node.js", "Express.js", "RESTful APIs"],
  database: ["MongoDB", "MySQL"],
  tools: ["Git", "GitHub", "Visual Studio Code", "Agile Development"],
  concepts: ["Data Structures", "Algorithms", "OOP", "Debugging", "Distributed Systems"]
};

export const projects = [
  {
    title: "AI Packing Assistant",
    period: "January 2025",
    description: "Implemented a REST API-based system for the travel assistant that analyzed weather patterns and user profiles, delivering packing suggestions for 100+ destinations.",
    technologies: ["HTML5", "Tailwind CSS", "JavaScript", "PHP"],
    achievements: [
      "Improved user interaction by 25% and accuracy of suggestions by 35% via a drag-and-drop UI",
      "Enhanced performance with backend query optimizations and responsive design",
      "Reduced load time by 40% across 98% of devices"
    ],
    stats: {
      destinations: "100+",
      improvement: "25%",
      performance: "40%"
    }
  },
  {
    title: "Horticulture Connect",
    period: "September 2024",
    description: "Built a scalable web application helping 100+ farmers monitor real-time crop market trends and optimize storage planning.",
    technologies: ["HTML5", "Tailwind CSS", "JavaScript", "MySQL", "PHP"],
    achievements: [
      "Boosted average farmer profits by 20% through integrated dashboards and profit-enhancing tools",
      "Conducted user testing with local stakeholders, achieving 9/10 satisfaction on usability",
      "Improved decision speed by 30% among test users"
    ],
    stats: {
      farmers: "100+",
      profit: "20%",
      satisfaction: "9/10"
    }
  }
];

export const achievements = [
  {
    title: "150+ DSA Problems",
    description: "Solved 150+ DSA problems on LeetCode with a focus on time/space optimization.",
    metric: "150+",
    label: "Problems Solved"
  },
  {
    title: "Performance Optimization",
    description: "Improved farmer tool efficiency by reducing planning time by 30% in a live-use case.",
    metric: "30%",
    label: "Time Reduction"
  },
  {
    title: "Cross-Platform Deployment",
    description: "Deployed full-stack apps across mobile and desktop browsers with 98% compatibility.",
    metric: "98%",
    label: "Compatibility"
  },
  {
    title: "Team Leadership",
    description: "Led a mini-team of 3 peers in project-based development and version control using GitHub.",
    metric: "3",
    label: "Team Members"
  }
];

export const trainings = [
  {
    title: "Data Structures and Algorithms Training",
    provider: "Cipher Schools",
    duration: "June 2025 - Present",
    status: "In Progress",
    type: "training",
    description: [
      "Pursuing an in-depth DSA course covering core concepts like arrays, linked lists, trees and graphs.",
      "Enhancing time and space complexity analysis skills to build efficient solutions for technical interviews and real-world applications."
    ]
  },
  {
    title: "Full Stack Development Training",
    provider: "Apna College",
    duration: "October 2024 - Present",
    status: "In Progress",
    type: "training",
    description: [
      "Learning full stack development through a project-based curriculum focused on modern web technologies.",
      "Developing responsive web applications using HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.",
      "Gaining expertise in Git, GitHub, API integration, deployment, and full-stack best practices."
    ]
  }
];

export const certifications = [
  {
    title: "Cloud Computing",
    provider: "NPTEL",
    completion: "April 2025",
    status: "Completed",
    type: "certification"
  },
  {
    title: "Introduction to Hardware and Operating Systems",
    provider: "IBM",
    completion: "September 2024",
    status: "Completed",
    type: "certification"
  }
];

export const heroStats = [
  { value: "150+", label: "DSA Problems Solved" },
  { value: "8.41", label: "CGPA" },
  { value: "2", label: "Major Projects" },
  { value: "2027", label: "Graduation Year" }
];

export const contactInfo = [
  {
    label: "Email",
    value: "chiluverushivaprasad02@gmail.com",
    href: "mailto:chiluverushivaprasad02@gmail.com",
    type: "email"
  },
  {
    label: "Phone",
    value: "+91 7986955634",
    href: "tel:+917986955634",
    type: "phone"
  },
  {
    label: "Location",
    value: "Hyderabad, Telangana, India",
    href: null,
    type: "location"
  }
];

export const socialLinks = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shiva01",
    href: "https://www.linkedin.com/in/shiva01/"
  },
  {
    label: "GitHub",
    value: "github.com/ShivChilu",
    href: "https://github.com/ShivChilu/"
  }
];