/* eslint-disable react/jsx-no-comment-textnodes */
import Container from "@/components/Container";
import { useEffect, useRef, Suspense, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Code2,
  Frame,
  SearchCheck,
  Eye,
  MonitorSmartphone,
} from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { cn, scrollTo } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import VanillaTilt from "vanilla-tilt";
import { motion, AnimatePresence } from "framer-motion";

const aboutStats = [
  { label: "Companies worked with", value: "3+" },
  { label: "Years of experience", value: "4+" },
  { label: "Technologies mastered", value: "5+" },
];

const startDate = new Date(2021, 8, 31);
const endDate = new Date();

const startYear = startDate.getFullYear();
const startMonth = startDate.getMonth();
const endYear = endDate.getFullYear();
const endMonth = endDate.getMonth();

const experience = (
  ((endYear - startYear) * 12 + (endMonth - startMonth)) /
  12
).toFixed(1);

const projects = [
  {
    title: "Unqueue",
    description: "E-commerce platform for selling digital products",
    image: "/assets/unqueue.webm",
    href: "https://unqueue.shop/",
  },
  {
    title: "InfiniteVPS",
    description: "High performance VPS hosting solution",
    image: "/assets/infinitevps.webm",
    href: "#",
  },
  {
    title: "TranslateBot",
    description: "Powerful Multilingual Translation Bot for Discord",
    image: "/assets/translate_bot.webm",
    href: "https://translatebot.app/",
  },
  {
    title: "Wrona",
    description: "Robotics-focused technology company",
    image: "/assets/wrona.jpeg",
    href: "https://www.wrona.com/",
  },
  {
    title: "This website",
    description: "My personal website",
    image: "/assets/portfolio.webm",
    href: "https://github.com/wendoj/portfolio",
  },
];

