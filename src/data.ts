import {
  Code2,
  Frame,
  SearchCheck,
  Eye,
  MonitorSmartphone,
} from "lucide-react";

const startDate = new Date(2021, 4, 31);
const endDate = new Date();

const startYear = startDate.getFullYear();
const startMonth = startDate.getMonth();
const endYear = endDate.getFullYear();
const endMonth = endDate.getMonth();

const experience = (
  ((endYear - startYear) * 12 + (endMonth - startMonth)) /
  12
).toFixed(1);

export const assetPrefix = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export const resumeData = {
  header: {
    name: "Mayank Sharma",
    title: "Software Developer"
  },
  details: {
    phone: "9650018572",
    email: "mayanksha200@gmail.com"
  },
  links: [
    { label: "Portfolio", url: "https://mayank200.github.io/portfolio/" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/mayank-sharma-568915ab/" },
    { label: "Github", url: "https://github.com/mayank200" }
  ],
  profile: `Experienced Software Engineer with ${experience} years in backend and full-stack development, specializing in scalable RESTful APIs and distributed systems. Proﬁcient in Node.js, TypeScript, Docker, and PostgreSQL, with a strong focus on performance and low-latency design. Built warehouse orchestration systems, automated CI/CD pipelines, and collaborated with cross-functional teams. Passionate about solving complex technical challenges, applying design principles, and optimizing systems for scalability and eﬃciency in high-volume environments.`,
  technicalSkills: [
    { category: "Languages", items: "JavaScript (ES6+), TypeScript, Python, C/C++, SQL, HTML5, CSS3" },
    { category: "Backend Development", items: "Node.js, FastAPI, RESTful APIs, Distributed Systems, Low-latency Design" },
    { category: "Frontend Development", items: "React, Next.js, Angular, jQuery, UI/UX Design (Figma integration)" },
    { category: "Database & ORM", items: "PostgreSQL, PrismaORM, Data Pipelines" },
    { category: "Cloud & DevOps", items: "Azure, Docker, Git, CI/CD Pipelines, Warehouse Orchestration" },
    { category: "AI & Machine Learning", items: "Keras, CNN, Machine Learning (ML), OCR, Facial Recognition" },
    { category: "Specialized Tools", items: "Marketo, Unity (Game Development), Arduino (Embedded C)" }
  ],
  education: [
    {
      degree: "B.Tech(Computer Engineer)",
      school: "GGSIPU, Delhi",
      date: "July 2017 — July 2021"
    }
  ],
  employment: [
    {
      title: "Sr. Solution Engineer",
      company: "Gammastack, Bengaluru",
      date: "May 2025 - March 2026",
      bullets: [
        "Architected distributed backend systems using Node.js and TypeScript, specifically optimizing for high-volume casino gaming environments.",
        "Built and optimized complex mathematical models to ensure precision, fairness, and performance of gaming systems.",
        "Validated payout structures and game outcomes to meet compliance and industry standards.",
        "Led a team of 5+ engineers, overseeing code reviews and mentoring to improve overall team productivity.",
        "Collaborated across teams to ensure seamless integration and high-performance delivery of distributed systems."
      ]
    },
    {
      title: "Backend Developer",
      company: "Tallect, Bengaluru",
      date: "July 2023 — January 2025",
      bullets: [
        "Designed and developed scalable backend applications for in-company Product using Node.js, GIT, TypeScript, JavaScript and Azure ensuring accurate logic and deployment.",
        "Built and optimized complex mathematical models to maintain precision, fairness, and high performance of gaming systems.",
        "Validated payout structures and game outcomes to meet compliance and industry standards.",
        "Developed and integrated full-stack features using React and collaborated with Figma UI designs for seamless user experience.",
        "Fostered strong client relationships by participating in requirement discussions, product demos, and feedback sessions.",
        "Collaborated with cross-functional teams to deliver high-performance, scalable distributed systems."
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Akal Information Systems, Delhi",
      date: "August 2021 — July 2023",
      bullets: [
        "Developed full-stack applications using Node.js, TypeScript, JavaScript, Angular, React, GIT, PostgreSQL, and Azure, delivering scalable and high-performance solutions.",
        "Designed and implemented backend services and data pipelines for real-time HR systems and job portal platforms.",
        "Applied clean architecture principles to build modular, testable, and maintainable codebases.",
        "Collaborated with design teams, integrating Figma UI into responsive and user-friendly web applications.",
        "Contributed to system design and architectural decisions to ensure scalability, reliability, and performance optimization.",
        "Spearheaded development of dynamic web applications, enhancing user experience and system efficiency.",
        "Orchestrated backend services for real-time data processing across distributed systems.",
        "Championed clean coding practices, code reviews, and best standards to improve maintainability.",
        "Led and mentored team members, demonstrating strong team management and collaboration skills."
      ]
    }
  ],
  internships: [
    {
      title: "UI/UX Developer",
      company: "Mumbai First, Delhi",
      date: "August 2020 — November 2020",
      bullets: [
        "Collaborated with managers to create web and video poster designs.",
        "Contributed to website enhancements, focusing on headers and footers.",
        "Maintained video and thumbnail content for YouTube publications."
      ]
    },
    {
      title: "Game Developer",
      company: "Belivable, Delhi",
      date: "March 2021 — April 2021",
      bullets: [
        "Designed and implemented interactive game areas using Unity.",
        "Developed board games with reusable logic and common functionality for rapid prototyping."
      ]
    }
  ],
  courses: [
    {
      name: "Arduino (Embedded C, 8085)",
      institution: "AEDIFICO",
      date: "July 2018 — November 2018"
    },
    {
      name: "Machine Learning using Python",
      institution: "AEDIFICO",
      date: "January 2019 — May 2019"
    },
    {
      name: "Android using Kotlin",
      institution: "AEDIFICO",
      date: "March 2018 — June 2025"
    }
  ],
  projects: [
    {
      name: "HUB-CRM",
      tech: "Angular, Node.js, CI(PHP), PostgreSQL",
      bullets: [
        "Developed a centralized CRM system to streamline job and applicant tracking.",
        "Engineered backend infrastructure for real-time insights into employee data and workﬂow."
      ]
    },
    {
      name: "Token System",
      tech: "Angular, Node.js, PostgreSQL",
      bullets: [
        "Built ticket generation system with task tracking, notiﬁcations, and real-time status updates.",
        "Implemented role-based notiﬁcations and modular ticket ﬂow."
      ]
    },
    {
      name: "Driver Awareness System",
      tech: "Python, Keras, CNN, ML",
      bullets: [
        "Created driver drowsiness detection system using facial recognition and motion detection.",
        "Integrated ML-based alert mechanisms for improved safety."
      ]
    },
    {
      name: "Handwriting to Text Conversion",
      tech: "Python, ML",
      bullets: [
        "Developed OCR-based tool to convert handwritten text into digital format using CNN."
      ]
    },
    {
      name: "Smart Plant",
      tech: "Embedded C, Arduino",
      bullets: [
        "Engineered IoT solution to automate watering based on soil moisture levels."
      ]
    }
  ]
};

export const aboutStats = [
  { label: "Companies worked with", value: "3+" },
  { label: "Years of experience", value: `${Math.floor(Number(experience))}+` },
  { label: "Technologies mastered", value: "5+" },
];

export const introData = {
  greeting: "Hello, I'm",
  name: "Mayank Sharma.",
  subtitle: "An experienced full-stack website developer with a passion for crafting unique digital experiences."
};

export const aboutData = {
  description: `In my years as a developer, I seek to train every day. I have worked writing clean and responsive codes, performing continuous integration, and covering backend developer roles with Node.js and Postgres. I have led teams having empathy, exercising motivation to partners, and setting plans and goals together. My skills also include implementing system improvements, optimizing sites, standardizing patterns, and suggesting and executing ideas that add value to the project I'm working on. Some of the technologies that I have trained and worked on include (but are not limited to):`
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

export const jobs: Job[] = resumeData.employment.map((job) => ({
  Tab: job.company,
  Title: job.title,
  Date: job.date,
  Description: job.bullets,
})).concat(resumeData.internships.map((job) => ({
  Tab: job.company,
  Title: `${job.title}(Internship)`,
  Date: job.date,
  Description: job.bullets,
})));

export { experience };
