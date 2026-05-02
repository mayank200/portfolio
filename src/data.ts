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
  profile: `Experienced Full Stack Engineer with over ${experience} years of expertise in architecting scalable web applications using React, Node.js, and Python. Proven track record in designing high-performance PostgreSQL databases and deploying enterprise-grade services on the Azure framework. Expert in building low-latency RESTful APIs with FastAPI and Node.js, taking complete ownership of software modules while applying advanced design patterns in Agile environments.`,
  technicalSkills: [
    {
      category: "Languages",
      items: "JavaScript (ES6+), TypeScript, Python (Expert), SQL, HTML5, CSS3/SASS",
    },
    {
      category: "Full Stack Development",
      items: "React JS, Node.js, Python (FastAPI/Flask), Express.js, RESTful Web Services, Microservices Architecture",
    },
    {
      category: "Cloud & Frameworks",
      items: "Azure (App Services, Functions), AWS, Docker, Kubernetes, Web Application Hosting",
    },
    {
      category: "Database & ORM",
      items: "PostgreSQL (Advanced), MySQL, Redis, PrismaORM, SQLAlchemy, Relational Data Modeling",
    },
    {
      category: "Engineering Practices",
      items: "Design Patterns, Unit Testing (Jest/PyTest), Software Integration, Debugging, CI/CD Pipelines",
    },
    {
      category: "Agile & Leadership",
      items: "Agile/Scrum, JIRA, Complete Module Ownership, Customer Coordination, Technical Decision Making",
    },
    {
      category: "AI & ML (Specialized)",
      items: "Agentic AI Workflows, LLM Integration, RAG Patterns, NLP, Machine Learning (ML)",
    },
  ],
  education: [
    {
      degree: "B.Tech (Computer Engineer)",
      school: "GGSIPU, Delhi",
      date: "July 2017 — July 2021",
    },
  ],
  employment: [
    {
      title: "Sr. Solution Engineer",
      company: "Gammastack, Bengaluru",
      date: "May 2025 - March 2026",
      bullets: [
        "Architected distributed backend services for global casino environments using Node.js and Python, ensuring 99.9% availability for high-concurrency gaming modules.",
        "Engineered high-performance data processing endpoints with FastAPI to handle real-time game state transitions and player payout logic on Azure.",
        "Developed responsive React JS dashboards for Live Ops, integrating complex RESTful APIs to visualize massive real-time gaming datasets.",
        "Optimized PostgreSQL relational schemas and indexing to maintain sub-second query latency for mission-critical, high-volume transactions.",
        "Led software integration and unit testing (Jest/PyTest), applying advanced design patterns to ensure modularity across full-stack gaming solutions.",
      ],
    },
    {
      title: "Backend Developer",
      company: "Tallect, Bengaluru",
      date: "July 2023 — January 2025",
      bullets: [
        "Designed and scaled cloud-native architectures on Azure using Python (FastAPI) and Node.js, delivering high-quality web services within Agile timelines.",
        "Integrated Agentic AI workflows and LLM-driven features into production, utilizing Python for complex data-processing and autonomous technical decisions.",
        "Developed modular React components and microservices, focusing on seamless communication via asynchronous messaging and software integration.",
        "Executed end-to-end debugging and containerized deployments on Azure, ensuring the reliability of PostgreSQL-backed data pipelines.",
        "Coordinated with customers to translate complex business needs into technical specifications for iterative Python and JavaScript-based releases.",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Akal Information Systems, Delhi",
      date: "August 2021 — July 2023",
      bullets: [
        "Developed full-stack web applications using React and Node.js, implementing specialized FastAPI-driven modules for real-time recruitment analytics.",
        "Owned the design of relational PostgreSQL databases for HR systems, optimizing query performance and data integrity for high-concurrency workflows.",
        "Built responsive, user-friendly web UIs following cross-browser design principles, translating Figma designs into production-ready React components.",
        "Applied software engineering fundamentals and Python design patterns to build modular, testable codebases within an Agile/Scrum framework.",
        "Mentored junior engineers on debugging best practices for Python and JavaScript, ensuring consistent execution and high-quality deliverables.",
      ],
    },
  ],
  internships: [
    {
      title: "UI/UX & Front-End Developer",
      company: "Mumbai First, Delhi",
      date: "August 2020 — November 2020",
      bullets: [
        "Collaborated with project managers and business stakeholders to translate visual requirements into responsive web components using JavaScript and CSS.",
        "Engineered website enhancements and optimized UI layouts, specifically modularizing header and footer components for improved reusability across the platform.",
        "Managed digital asset pipelines and optimized media content for web performance, ensuring high-speed delivery for YouTube-integrated publications.",
      ],
    },
    {
      title: "Software Engineer (Game Development)",
      company: "Believable, Delhi",
      date: "March 2021 — April 2021",
      bullets: [
        "Architected and implemented modular, reusable game logic using C#, applying System Design principles to enable rapid prototyping of complex board game mechanics.",
        "Optimized front-end performance and asset management within Unity, ensuring high frame rates and a seamless user experience across various hardware configurations.",
        "Designed and optimized local data storage schemas to handle persistent game states, aligning with best practices for efficient data retrieval and integrity.",
        "Collaborated with project stakeholders to translate game requirements into technical specifications, utilizing Agile practices to deliver high-quality interactive areas.",
      ],
    },
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
  projects: [
    {
      name: "HUB-CRM",
      tech: "Angular, Node.js, CI(PHP), PostgreSQL",
      bullets: [
        "Developed a centralized CRM system to streamline job and applicant tracking.",
        "Engineered backend infrastructure for real-time insights into employee data and workﬂow.",
      ],
    },
    {
      name: "Token System",
      tech: "Angular, Node.js, PostgreSQL",
      bullets: [
        "Built ticket generation system with task tracking, notiﬁcations, and real-time status updates.",
        "Implemented role-based notiﬁcations and modular ticket ﬂow.",
      ],
    },
    {
      name: "Driver Awareness System",
      tech: "Python, Keras, CNN, ML",
      bullets: [
        "Created driver drowsiness detection system using facial recognition and motion detection.",
        "Integrated ML-based alert mechanisms for improved safety.",
      ],
    },
    {
      name: "Handwriting to Text Conversion",
      tech: "Python, ML",
      bullets: [
        "Developed OCR-based tool to convert handwritten text into digital format using CNN.",
      ],
    },
    {
      name: "Smart Plant",
      tech: "Embedded C, Arduino",
      bullets: [
        "Engineered IoT solution to automate watering based on soil moisture levels.",
      ],
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
