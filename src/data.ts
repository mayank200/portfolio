import {
  Code2,
  Frame,
  SearchCheck,
  Eye,
  MonitorSmartphone,
} from "lucide-react";

const startDate = new Date(2016, 4, 31);
const endDate = new Date();

const startYear = startDate.getFullYear();
const startMonth = startDate.getMonth();
const endYear = endDate.getFullYear();
const endMonth = endDate.getMonth();

const experience = parseFloat((
  ((endYear - startYear) * 12 + (endMonth - startMonth)) /
  12
).toFixed(1));

export const assetPrefix =
  process.env.NODE_ENV === "production" ? "/portfolio" : "";

export const resumeData = {
 header: {
    name: "Sushmita Dhawni",
    title: "Senior QA Automation Engineer | Test Lead",
  },
  details: {
    phone: "9772010224",
    email: "sdhawnicmr@gmail.com",
  },
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/sushmita-dhawni-5774932b0/" },
    { label: "Github", url: "https://github.com/sdhawnicmr" },
  ],
  profile: `Senior QA professional with over ${experience} years of experience in software testing, specializing in both Manual and Automation testing for large-scale web applications. Expert in architecting Hybrid and Page Object Model (POM) frameworks using Python, Selenium WebDriver, and PyTest. Proven track record in the Banking, Mortgage, and IoT domains, delivering comprehensive testing solutions across the STLC and SDLC in Agile environments.`,
  technicalSkills: [
    {
      category: "Testing & Automation",
      items: "Selenium WebDriver, Python (Expert), PyTest (Expert), Squish Tool, REST API Testing, BDD, Hybrid Frameworks, Page Object Model (POM)",
    },
    {
      category: "Testing Methodologies",
      items: "Functional, Regression (UAT), System Integration (SIT), Smoke, E2E, Sanity, SDLC, STLC, Agile/Scrum",
    },
    {
      category: "Utilities & Tools",
      items: "JIRA, HP ALM, Postman, PyCharm, AutoIT (Window popups), PANDAS (Test Data Management)",
    },
    {
      category: "Databases & OS",
      items: "SQL, Windows XP, Linux/Unix environments",
    },
    {
      category: "Domain Expertise",
      items: "Banking & Finance, Mortgage, IoT (Smart Speaker systems), Media & Content",
    },
    {
      category: "Engineering Practices",
      items: "Defect Tracking, Test Plan Creation, Test Data Management, Script Debugging, XPATH & CSS Locators",
    }
  ],
  education: [
    {
      degree: "BE (Bachelor of Engineering)",
      school: "CMRIT Bangalore",
      date: "2008 — 2012",
    },
    {
      degree: "Diploma in Machine Learning and Data Science",
      school: "IIT Kanpur",
      date: "2020",
    }
  ],
  employment: [
    {
      title: "UAT Analyst",
      company: "Sonata Software Ltd, Bengaluru",
      date: "Oct 2024 - Present",
      bullets: [
        "Led testing for the full Pennymac mortgage lifecycle, from loan origination to funding.",
        "Formulated and maintained comprehensive test plans, scenarios, and execution strategies for high-stakes financial modules.",
        "Executed manual functional testing and performed sanity checks on new builds to ensure production readiness.",
        "Managed the end-to-end defect lifecycle, including identification, reporting, and tracking until closure."
      ],
    },
    {
      title: "Test Specialist",
      company: "LTI Mindtree, Bengaluru",
      date: "April 2022 - April 2024",
      bullets: [
        "Automated API and User Interface testing using the PyTest framework for multinational banking services.",
        "Developed Python-based test scripts to validate security-related scenarios and strict financial policy enforcement.",
        "Conducted thorough requirement analysis to translate product specifications into automated test suites.",
        "Collaborated with developers to resolve issues identified during functional and regression testing phases."
      ],
    },
    {
      title: "QA Engineer",
      company: "TSB Media Venture Pvt Ltd, Delhi",
      date: "Dec 2020 - April 2022",
      bullets: [
        "Tested real-time content unlocking and buying mechanisms for a frictionless media subscription platform.",
        "Performed sanity, functionality, and regression testing to ensure seamless user transactions.",
        "Drafted detailed test scenarios based on business requirement documents for iterative releases."
      ],
    },
    {
      title: "QA Engineer",
      company: "Sama Nextgen, Bengaluru",
      date: "July 2018 - Oct 2019",
      bullets: [
        "Acted as the Regression Single Point of Contact (SPOC) for a futuristic IoT smart speaker project.",
        "Validated Wi-Fi connectivity and performance across diverse smart home devices including cameras and thermostats.",
        "Tested HTTP APIs for Android/iOS mobile app integration and multi-source media playback (Spotify/TuneIn).",
        "Managed Technical Project Requests (TPR) by creating dedicated test plans and scripts within HP ALM."
      ],
    },
    {
      title: "Software Developer/QA",
      company: "IBM India Pvt Ltd, Kolkata",
      date: "Sept 2012 - July 2015",
      bullets: [
        "Supported a web-based account opening system for Flex Accounts and Credit Cards targeting the youth market.",
        "Served as the Defect SPOC, leading defect triage calls and providing real-time status updates to stakeholders.",
        "Coordinated with the Test Data Management team to procure and condition account data for complex SIT/UAT cycles."
      ],
    }
  ],
  internships: [],
  certifications: [
    {
      name: "Test Lead Certification",
      institution: "Professional Body",
      date: "2021",
    }
  ],
  courses: [],
  projects: [
    {
      name: "Doc and Order Verifix",
      tech: "Manual & UAT Testing",
      bullets: [
        "Validated mortgage loan application workflows from inception to funding.",
      ],
    },
    {
      name: "SAB Automation",
      tech: "Python, PyTest, API Testing",
      bullets: [
        "Automated security and policy validation for multinational banking interfaces.",
      ],
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

export const jobs: Job[] = resumeData.employment.map((job) => ({
  Tab: job.company,
  Title: job.title,
  Date: job.date,
  Description: job.bullets,
})).concat(resumeData.internships.map((job:any) => ({
  Tab: job.company,
  Title: `${job.title}(Internship)`,
  Date: job.date,
  Description: job.bullets,
})));

export { experience };
