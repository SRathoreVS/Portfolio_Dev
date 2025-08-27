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
    "React (Hooks, Context)",
    "Redux Toolkit",
    "TypeScript",
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "Styled-Components",
    "Responsive Design",
    "Accessibility (A11y)",
  ],
  backend: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "MongoDB", "SQL"],
  tools: [
    "Git",
    "GitHub/Bitbucket",
    "Jenkins",
    "Postman",
    "Swagger",
    "SonarQube",
    "Azure DevOps",
    "JIRA",
    "VS Code",
    "Lighthouse",
  ],
  testing: ["Jest", "Cypress"],
  charts: ["Highcharts"],
  design: ["Figma", "Chrome DevTools"],
  learning: [
    "DSA in Javascript",
    "React in deep",
    "future(python)",
    "future(firebase)",
  ],
};

export const projects = [
  {
    name: "Equity Savings UI",
    description:
      "Performance & Transactions modules with trading flows, CSV export, i18n, and accessibility-first UI.",
    tags: ["React", "TypeScript", "Highcharts", "i18n", "CSV"],
    link: "#",
  },
  {
    name: "Leave Management Portal",
    description:
      "Role-based portal with JWT auth, responsive dashboards, and reusable UI library.",
    tags: ["React", "Redux", "Tailwind", "JWT"],
    link: "#",
  },
];
