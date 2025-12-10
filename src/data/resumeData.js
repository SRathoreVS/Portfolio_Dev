export const profile = {
  name: "Satyam Rathore",
  role: "Frontend Developer Specialist",
  phone: "+91-6394614898",
  email: "priyasatyam1806@gmail.com",
  location: "India",
  linkedin: "https://www.linkedin.com/in/satyam-rathore-ba3471154/",
  summary:
    "Frontend Developer with 3.8+ years of experience building responsive, high-performance web apps using React.js, JavaScript (ES6+), HTML5, and modern CSS. Skilled in UI/UX development, API integration, JWT authentication, accessibility, and performance optimization. Experienced in Agile teams, writing reusable code, and delivering scalable features. Currently learning DSA in JavaScript.",
};

export const experience = [
  {
    company: "Accenture",
    title: "Frontend Developer Specialist",
    period: "Feb 2025 – Present",
    points: [
      "Built responsive holdings/investment UI with React, TypeScript, and Styled-Components.",
      "Integrated REST APIs with secure JWT authentication and OTP login; implemented multilingual support (SE, FI, EN) using i18n.",
      "Implemented complex stock trading flows (buy/sell, deposit/withdraw) with CSV export and dynamic filters.",
      "Enhanced account flows (withdrawal, deposit, dividend, redemption, shares) with robust validations and seamless user experience.",
      "Wrote unit, integration, and navigation tests with Jest and React Router v6, achieving high test coverage; integrated CI/CD pipelines with SonarQube.",
      "Implemented Redux and Context API for managing complex investment and trading states at scale.",
      "Optimized API data handling with caching and pagination to improve performance on high-volume datasets.",
      "Ensured WCAG 2.1 accessibility compliance with keyboard navigation, ARIA roles, and screen-reader support.",
      "Optimized frontend performance with lazy loading, memoization, and code splitting, reducing bundle size and improving page load speed.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    title: "Software Developer",
    period: "Jan 2022 – Feb 2025",
    points: [
      "Developed responsive and pixel-perfect UIs for leave management and e-commerce applications using React, Redux, and Tailwind CSS.",
      "Implemented JWT authentication and role-based authorization ensuring secure access to applications.",
      "Built interactive dashboards with reusable components, optimized performance, and ensured cross-browser compatibility.",
      "Improved application performance with code splitting, lazy loading, and API data caching strategies.",
      "Delivered features in Agile sprints, collaborating closely with designers, QA, and backend teams.",
      "Established coding standards with ESLint, Prettier, and Git pre-commit hooks, ensuring clean and maintainable codebase.",
      "Participated in code reviews, sprint planning, and retrospectives, contributing to continuous team improvement.",
    ],
  },
];

export const skills = {
  frontend: [
    { name: "React (Hooks, Context)", icon: "/icons/react.svg" },
    { name: "Redux Toolkit", icon: "/icons/redux-toolkit.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "HTML5", icon: "/icons/html5.svg" },
    { name: "CSS3", icon: "/icons/css3.svg" },
    { name: "JavaScript (ES6+)", icon: "/icons/javascript.svg" },
    { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
    { name: "Styled-Components", icon: "/icons/styled-components.svg" },
    { name: "Responsive Design", icon: "/icons/responsive-design.svg" },
    { name: "Accessibility (A11y)", icon: "/icons/accessibility.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Express.js", icon: "/icons/express.svg" },
    { name: "REST APIs", icon: "/icons/rest-api.svg" },
    { name: "JWT Auth", icon: "/icons/jwt.svg" },
    { name: "MongoDB", icon: "/icons/mongodb.svg" },
    { name: "SQL", icon: "/icons/sql.svg" },
  ],
  tools: [
    { name: "Git", icon: "/icons/git.svg" },
    { name: "GitHub/Bitbucket", icon: "/icons/github-bitbucket.svg" },
    { name: "Jenkins", icon: "/icons/jenkins.svg" },
    { name: "Postman", icon: "/icons/postman.svg" },
    { name: "Swagger", icon: "/icons/swagger.svg" },
    { name: "SonarQube", icon: "/icons/sonarqube.svg" },
    { name: "Azure DevOps", icon: "/icons/azure-devops.svg" },
    { name: "JIRA", icon: "/icons/jira.svg" },
    { name: "VS Code", icon: "/icons/vscode.svg" },
    { name: "Lighthouse", icon: "/icons/lighthouse.svg" },
  ],
  testing: [
    { name: "Jest", icon: "/icons/jest.svg" },
    { name: "Cypress", icon: "/icons/cypress.svg" },
  ],
  charts: [{ name: "Highcharts", icon: "/icons/highcharts.svg" }],
  design: [
    { name: "Figma", icon: "/icons/figma.svg" },
    { name: "Chrome DevTools", icon: "/icons/chrome-devtools.svg" },
  ],
};

export const projects = [
  {
    name: "Portfolio – Satyam Rathore",
    description:
      "Modern personal portfolio built with React and Tailwind CSS, showcasing my experience, skills, projects, and live stats with a focus on clean UX and subtle animations.",
    live: "https://satyam-rathore-fdev.netlify.app/",
    // Add GitHub link here if you want a GitHub button to show:
    // github: "https://github.com/...",
    tech: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
    image: "/projects/portfolio.png", // create this screenshot later
  },
  {
    name: "FinGen – AI Finance Landing Page",
    description:
      "Responsive landing page for an AI-powered finance product, featuring hero sections, feature highlights, pricing, and CTA blocks with a premium SaaS-style UI.",
    live: "https://fingen-landing-ui.vercel.app/",
    // github: "https://github.com/...", // optional
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/projects/fingen.png", // create this screenshot later
  },
];

