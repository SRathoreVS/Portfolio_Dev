export const profile = {
  name: "Satyam Rathore",
  role: "Java React FullStack Developer",
  phone: "+91-6394614898",
  email: "priyasatyam1806@gmail.com",
  location: "Mumbai || Pune, India",
  summary:
    "🚀 Full-Stack Web Developer | React.js & Java | with 4.5 years of experience building and maintaining scalable web applications using Java, Spring Boot, React.js, and RESTful APIs. Hands-on in developing secure and high-performing systems across both frontend and backend layers. Experienced in microservices, JWT authentication, and CI/CD pipelines. Skilled in Java-based backend development, API integration, and frontend architecture with React.js and TypeScript. Adept at Agile collaboration and currently enhancing expertise in Java and backend frameworks.",
  linkedin: "https://www.linkedin.com/in/satyam-rathore-ba3471154/",
};


export const experience = [
  {
    company: "Infosys Limited",
    title: "Full Stack Developer",
    period: "Jan 2026 – Present",
    points: [
      "Working for UBS client .......... still under KT sessions"
    ],
  },
  {
    company: "Accenture",
    title: "Full Stack Developer",
    period: "Feb 2025 – Present",
    points: [
      "Developed and maintained microservice based Java backend modules for portfolio and investment features using Spring Boot, JPA, and REST APIs.",
      "Improved accessibility with WCAG 2.1 compliance using NVDA, Lighthouse audits, ARIA roles, and semantic HTML.",
      "Built responsive UI components using React.js, TypeScript, Styled Components, and integrated with backend APIs.",
      "Implemented JWT-based authentication, multilingual support (SE, FI, EN) via i18n, and secure data handling between UI and backend.",
      "Designed and consumed APIs for stock trading (buy/sell, deposit/withdraw) and built dashboards with Highcharts.",
      "nhanced backend logic for transactions, validations, and audit logging using Java + SQL.",
      "Configured CI/CD pipelines using Jenkins, Maven, and Docker for automated build and deployments.",
      "Collaborated across Agile sprints, performing code reviews, unit testing (Jest, JUnit), and maintaining code quality with SonarQube.",
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
    { name: "Java", icon: "/icons/java.svg" },
    { name: "Spring Boot", icon: "/icons/spring.svg" },
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
    tech: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
    image: "/projects/portfolio.png", // optional screenshot path
    type: "featured",
  },
  {
    name: "Harbourstone Realty – Real Estate Landing Page",
    description:
      "Responsive landing page for a real estate agency, featuring service highlights, property showcases, client testimonials, contact form, and a professional property-focused layout.",
    live: "https://harbourstonerealty.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript", "React Js", "Typescript ", "Netlify"],
    image: "/projects/harbourstone.png", // optional screenshot path
    type: "landing",
  },
  {
    name: "FinGen – AI Finance Landing Page",
    description:
      "Responsive landing page for an AI-powered finance product, featuring hero sections, feature highlights, and CTA-driven layout with a premium fintech look.",
    live: "https://fingen-landing-ui.vercel.app/",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/projects/fingen.png", // optional screenshot path
    type: "landing",
  },
  {
    name: "Omnifood – Healthy Meal Subscription",
    description:
      "Landing UI for a smart 365-days-per-year food subscription that delivers healthy meals tailored to personal tastes and nutritional needs, with a strong focus on responsive layout and modern marketing design.",
    live: "https://omnifood-rathore.netlify.app/",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    image: "/projects/omnifood.png", // optional screenshot path
    type: "landing",
  },
  {
    name: "WinWin Dice – Pig Game",
    description:
      "Two-player dice game where players race to reach 100 points. Each player can roll the dice multiple times to accumulate a round score, but rolling a 1 loses the round score and switches the turn. Players can 'Hold' to add the round score to their total and pass the turn strategically.",
    live: "https://rathore-dice-winwin.netlify.app/",
    tech: ["JavaScript", "HTML5", "CSS3"],
    image: "/projects/winwin-dice.png", // optional screenshot path
    type: "game",
  },
  // type: "fullstack" will be added in future
];


