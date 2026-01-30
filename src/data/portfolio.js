export const portfolioData = {
  personal: {
    name: "Nina",
    role: "Computer Science Student ",
    tagline: "Aspiring Software Engineer | with Specialization in Intelligent Systems",
    profileImage: "/imageME.jpeg",
    resumeURL: "/resume.pdf",
    facebook: "https://www.facebook.com/nina.esico/",
    instagram: "https://www.instagram.com/nnaasco/",
    email: "christinaesico456@gmail.com",
    github: "https://github.com/christinaesico456",
    linkedin: "https://www.linkedin.com/in/christina-esico-5b066b394/",
  },

  about: {
    introduction: `I'm a 3rd-year Computer Science student passionate about creating efficient, 
    user-centered software solutions. My journey in programming has taught me that great code 
    isn't just about syntax—it's about solving real problems and continuous learning.`,
    
    highlights: [
      "Strong foundation in Python",
      "Experience with Front-End web development",
      "Quick learner with a collaborative mindset",
      "Willingness to take on challenges and adapt to new technologies"
    ],
    
    interests: [
      "Software Development",
      "Artificial Intelligence",
      "Web Development",
      "UI/UX Design"
    ]
  },
  
    skills: {
        "Programming Languages": [
        "JavaScript",
        "Python", 
        "Java",
        "HTML/CSS"
    ],
        "Frameworks & Libraries": [
        "Vue.js",
        "React",
        "Tailwind CSS",
        "Node.js"
    ],
        "Tools & Technologies": [
        "Git & GitHub",
        "VS Code",
        "Figma",
        "MySQL"
    ]
},

  projects: [
    {
      id: 1,
      title: "Bean There",
      description: "a web-based application that promotes and showcase different cafés in Dasmariñas, Cavite.",
      tech: ["Vue.js", "Tailwind CSS", "Django, My"],
      problem: "Students need a simple way to track assignments and deadlines without complex tools.",
      github: "https://github.com/yourusername/project",
      demo: "",
      featured: true
    },
    {
      id: 2,
      title: "VeriFeed: A Real-Time Deepfake Video Detector on Facebook",
      description: "Develop and execute browser extension designed for real-time deepfake video detection on Facebook.",
      tech: ["Python", "Flask", "Vue.js", "Tailwind CSS", "MySQL"],
      problem: "Quick access to weather information without cluttered interfaces.",
      github: "https://github.com/yourusername/project",
      featured: true
    },
    {
      id: 3,
      title: "Mooji: Gamified Health Tracking App",
      description: "Figma Prototype for gamified health tracking app with Presented at Fresh START Hackathon, an event of the University Student Government of De La Salle University-Dasmariñas.",
      tech: ["Figma"],
      problem: "Students need to project final grades based on current performance.",
      github: "https://github.com/yourusername/project",
      featured: true
    }
  ],

  education: [
    {
      degree: "Bachelor of Science in Computer Science with Specialization in Intelligent Systems",
      school: "De La Salle University-Dasmariñas",
      period: "2023 - Present (Expected 2027)",
      achievements: [
        "Dean's List (2023-Present)",
        "Relevant Coursework: Data Structures, Algorithms, Software Engineering, Machine Learning, Natural Language Processing, Computer Vision, Object-Oriented Programming, Java Programming, Web Development"
      ]
    }
  ],

  certifications: [
    {
      name: "JavaScript Essentials 1",
      issuer:  "CISCO Networking Academy",
      date: "May 20, 2025"
    }
  ]
}