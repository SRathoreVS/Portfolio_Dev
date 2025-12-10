export const profile = {
  name: "Satyam Rathore",
  role: "Frontend Developer Specialist",
  phone: "+91-6394614898",
  email: "priyasatyam1806@gmail.com",
  location: "Mumbai, India",
  summary:
    "Frontend Developer with almost 4 years of experience delivering secure, scalable, and high-performance applications in the banking domain. Skilled in React.js, TypeScript, secure authentication flows, accessibility (WCAG 2.1), performance optimization, and CI/CD practices. Experienced collaborating in Agile environments and building modular, reusable, and testable UI components.",
  linkedin: "https://www.linkedin.com/in/satyam-rathore-ba3471154/",
};


export const experience = [
  {
    company: "Accenture",
    title: "Frontend Developer Specialist",
    period: "Feb 2025 – Present",
    points: [
      "Developed responsive and modular UI components for holdings and investment & security custodial modules using React.js, TypeScript, and Styled Components.",
      "Improved accessibility with WCAG 2.1 compliance using NVDA, Lighthouse audits, ARIA roles, and semantic HTML.",
      "Integrated RESTful APIs with JWT-based authentication, OTP login & multilingual support (SE, FI, EN) using i18n.",
      "Built and optimized trading workflows including buy/sell, dividend, redemption with Highcharts dashboards.",
      "Worked with CI/CD pipelines on Bitbucket and GitHub to automate builds, testing, and deployment processes.",
      "Refactored legacy class-based components to functional with React Hooks, improving maintainability.",
      "Enhanced performance via lazy-loading, code-splitting and caching strategies.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    title: "Software Developer",
    period: "Jan 2022 – Feb 2025",
    points: [
      "Built responsive UIs for banking dashboards, leave management, and internal e-commerce solutions using React.js and Redux.",
      "Implemented secure role-based authentication using JWT and REST APIs.",
      "Optimized performance using memoization, caching, and Lighthouse audits.",
      "Delivered reusable UI components improving cross-project development efficiency.",
      "Collaborated in Agile processes — sprint planning, story grooming, and code reviews.",
      "Used Git, Bitbucket, Jenkins, SonarQube, and Azure DevOps for CI/CD and code quality improvements.",
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

