import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  threejs,
  doctor
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "3D Web Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Freelance",
    // icon: starbucks,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Develop and maintain robust web applications using React",
      "Identify and resolve technical problems quickly and efficiently.",
      "Work independently while meeting project deadlines and objectives.",
      "Adapt quickly to new technologies and changing business needs.",
      "Contribute to a culture of continuous improvement and innovation.",
      "Possessing communication skills and a strong team spirit",
      "familiar with Agility concepts (Scrum, Sprint Planning, Backlog, etc.)",
      "Develop and maintain an expertise in CI/CD (Continuous Integration and Continuous Delivery) processes.",
      "Familiar with Docker and Kubernetes technologies for application containerization and orchestration",
      "Perform code reviews of code written by other developers ",
      "Analyze code defects, recommend and implement resolutions ",
      "Optimize applications for maximum speed, scalability, and user experience ",
    ],
  },
  {
    title: "Help Desk Technician",
    company_name: "WEngage",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Sept 2024",
    points: [
     "Technical Support at Fujitsu [B2B]: My contribution to the Fujitsu project focused on technical support, where I used a ticketing system to address and resolve user requests, ensuring an optimal user experience."
    ],
  },
  {
    title: "System and Network Administrator",
    company_name: "Hostelcom",
    icon: shopify,
    iconBg: "#383E56",
    date: " Oct 2023 - Dec 2023",
    points: [
      "Supervision Lead: Oversaw two floors with a total of 51 computers",
      "Technical Support: Provided technical assistance to call center agents and resolved IT issues related to system and application usage.",
      "Configuration and Installation: Set up and installed new computer equipment and software necessary for the smooth operation of the call center.",

    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ECommerce Website",
    description:
  "an online platform where businesses and individuals can buy and sell products or services. It enables customers to browse through various items, add them to a virtual shopping cart, and complete transactions through secure payment gateways",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
  
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/hamzarahmoun/ecommerce-sanity",
  },
  {
    name: "Personel Portfolio",
    description:
    "a website showcasing an individual's skills, projects, and achievements, often used by creatives, developers, or professionals to present their work. It serves as an online resume to highlight expertise and attract potential clients or employers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Nextjs",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/hamzarahmoun/hamza_rahmoun_portfolio1",
  },
  {
    name: "Doctor Appointement",
    description:
    "allows patients to book consultations with healthcare professionals online. It provides features like appointment scheduling, doctor profiles, availability, and sometimes includes options for virtual consultations and patient record management",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: doctor,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };