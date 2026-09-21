import {
  Code2,
  Frame,
  SearchCheck,
  Eye,
  MonitorSmartphone,
} from "lucide-react";

const startDate = new Date(2021, 7, 1);
const endDate = new Date();

const startYear = startDate.getFullYear();
const startMonth = startDate.getMonth();
const endYear = endDate.getFullYear();
const endMonth = endDate.getMonth();

const experience = Number(
  (((endYear - startYear) * 12 + (endMonth - startMonth)) / 12).toFixed(1),
).toString();

export const assetPrefix =
  process.env.NEXT_PUBLIC_ASSET_PREFIX ?? "";

export const resumeData = {
  header: {
    name: "Mayank Sharma",
    title: "Fullstack Developer",
  },
  details: {
    phone: "9650018572",
    email: "mayanksha200@gmail.com",
  },
  links: [
    { label: "Portfolio", url: "portfolio-mayank200s-projects.vercel.app" },
    {
      label: "LinkedIn",
      url: "www.linkedin.com/in/mayank-sharma-engineer",
    },
    { label: "Github", url: "https://github.com/mayank200" },
  ],

"profile": "High-caliber Lead Full Stack Developer (Cloud-Native) with over 5 years of experience architecting, building, and deploying scalable distributed systems and SPAs. Expert in polyglot development with deep technical mastery across Python (FastAPI/Django), Node.js (NestJS), TypeScript, and modern Angular (16/17+) alongside React. Proven track record in designing secure REST & GraphQL APIs, orchestrating cloud-native infrastructure on Microsoft Azure (AKS, App Service, Functions, Key Vault), and implementing robust CI/CD pipelines via Azure DevOps and GitHub Actions. Adept at driving end-to-end technical solutioning, enforcing OWASP security standards, and leading Agile teams through production releases and hypercare.",
  "technicalSkills": [
    {
      "category": "Frontend & SPA Development",
      "items": "Angular (16/17+), TypeScript, JavaScript, RxJS, React.js, Next.js, HTML5, CSS3, Sass, Redux / Redux Toolkit, SPA Performance Optimization, State Management"
    },
    {
      "category": "Backend & Core Languages",
      "items": "Python (FastAPI, Django, Flask), Node.js (NestJS), REST API Design, GraphQL, Microservices Architecture, OAuth2, JWT, Azure AD"
    },
    {
      "category": "Cloud & Containerization",
      "items": "Microsoft Azure (App Service, AKS, Functions, Key Vault), Docker, Kubernetes, Amazon Web Services (AWS)"
    },
    {
      "category": "Databases & Storage",
      "items": "Azure SQL, PostgreSQL, MySQL, Azure Blob Storage, MongoDB, TypeORM, Prisma, Data Indexing & Query Optimization"
    },
    {
      "category": "DevOps & Security",
      "items": "CI/CD Pipelines (Azure DevOps, GitHub Actions), OWASP Secure Coding, Automated Build & Deployment, Git, Key Vault Secrets Management"
    },
    {
      "category": "Architecture & Processes",
      "items": "Client-Server System Design, Enterprise Solutions, Code Reviews, Technical Documentation, Agile/Scrum, Production Deployments & Hypercare"
    }
  ],
  "education": [
    {
      "degree": "B.Tech (Computer Engineer)",
      "school": "GGSIPU, Delhi",
      "date": "July 2017 — July 2021"
    }
  ],
  "employment": [
    // {
    //   "title": "Tech Lead",
    //   "company": "Trianz(Contract- Sarban), Bengaluru",
    //   "date": "June 2026 - September 2026",
    //   "bullets": [
    //     "Led R&D and system design to modernize a legacy Ruby application, re-architecting core backend services using Node.js, NestJS, and PostgreSQL.",
    //     "Leveraged AI-assisted development tools to accelerate code generation, optimize refactoring, and speed up overall project delivery.",
    //     "Managed a team of 4 engineers, defining task workflows, breaking down architectural requirements, and conducting code reviews to drive Agile releases.",
    //     "Served as the direct client point of contact, providing structured project updates, managing technical alignment, and leading live product demos."
    //   ]
    // },
    {
      "title": "Sr. Full Stack / Solution Engineer (Cloud-Native)",
      "company": "Gammastack, Bengaluru",
      "date": "May 2025 - March 2026",
      "bullets": [
        "Led technical solutioning and end-to-end architecture for cloud-native enterprise platforms, utilizing Python (FastAPI) and Node.js (NestJS) for scalable backend microservices.",
        "Architected modern, responsive Single Page Applications (SPAs) using Angular 17 and TypeScript, integrating RxJS and modular component patterns to drive UI performance optimization.",
        "Designed and deployed secure RESTful and GraphQL APIs integrated with Azure Active Directory (Azure AD), OAuth2, and JWT authentication flows guarded by OWASP secure coding standards.",
        "Configured and managed Azure cloud infrastructure including Azure App Service, Azure Functions, and Azure Key Vault for enterprise secret management and data protection.",
        "Engineered automated CI/CD deployment pipelines using Azure DevOps and GitHub Actions, orchestrating containerized workloads via Docker and Kubernetes (AKS).",
        "Enforced strict engineering quality by conducting comprehensive code reviews, writing technical architecture documentation, and driving Agile sprint releases through production deployment and hypercare."
      ]
    },
    {
      "title": "Full Stack / Backend Developer",
      "company": "Tallect, Bengaluru",
      "date": "July 2023 — January 2025",
      "bullets": [
        "Engineered scalable microservices and REST APIs using Python (FastAPI) and TypeScript, implementing complex business logic and high-throughput data processing workflows.",
        "Built robust SPAs with Angular 16 and React.js, leveraging centralized state management (Redux / RxJS) to streamline real-time data binding and client-side performance.",
        "Architected relational database layers on Azure SQL and PostgreSQL, utilizing Prisma and TypeORM while managing unstructured assets with Azure Blob Storage.",
        "Implemented enterprise-grade security protocols across microservices, leveraging Azure Key Vault, OAuth2 access tokens, and programmatic RBAC structures.",
        "Streamlined production releases by building multi-stage Docker container images and managing deployments across Azure Kubernetes Service (AKS) and AWS clusters.",
        "Collaborated with cross-functional product stakeholders to translate business mandates into technical solutions, driving hypercare support and debugged complex production incidents."
      ]
    },
    {
      "title": "Full Stack Developer",
      "company": "Akal Information Systems, Delhi",
      "date": "August 2021 — July 2023",
      "bullets": [
        "Developed full-stack enterprise web applications using Python and Node.js backend services coupled with Angular and HTML5/Sass frontends under strict Agile timelines.",
        "Designed normalized schemas for PostgreSQL and MySQL databases, tuning index strategies and query execution paths to minimize runtime latencies.",
        "Integrated third-party REST and GraphQL endpoints while enforcing secure access control lists (ACLs) and state verification mechanisms.",
        "Established baseline CI/CD pipeline automation and Dockerized local environment setups to ensure reproducible builds across development and testing teams.",
        "Actively participated in daily Agile standups, code review cycles, production deployment support, and operational bug triage."
      ]
    }
  ],
  "internships": [
    {
      "title": "UI/UX & Front-End Developer",
      "company": "Mumbai First, Delhi",
      "date": "August 2020 — November 2020",
      "bullets": [
        "Translated visual mockups into responsive SPA components using Angular, TypeScript, HTML5, and Sass.",
        "Structured client-side state models using Redux and RxJS observables to optimize UI rendering performance.",
        "Utilized Git multi-branch workflows to maintain code quality across active development sprints."
      ]
    },
    {
      "title": "Software Engineer (Game Development)",
      "company": "Believable, Delhi",
      "date": "March 2021 — April 2021",
      "bullets": [
        "Architected decoupled, reusable UI modules in Angular and TypeScript following modern design patterns.",
        "Optimized browser rendering loops and reduced execution latency across complex client-side applications."
      ]
    }
  ],
  "projects": [
    {
      "name": "HUB-CRM",
      "tech": "React, Angular, Node.js, PostgreSQL, Git, CI/CD",
      "bullets": [
        "Developed a centralized CRM interface to streamline user-facing workflow interactions and tracking capabilities.",
        "Engineered high-performance Node.js backend infrastructure, deploying updates through automated Git-backed CI/CD pipelines to deliver live data insights to responsive client-side views."
      ]
    },
    {
      "name": "Token System",
      "tech": "React, Angular, Node.js, PostgreSQL, Docker",
      "bullets": [
        "Built a modular tracking framework featuring responsive status indicators and notification workflows.",
        "Utilized Node.js and Docker to isolate system environments, managing secure, low-latency data transit layers over web connections."
      ]
    },
    {
      "name": "Driver Awareness System",
      "tech": "Python, LLM, RAG, AWS, Docker",
      "bullets": [
        "Created an intelligent context-aware platform utilizing Python, processing complex telemetry data models through localized LLM patterns.",
        "Integrated RAG architecture concepts to reference internal documentation, containerizing application nodes using Docker for deployment over scalable AWS structures."
      ]
    }
  ],
  courses: [
    {
      name: "Arduino (Embedded C, 8085)",
      institution: "AEDIFICO",
      date: "July 2018 — November 2018",
    },
    {
      name: "Machine Learning using Python",
      institution: "AEDIFICO",
      date: "January 2019 — May 2019",
    },
    {
      name: "Android using Kotlin",
      institution: "AEDIFICO",
      date: "March 2018 — June 2025",
    },
  ],

};

