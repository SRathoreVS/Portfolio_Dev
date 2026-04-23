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
    company: "Infosys Limited",
    title: "Senior Associate Consultant / Full Stack Developer",
    period: "Jan 2026 – Present",
    points: [
      "Led modernization of legacy banking platforms (UBS client) by transforming monolithic systems into modular React-based architecture, improving maintainability and scalability.",
      "Improved application performance by ~35–50% using React optimizations such as memoization, lazy loading, and efficient rendering strategies.",
      "Designed reusable component libraries, accelerating development speed by ~40% across teams.",
      "Built dynamic, data-intensive financial interfaces, improving workflow efficiency and reducing user interaction friction.",
      "Standardized API contracts between frontend and backend, reducing integration issues and improving delivery timelines.",
      "Optimized backend APIs (Node.js / Core Java services) to enhance frontend performance, improving response time by ~30%."
    ],
  },

  {
    company: "Accenture",
    title: "Frontend / Full Stack Developer",
    period: "Mar 2025 – Jan 2026",
    points: [
      "Developed responsive and scalable UI components using React.js, Styled Components, and modern frontend practices in Agile environments.",
      "Integrated secure authentication systems using JWT and OTP-based verification for financial applications.",
      "Built trading workflows including buy/sell, deposit/withdraw modules with mobile PIN-based authentication.",
      "Implemented high-performance dashboards using Highcharts with dynamic filtering and CSV export functionality.",
      "Developed multilingual support (SE, FI, EN) for banking platforms using localization libraries.",
      "Configured CI/CD pipelines using Jenkins, SonarQube, Docker, and Kubernetes for automated deployments.",
      "Maintained code quality with SonarQube and contributed across Agile lifecycle (Epics → Sprints → Tasks)."
    ],
  },
  {
    company: "Tata Consultancy Services (TCS)",
    title: "Frontend Developer",
    period: "Dec 2021 – Feb 2025",
    points: [
      "Developed responsive, pixel-perfect UI using HTML5, CSS3, JavaScript, and modern frameworks like Tailwind and Bootstrap.",
      "Integrated frontend applications with REST APIs to enable real-time data updates and seamless client-server communication.",
      "Built backend APIs using Node.js and Express to support frontend features and data operations.",
      "Improved performance and debugging efficiency using Chrome DevTools and frontend optimization techniques.",
      "Collaborated with designers to translate UI/UX mockups into scalable, maintainable interfaces.",
      "Used Git for version control and managed branching strategies for team collaboration.",
      "Worked on banking domain projects (Nordea Bank), developing UI systems for document and data workflows.",
      "Implemented client-side validations and ensured robust user input handling."
    ],
  },
];

export const skills = {
  frontend: [
    { name: "React", icon: "/icons/react.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "Redux Toolkit", icon: "/icons/redux-toolkit.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "HTML5", icon: "/icons/html5.svg" },
    { name: "CSS3", icon: "/icons/css3.svg" },
    { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
    { name: "Styled Components", icon: "/icons/styled-components.svg" },
    { name: "Responsive Design", icon: "/icons/responsive-design.svg" },
  ],

  backend: [
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Express.js", icon: "/icons/express.svg" },
    { name: "Core Java", icon: "/icons/java.svg" },
    { name: "Spring Boot", icon: "/icons/spring.svg" },
    { name: "REST APIs", icon: "/icons/rest-api.svg" },
    { name: "JWT Authentication", icon: "/icons/jwt.svg" },
    { name: "MongoDB", icon: "/icons/mongodb.svg" },
    { name: "SQL", icon: "/icons/sql.svg" },
  ],

  tools: [
    { name: "Git", icon: "/icons/git.svg" },
    { name: "GitHub / Bitbucket", icon: "/icons/github-bitbucket.svg" },
    { name: "Jenkins", icon: "/icons/jenkins.svg" },
    { name: "Azure DevOps", icon: "/icons/azure-devops.svg" },
    { name: "Postman", icon: "/icons/postman.svg" },
    { name: "Swagger", icon: "/icons/swagger.svg" },
    { name: "SonarQube", icon: "/icons/sonarqube.svg" },
    { name: "JIRA", icon: "/icons/jira.svg" },
    { name: "VS Code", icon: "/icons/vscode.svg" },
  ],

  testing: [
    { name: "Jest", icon: "/icons/jest.svg" },
    { name: "Cypress", icon: "/icons/cypress.svg" },
    { name: "Chrome DevTools", icon: "/icons/chrome-devtools.svg" },
    { name: "Lighthouse", icon: "/icons/lighthouse.svg" },
  ],

  visualization: [
    { name: "Highcharts", icon: "/icons/highcharts.svg" },
    { name: "Figma", icon: "/icons/figma.svg" },
  ],

  quality: [
    { name: "Accessibility (A11y)", icon: "/icons/accessibility.svg" },
  ],
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