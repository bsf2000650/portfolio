import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  tailwind,
  nodejs,
  expressjs,
  nestjs,
  mysql,
  psql,
  mongodb,
  microrage_solutions,
  hashlogics,
  wamolabs,
  rabbah,
  vcv,
  splitr,
  backend,
  web,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Apps Developer (MERN)",
    icon: web,
  },
  {
    title: "Frontend Developer (React)",
    icon: web,
  },
  {
    title: "Backend Developer (Node)",
    icon: backend,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "Nest JS",
    icon: nestjs,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "Postgre Sql",
    icon: psql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
];

const experiences = [
  {
    title: "Frontend Developer (React JS)",
    company_name: "Microrage Solutions",
    icon: microrage_solutions,
    iconBg: "#383E56",
    date: "July 2023 - June 2023",
    points: [
      "Redeveloped company's profile website using React.",
      "Collaborated with other developers to enhance performance and speed.",
      "Implemented responsive design, ensuring the website displays properly on all devices.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Hashlogics",
    icon: hashlogics,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Nov 2024",
    points: [
      "Implemented various ideas using Bubble.io technology.",
      "Developed JR Solar for a solar systems company to manage their business and ViralForge to provide content ideas for TikTok.",
      "Collaborated with other developers to optimize the apps and ensured responsive design.",
      "Participated in code reviews and provided constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer (MERN)",
    company_name: "Wamolabs",
    icon: wamolabs,
    iconBg: "#383E56",
    date: "July 2025 - November 2025",
    points: [
      "Worked on Rabbah, a dashboard-based web app providing sales transaction insights to multiple merchants occurring on different machines installed at different locations.",
      "Assisted in redesigning the frontend interface.",
      "Ensured seamless and responsive design across all devices.",
    ],
  },
];

const certifications = [
  {
    certificate:
      "After completing the FreeCodeCamp Responsive Web Design course, I noticed an improvement in my frontend skills.",
    name: "FreeCodeCamp - Responsive Web Design",
    designation: "CFO",
    company: "FreeCodeCamp",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU90JTl6N1xQ-KPkqjrQV9_g7X62NDgo3EiQ&s",
  },
  {
    certificate:
      "This certificate helped me think logically and develop a problem-solving mindset.",
    name: "FreeCodeCamp - JavaScript DSA",
    designation: "COO",
    company: "FreeCodeCamp",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU90JTl6N1xQ-KPkqjrQV9_g7X62NDgo3EiQ&s",
  },
];

const projects = [
  {
    name: "Rabbah",
    description:
      "Web-based platform that shows sales transaction insights to multiple merchants occurring on different machines installed at various locations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nestjs",
        color: "green-text-gradient",
      },
      {
        name: "postgre",
        color: "pink-text-gradient",
      },
    ],
    image: rabbah,
    website_link: "https://rabbah.sa/",
    source_code_link: "",
  },
  {
    name: "Voice Cart Vantage",
    description:
      "Multi-vendor eCommerce platform where customers can buy products, and sellers can create shops to manage their online presence, facilitated by a dashboard to view their products and orders.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: vcv,
    website_link: "https://fyp-voice-cart-vantage.vercel.app/",
    source_code_link: "https://github.com/bsf2000650/FYP_Voice_Cart_Vantage",
  },
  {
    name: "Splitr",
    description:
      "Splitwise clone helping friends or groups of people manage their financial matters effortlessly and seamlessly.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "inngest",
        color: "green-text-gradient",
      },
      {
        name: "clerk",
        color: "pink-text-gradient",
      },
    ],
    image: splitr,
    website_link: "https://splitr-one.vercel.app/",
    source_code_link: "https://github.com/bsf2000650/Splitr",
  },
];

export { services, technologies, experiences, certifications, projects };