export const aboutStats = [
  { label: "Companies worked with", value: "3+" },
  { label: "Years of experience", value: `${Math.floor(Number(experience))}+` },
  { label: "Technologies mastered", value: "5+" },
];

export const introData = {
  greeting: "Hello, I'm",
  name: "Mayank Sharma.",
  subtitle:
    "An experienced full-stack website developer with a passion for crafting unique digital experiences.",
};

export const aboutData = {
  description: `In my years as a developer, I seek to train every day. I have worked writing clean and responsive codes, performing continuous integration, and covering backend developer roles with Node.js and Postgres. I have led teams having empathy, exercising motivation to partners, and setting plans and goals together. My skills also include implementing system improvements, optimizing sites, standardizing patterns, and suggesting and executing ideas that add value to the project I'm working on. Some of the technologies that I have trained and worked on include (but are not limited to):`,
};

export const portfolioProjects = [
  {
    title: "Unqueue",
    description: "E-commerce platform for selling digital products",
    image: `${assetPrefix}/assets/unqueue.webm`,
    href: "https://unqueue.shop/",
  },
  {
    title: "InfiniteVPS",
    description: "High performance VPS hosting solution",
    image: `${assetPrefix}/assets/infinitevps.webm`,
    href: "#",
  },
  {
    title: "TranslateBot",
    description: "Powerful Multilingual Translation Bot for Discord",
    image: `${assetPrefix}/assets/translate_bot.webm`,
    href: "https://translatebot.app/",
  },
  {
    title: "Wrona",
    description: "Robotics-focused technology company",
    image: `${assetPrefix}/assets/wrona.jpeg`,
    href: "https://www.wrona.com/",
  },
  {
    title: "This website",
    description: "My personal website",
    image: `${assetPrefix}/assets/portfolio.webm`,
    href: "https://github.com/mayank/portfolio",
  },
];

export const services = [
  {
    service: "Frontend Development",
    description:
      "Creating stellar user interfaces and web experiences using the latest technologies.",
    icon: Code2,
  },
  {
    service: "UX Design",
    description:
      "Building intuitive, user-centric designs that drive engagement and conversion.",
    icon: Frame,
  },
  {
    service: "SEO Optimization",
    description:
      "Enhancing your website's visibility in search engines for increased organic traffic.",
    icon: SearchCheck,
  },
  {
    service: "Responsive Design",
    description:
      "Designing websites that look and perform equally well on all devices and screen sizes.",
    icon: MonitorSmartphone,
  },
  {
    service: "Backend Development",
    description:
      "Developing robust, scalable server-side logic for a wide range of web applications.",
    icon: Eye,
  },
];

export interface Job {
  Tab: string;
  Title: string;
  Date: string;
  Description: string[];
}

export const jobs: Job[] = resumeData.employment
  .map((job) => ({
    Tab: job.company,
    Title: job.title,
    Date: job.date,
    Description: job.bullets,
  }))
  .concat(
    resumeData.internships.map((job) => ({
      Tab: job.company,
      Title: `${job.title}(Internship)`,
      Date: job.date,
      Description: job.bullets,
    })),
  );

export { experience };