const services = [
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

interface Job {
  Tab: string;
  Title: string;
  Date: string;
  Description: string[];
}

const jobs: Job[] = [
  {
    Tab: "Gammastack",
    Title: "Sr. Solution Developer",
    Date: "May 2025- Present",
    Description: [
      "Served as a Backend and DevOps Engineer across multiple projects, overseeing end-to-end development and deployment processes.",
      "Managed and guided a team of 3-5 engineers, ensuring timely delivery of high-quality solutions to clients.",
      "Handled multiple projects simultaneously, from development through production, successfully delivering solutions to various clients.",
      "Assisted in onboarding and conducting interviews for prospective candidates, contributing to team growth and recruitment.",
      "Engaged with clients regularly, participating in discussions and negotiations to align project deliverables with business requirements.",
    ],
  },
  {
    Tab: "Talent Monk",
    Title: "Backend Developer",
    Date: "May 2023 - January 2025",
    Description: [
      "Proficient in building scalable and robust server-side applications using Node.js and TypeScript.",
      "Experienced in designing and implementing database schemas using Prisma and PostgreSQL.",
      "Strong understanding of authentication, authorization, and security principles.",
      "Familiar with cloud platforms like Azure for deploying and managing applications.",
    ],
  },
  {
    Tab: "Akal Infosys",
    Title: "Fullstack Developer",
    Date: "August 2021 - June 2023",
    Description: [
      "Creation and maintenance of REST APIs using Node.Js, Express and sometimes also Php and .Net .",
      "Developement and Maintaince of Function in Sql(PostgreSQL) to resuce load while using Node.",
      "Implementation of continuous integration and daily backups.",
      "Creation and maintenance of Platforms Done in Angular, Angular Material, Node, PostgreSQL, RxJS, (s)css with graphics (configurable), responsiveness, and user management and configuration of general parameters.",
    ],
  },
  {
    Tab: "Mumbai First",
    Title: "UI / UX Designer(Intern)",
    Date: "August 2020 – Nov. 2020",
    Description: [
      "Assisting with the design and development of basic web pages and interfaces, using HTML, CSS, and JavaScript.",
      "Working with Adobe Creative Suite to modify images and create engaging visual content for web and social media platforms.",
      "Assisting with video editing, including trimming, cutting, and adding visual effects to create engaging video content.",
      "Conducting user research and testing to gather feedback on designs, and using this feedback to iterate and improve designs.",
    ],
  },
];

export default function Home() {
  const refScrollContainer = useRef(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // const toggle = (index: number) => {
  //   setActiveIndex(activeIndex === index ? null : index);
  // };

  // handle scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
    }

    function handleScroll() {
      let current = "";
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("nav-active");

        if (li.getAttribute("href") === `#${current}`) {
          li.classList.add("nav-active");
          console.log(li.getAttribute("href"));
        }
      });
    }

    void getLocomotive();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  // card hover effect
  useEffect(() => {
    const tilt: HTMLElement[] = Array.from(document.querySelectorAll("#tilt"));
    VanillaTilt.init(tilt, {
      speed: 300,
      glare: true,
      "max-glare": 0.1,
      gyroscope: true,
      perspective: 900,
      scale: 0.9,
    });
  }, []);

  return (
    <Container>
      <div ref={refScrollContainer}>
        <Gradient />

        {/* Intro */}
        <section
          id="home"
          data-scroll-section
          className="mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between"
        >
          <div className={styles.intro}>
            <div
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed=".09"
              className="flex flex-row items-center space-x-1.5"
            >
              <span className={styles.pill}>node</span>
              <span className={styles.pill}>react</span>
              <span className={styles.pill}>typescript</span>
              <span className={styles.pill}>angular</span>
            </div>
            <div>
              <h1
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                data-scroll-direction="horizontal"
              >
                <span className="text-6xl tracking-tighter text-foreground 2xl:text-8xl">
                  Hello, I&apos;m
                  <br />
                </span>
                <span className="clash-grotesk text-gradient text-4xl 2xl:text-6xl">
                  Mayank Sharma.
                </span>
              </h1>
              <p
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                className="mt-1 max-w-lg tracking-tight text-muted-foreground 2xl:text-xl"
              >
                An experienced full-stack website developer with a passion for
                crafting unique digital experiences.
              </p>
            </div>
            <span
              data-scroll
              data-scroll-enable-touch-speed
              data-scroll-speed=".06"
              className="flex flex-row items-center space-x-1.5 pt-6"
            >
              <Link href="mailto:mayanksha200@gmail.com" passHref>
                <Button>
                  Get in touch <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => scrollTo(document.querySelector("#about"))}
              >
                Learn more
              </Button>
            </span>

            <div
              className={cn(
                styles.scroll,
                isScrolled && styles["scroll--hidden"],
              )}
            >
              Scroll to discover{" "}
              <TriangleDownIcon className="mt-1 animate-bounce" />
            </div>
          </div>
          <div
            data-scroll
            data-scroll-speed="-.01"
            id={styles["canvas-container"]}
            className="mt-14 h-full w-full xl:mt-0"
          >
            <Suspense fallback={<span>Loading...</span>}>
              <Spline scene="/assets/scene.splinecode" />
            </Suspense>
          </div>
        </section>

        {/* About */}
        <section id="about" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-14 flex max-w-6xl flex-col justify-start space-y-10"
          >
            {/* <h2 className="py-16  pb-2 text-3xl font-light leading-normal tracking-tighter text-foreground xl:text-[40px]">
              I&apos;m an experienced full-stack developer proficient in TypeScript, React, Node, Angular
              since 2021. My experience spans from startups to mid-sized
              companies, where I&apos;ve been instrumental in the entire product
              design process; from ideation and wireframing, through
              prototyping, to the delivery of the final product, all while
              efficiently collaborating with cross-functional teams.
            </h2> */}
            <h2 className="py-16  pb-2 text-3xl font-light leading-normal tracking-tighter text-foreground xl:text-[1.7rem]">
              In my{" "}
              <span className="underline">
                {" "}
                {experience} years as a developer
              </span>
              , I seek to train every day. I have worked writing{" "}
              <span className="underline">clean and responsive codes</span>,{" "}
              <span className="underline">
                performing continuous integration
              </span>
              , and covering backend developer roles with{" "}
              <span className="underline">Node.js and Postgres</span>. I have
              led teams having empathy, exercising motivation to partners, and
              setting plans and goals together. My skills also include
              implementing system improvements, optimizing sites, standardizing
              patterns, and suggesting and executing ideas that add value to the
              project I&apos;m working on. Some of the technologies that I have
              trained and worked on include (but are not limited to):
            </h2>
            <div className="grid grid-cols-2 gap-8 xl:grid-cols-3">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center xl:items-start xl:text-start"
                >
                  <span className="clash-grotesk text-gradient text-4xl font-semibold tracking-tight xl:text-6xl">
                    {stat.value}
                  </span>
                  <span className="tracking-tight text-muted-foreground xl:text-lg">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}

        <section
          id="experience"
          data-scroll-section
          className="bg-gray-900 px-6 py-16 text-white md:px-12"
        >
          <div className="mx-auto max-w-4xl">
            {/* Section Header */}
            <div className="mb-5" data-aos="fade-up" data-aos-duration="1000">
              <h3 className="e-font section-title text-4xl font-semibold">
                Experience
              </h3>
            </div>

            <div className="flex flex-col gap-8 md:flex-row">
              {/* Tabs */}
              <ul className="flex gap-2 md:flex-col">
                {jobs.map((job, index) => (
                  <li
                    key={job.Tab}
                    className={`cursor-pointer rounded-l-md border-l-4 px-4 py-2 transition-colors duration-300 ${
                      activeIndex === index
                        ? "border-green-400 bg-gray-800 text-green-400"
                        : "border-gray-700 text-gray-300 hover:text-green-400"
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {job.Tab}
                  </li>
                ))}
              </ul>

              {/* Description Panel */}
              <div className="relative flex-1">
                <AnimatePresence mode="wait">
                  {jobs[activeIndex] && (
                    <motion.div
                      key={jobs[activeIndex].Tab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="min-h-[200px] rounded-md bg-gray-800 p-6"
                    >
                      <h4 className="mb-2 text-xl font-medium text-white">
                        {jobs[activeIndex].Title} |{" "}
                        <span className="text-green-400">
                          {jobs[activeIndex].Tab}
                        </span>
                      </h4>
                      <h5 className="mb-4 font-mono text-sm text-gray-400">
                        {jobs[activeIndex].Date}
                      </h5>
                      {jobs[activeIndex].Description.map((desc, i) => (
                        <p
                          key={i}
                          className="relative mb-2 pl-4 text-gray-300 before:absolute before:left-0 before:text-green-400 before:content-['▹']"
                        >
                          {desc}
                        </p>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-24 flex flex-col justify-start space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                staggerChildren: 0.5,
              }}
              viewport={{ once: true }}
              className="grid items-center gap-1.5 md:grid-cols-2 xl:grid-cols-3"
            >
              <div className="flex flex-col py-6 xl:p-6">
                <h2 className="text-4xl font-medium tracking-tight">
                  Need more info?
                  <br />
                  <span className="text-gradient clash-grotesk tracking-normal">
                    I got you.
                  </span>
                </h2>
                <p className="mt-2 tracking-tighter text-secondary-foreground">
                  Here are some of the services I offer. If you have any
                  questions, feel free to reach out.
                </p>
              </div>
              {services.map((service) => (
                <div
                  key={service.service}
                  className="flex flex-col items-start rounded-md bg-white/5 p-14 shadow-md backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md"
                >
                  <service.icon className="my-6 text-primary" size={20} />
                  <span className="text-lg tracking-tight text-foreground">
                    {service.service}
                  </span>
                  <span className="mt-2 tracking-tighter text-muted-foreground">
                    {service.description}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" data-scroll-section className="my-64">
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary/[6.5%] to-white/5 px-8 py-16 text-center xl:py-24"
          >
            <h2 className="text-4xl font-medium tracking-tighter xl:text-6xl">
              Let&apos;s work{" "}
              <span className="text-gradient clash-grotesk">together.</span>
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I&apos;m currently available for freelance work and open to
              discussing new projects.
            </p>
            <Link href="mailto:wendoj@proton.me" passHref>
              <Button className="mt-6">Get in touch</Button>
            </Link>
          </div>
        </section>
      </div>
    </Container>
  );
}

function Gradient() {
  return (
    <>
      {/* Upper gradient */}
      <div className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7980fe" />
              <stop offset={1} stopColor="#f0fff7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lower gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9A70FF" />
              <stop offset={1} stopColor="#838aff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
