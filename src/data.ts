import {
  Code2,
  Frame,
  SearchCheck,
  Eye,
  MonitorSmartphone,
} from "lucide-react";

const startDate = new Date(2021, 3, 1);
const endDate = new Date();

const startYear = startDate.getFullYear();
const startMonth = startDate.getMonth();
const endYear = endDate.getFullYear();
const endMonth = endDate.getMonth();

const experience = Number(
  (((endYear - startYear) * 12 + (endMonth - startMonth)) / 12).toFixed(1),
).toString();

export const assetPrefix =
  process.env.NODE_ENV === "production" ? "/portfolio" : "";

export const resumeData = {
  header: {
    name: "Mayank Sharma",
    title: "Software Developer",
  },
  details: {
    phone: "9650018572",
    email: "mayanksha200@gmail.com",
  },
  links: [
    { label: "Portfolio", url: "https://mayank200.github.io/portfolio/" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/mayank-sharma-568915ab/",
    },
    { label: "Github", url: "https://github.com/mayank200" },
  ],
 
  "profile": "High-caliber Technical Lead with over 5 years of professional software engineering experience, specializing in distributed systems, advanced System Design, and Client Relationship management within Agile environments. Expert polyglot engineer proficient across Python (FastAPI), Node.js (NestJS), JavaScript, and TypeScript, with a proven track record of architecting scalable web applications using React and Next.js / Angular. Adept at managing cloud-native infrastructure at scale across AWS and Azure, deploying automated Git-managed repositories, containerizing services via Docker, and building resilient CI/CD pipelines alongside production-grade Generative AI applications (LLMs, RAG) and Postgres/MongoDB layers.",
  "technicalSkills": [
    {
      "category": "Core Technologies & Languages",
      "items": "JavaScript, TypeScript, Python, Node.js (NestJS), FastAPI"
    },
    {
      "category": "Frontend & Frameworks",
      "items": "React, Angular, Next.js, Chrome DevTools"
    },
    {
      "category": "Cloud, Infrastructure & DevOps",
      "items": "Amazon Web Services (AWS), Microsoft Azure, Docker (Containerization), CI/CD Pipelines, Git (Version Control)"
    },
    {
      "category": "Databases & AI Architecture",
      "items": "PostgreSQL, MongoDB, NoSQL Databases, System Design, Large Language Models (LLM), Retrieval-Augmented Generation (RAG)"
    },
    {
      "category": "Agile & Process Leadership",
      "items": "Agile, Team Leader, Client Relationship Management"
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
    {
      "title": "Sr. Solution Engineer",
      "company": "Gammastack, Bengaluru",
      "date": "May 2025 - March 2026",
      "bullets": [
        "Served as a Team Leader to drive technical execution and distributed System Design for enterprise core platform services using Node.js (NestJS), JavaScript, TypeScript, and Python (FastAPI).",
        "Architected scalable cloud infrastructures across AWS and Azure, managing containerized deployments via Docker and maintaining continuous environment stability using automated CI/CD pipelines.",
        "Developed responsive frontend modules and analytical dashboards using React, Angular, and Next.js, leveraging Chrome DevTools to eliminate runtime bottlenecks and improve application rendering.",
        "Managed critical Client Relationship dynamics and technical delivery schedules by translating system requirements into clear operational sprints using Git version control and Agile lifecycles.",
        "Provided hands-on technical guidance, established robust design guidelines, and unblocked engineering teams through advanced system troubleshooting and architectural scaling."
      ]
    },
    {
      "title": "Full Stack Developer",
      "company": "Tallect, Bengaluru",
      "date": "July 2023 — January 2025",
      "bullets": [
        "Developed and scaled cloud-native microservices on AWS and Azure platforms using TypeScript, Node.js, and Python (FastAPI), implementing resilient System Design principles.",
        "Integrated production-grade Large Language Models (LLM) and customized Retrieval-Augmented Generation (RAG) pipelines into backend architectures, scaling performance across MongoDB and NoSQL data clusters.",
        "Built automated CI/CD pipelines and managed stable application environments utilizing Docker containerization to accelerate delivery speed and overall execution reliability.",
        "Designed and maintained user-facing frontend components using React and Angular, profiling network assets via Chrome DevTools to optimize client-side functionality and speed.",
        "Collaborated within cross-functional Agile structures, tracking repository commits through Git independently while managing daily technical alignment across project components."
      ]
    },
    {
      "title": "Full Stack Developer",
      "company": "Akal Information Systems, Delhi",
      "date": "August 2021 — July 2023",
      "bullets": [
        "Built full-stack web applications using React, Angular, Node.js (NestJS), and Python, delivering robust software features under strict Agile timelines.",
        "Designed relational database schemas using PostgreSQL, ensuring optimal transactional integrity, clean data indexing strategies, and efficient query layouts.",
        "Oversaw multi-branch Git development lifecycles, setting up simple CI/CD pipelines and utilizing Docker to build consistent running environments for software verification workflows.",
        "Utilized Chrome DevTools to diagnose rendering performance, handle client-side exceptions, and profile web pages to achieve highly responsive layouts.",
        "Nurtured solid Client Relationship practices by interpreting user requests, aligning delivery pipelines, and maintaining communication during iterative application deployments."
      ]
    }
  ],
  "internships": [
    {
      "title": "UI/UX & Front-End Developer",
      "company": "Mumbai First, Delhi",
      "date": "August 2020 — November 2020",
      "bullets": [
        "Translated visual layout specifications and UI/UX concepts into responsive, browser-optimized web modules using JavaScript and clean styling rules.",
        "Maintained stable code versions using Git to coordinate daily code changes smoothly across development branch layers.",
        "Leveraged Chrome DevTools to profile page layouts, optimize network asset rendering speeds, and debug client-side script performance."
      ]
    },
    {
      "title": "Software Engineer (Game Development)",
      "company": "Believable, Delhi",
      "date": "March 2021 — April 2021",
      "bullets": [
        "Architected modular and decoupled frontend logic modules under structured System Design patterns to support rapid feature updates.",
        "Optimized client-side rendering loops and state management schemas to minimize compute latency and maximize operational smoothness.",
        "Utilized Git for code branching management, collaborating within iterative development blocks to convert functional criteria into modular layout scripts."
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
