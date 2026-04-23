export const profile = {
  name: "Satyam Rathore",
  role: "Full Stack Developer (React + Java)",
  phone: "+91-6394614898",
  email: "priyasatyam1806@gmail.com",
  location: "Mumbai / Pune, India",
  summary:
    "Full-Stack Developer with 4.5+ years of experience building scalable web applications using React, Java, and Spring Boot. Specialized in designing performant frontends and robust backend systems, with strong expertise in microservices, REST APIs, and production-grade architectures.",
  linkedin: "https://www.linkedin.com/in/satyam-rathore-ba3471154/",
};

export const experience = [
  {
    company: "Accenture",
    title: "Full Stack Developer",
    period: "Feb 2023 – Present",
    points: [
      "Developed microservice-based backend systems using Java, Spring Boot, and REST APIs for financial applications.",
      "Built scalable frontend modules using React.js and TypeScript with strong focus on performance and accessibility.",
      "Implemented JWT-based authentication and secure API communication.",
      "Designed dashboards for stock trading workflows with Highcharts.",
      "Improved accessibility compliance (WCAG 2.1) using ARIA roles and semantic HTML.",
      "Configured CI/CD pipelines using Jenkins, Docker, and Maven.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    title: "Software Developer",
    period: "Jan 2022 – Feb 2023",
    points: [
      "Built reusable UI components using React and Redux across multiple enterprise projects.",
      "Implemented role-based authentication and secure API integrations.",
      "Optimized performance using memoization and caching strategies.",
      "Collaborated in Agile teams with code reviews and sprint planning.",
    ],
  },
];

export const skills = {
  frontend: ["React", "TypeScript", "Redux", "Tailwind", "HTML", "CSS"],
  backend: ["Node.js", "Java", "Spring Boot", "REST APIs", "MongoDB", "SQL"],
  tools: ["Git", "Jenkins", "Postman", "Swagger", "SonarQube", "JIRA"],
};

export const projects = [
  {
    name: "Interactive 3D Developer Portfolio",
    tagline: "High-performance portfolio with modern UI and animations",

    problem:
      "Traditional portfolios fail to capture attention and lack engagement, reducing recruiter interaction time.",

    solution:
      "Built an interactive portfolio using React, Tailwind CSS, and Framer Motion with smooth animations, dynamic sections, and optimized performance for fast loading.",

    impact: [
      "Improved engagement time with interactive UI",
      "Optimized load performance using lazy loading",
      "Showcases full-stack capability and UI engineering skills",
    ],

    tech: ["React", "Tailwind CSS", "Framer Motion"],
    live: "https://satyam-rathore-fdev.netlify.app/",
    github: "https://github.com/SRathoreVS/Portfolio_Dev",
    image: "/projects/portfolio.png",
    featured: true,
  },

  {
    name: "FinGen – AI Finance Landing",
    tagline: "Modern fintech UI with conversion-focused design",

    problem:
      "Finance platforms require high-conversion landing pages with clear messaging and modern UI to attract users.",

    solution:
      "Developed a responsive and visually rich landing page using React and Tailwind with structured layout, animations, and strong CTA design.",

    impact: [
      "Improved visual engagement with animation-driven UI",
      "Responsive across all devices",
      "Designed for high conversion and clarity",
    ],

    tech: ["React", "Tailwind CSS", "Framer Motion"],
    live: "https://fingen-landing-ui.vercel.app/",
    image: "/projects/fingen.png",
  },

  {
    name: "Harbourstone Realty Platform",
    tagline: "Real estate UI with structured property showcase",

    problem:
      "Real estate platforms need structured layouts to display listings clearly and improve user navigation.",

    solution:
      "Built a responsive UI with property sections, testimonials, and interactive components for improved user experience.",

    impact: [
      "Improved UX with structured layout",
      "Responsive design for all screen sizes",
      "Clear navigation for property exploration",
    ],

    tech: ["React", "TypeScript", "CSS"],
    live: "https://harbourstonerealty.netlify.app/",
    image: "/projects/harbourstone.png",
  },

  {
    name: "Omnifood Subscription UI",
    tagline: "Responsive product landing with clean UX",

    problem:
      "Subscription-based products require clear UI to communicate value and improve conversions.",

    solution:
      "Designed a responsive landing page with structured sections, CTA flow, and optimized layout for marketing.",

    impact: [
      "Improved readability and UX",
      "Fully responsive design",
      "Clear product communication",
    ],

    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://omnifood-rathore.netlify.app/",
    image: "/projects/omnifood.png",
  },

  {
    name: "WinWin Dice Game",
    tagline: "Interactive browser-based game",

    problem:
      "Simple games often lack interactive logic and engaging gameplay mechanics.",

    solution:
      "Developed a two-player dice game with dynamic scoring logic and game state management using JavaScript.",

    impact: [
      "Improved understanding of state management",
      "Interactive gameplay experience",
      "Clean UI with responsive controls",
    ],

    tech: ["JavaScript", "HTML", "CSS"],
    live: "https://rathore-dice-winwin.netlify.app/",
    image: "/projects/winwin-dice.png",
  },
];