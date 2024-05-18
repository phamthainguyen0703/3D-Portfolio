/* eslint-disable no-unused-vars */
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
  tripguide,
  threejs,
  MaUI,
  sql,
  GitLogo,
  csharp,
  antDesign,
  MVCdotNet,
  trello,
  tiktok,
  clinic,
  trelloBg,
  tiktokBg,
  simpBg,
} from "../src/assets";

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
  // {
  //   id: "",
  //   title: "Linkedln ↗",
  // },
  // {
  //   id: "",
  //   title: "Resume ↗",
  // },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Mobile Developer",
    icon: backend,
  },
  {
    title: "3D visualizer",
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MaUI",
    icon: MaUI,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "sql",
    icon: sql,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },

  {
    name: "GitLogo",
    icon: GitLogo,
  },
  {
    name: "csharp",
    icon: csharp,
  },
  // {
  //   name: "antDesign",
  //   icon: antDesign,
  // },
  // {
  //   name: "MVCdotNet",
  //   icon: MVCdotNet,
  // },
];

const experiences = [
  {
    title: "TRELLO CLONE",
    company_name: "Teamsize: 1",
    icon: trello,
    iconBg: "#E6DEDD",
    date: "March 2024 - April 2024",
    points: [
      "Develop a website inspired by Trello, featuring drag-and-drop functionality using the dnd-kit library. Implement dark and light modes for user preference. Integrate a RESTful API for backend operations, managing the storage of column and card data on the board.",
      "Front-end: HTML, CSS, JavaScript, ReactJs, Material UI, Bootstrap 4.",
      "Back-end: NodeJs, ExpressJs,  MongoDb.",
    ],
  },
  {
    title: "TIKTOK UI CLONE",
    company_name: "Teamsize: 1",
    icon: tiktok,
    iconBg: "#E6DEDD",
    date: "December 2023 - March 2024",
    points: [
      "Develop a website interface inspired by TikTok, integrating its unique features. Utilize APIs from F8 Education for backend functionality.",
      "This innovative platform allows users to create, share, and discover short videos effortlessly, fostering a vibrant community of content creators and viewers. Whether you're looking to showcase your talent, find entertaining clips, or connect with others, VidFlow offers a seamless and immersive experience.",
      "Front-end: HTML, SCSS, JavaScript, ReactJs,React Hook, Bootstrap ",
      "Back-end: Utilize APIs from F8 Education",
    ],
  },
  {
    title: "𝐒𝐈𝐌𝐏𝐋𝐈𝐅𝐈𝐑𝐄®",
    company_name: "Teamsize: 1",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "September 2023 - November 2023",
    points: [
      "Develop an e-commerce website with distinct user and admin roles.",
      "Admin Role: Product Management: Create, Read, Update, and Delete (CRUD) operations. Order Management: Track and manage orders. User Management: Handle user accounts and permissions. Payment Statistics: Access and analyze payment data.",
      "User Role: Authentication: Secure login and registration process. Cart Functionality: Add products to cart and adjust quantities. Payment Options: Choose between pay on delivery or PayPal. Personal Information Management: Update and manage personal details.",
      "Front-end: HTML, CSS, JavaScript, ReactJs, React Hook Redux, Ant Design, Bootstrap 4",
      "Back-end: NodeJs, ExpressJs,  MongoDb",
    ],
  },
  {
    title: "BOOKING CARE",
    company_name: "Teamsize: 2",
    icon: clinic,
    iconBg: "#E6DEDD",
    date: "January 2023 - May 2023",
    points: [
      "Developing a website that can handle the operations of a clinic with distinct user, doctor and admin roles.",
      "Doctor Role: Manage medical examination plans: Create a medical examination plan based the time of day. Patient management: Track and confirm patient appointment schedules",
      "Admin Role: Manage appointment information between doctors and patients, manage patient information, manage doctor information, manage blogs, etc.",
      "User Role: Make an appointment according to the doctor's schedule, chat with support staff, rate the doctor, comment, share, and manage appointments with the doctor.",
      "Front-end: HTML, CSS, JavaScript, ReactJs, React Hook Redux, Bootstrap 4",
      "Back-end: NodeJs, ExpressJs,  MySQL",
    ],
  },
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
    name: "TRELLO CLONE",
    description:
      "A website inspired by Trello, featuring drag-and-drop functionality using the dnd-kit library. Implement dark and light modes for user preference.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "material",
        color: "green-text-gradient",
      },
    ],
    image: trelloBg,
    source_code_link: "https://github.com/phamthainguyen0703/trello-web",
    live_demo_link: "https://trello-web-dusky.vercel.app/",
  },
  {
    name: "TIKTOK UI CLONE",
    description:
      "Develop a website interface inspired by TikTok, integrating its unique features. Utilize APIs from F8 Education for backend functionality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "reacthook",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: tiktokBg,
    source_code_link:
      "https://github.com/phamthainguyen0703/TikTok-Ui-FullVersion",
    live_demo_link: "https://tik-tok-ui-full-version.vercel.app/s",
  },
  {
    name: "𝐒𝐈𝐌𝐏𝐋𝐈𝐅𝐈𝐑𝐄®",
    description:
      "an e-commerce website with distinct user and admin roles. With a beautiful interface, easy to use and operate, easily accessible to most users",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "antdesign",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: simpBg,
    source_code_link: "https://github.com/phamthainguyen0703/Ecommerce-master",
    live_demo_link: "https://trello-web-dusky.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
