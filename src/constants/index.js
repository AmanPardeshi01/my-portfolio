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
  dibetes,
  toursandtravels,
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
    title: "Backend Developer",
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
    title: "Python Development Intern",
    company_name: "CodeClause",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2023 - March 2023",
    points: [
      "Completed a one-month virtual internship focused on Python development.",
      "Developed functional and efficient Python applications.",
      "Gained hands-on experience with GUI development.",
      "Demonstrated problem-solving and coding skills.",
    ],
  },
  {
    title: "HR Intern",
    company_name: "Vishay Intertechnology",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2023 - Oct 2023",
    points: [
      "Completed an internship at Vishay Intertechnology, actively contributing to a global HR project.",
      "Responsibilities included creating training materials and slides for various HR processes",
      "Employee Self-Service (ESS), Manager Self-Service (MSS), HR Information Systems (HRIS), Recruiting, Candidate Onboarding, Candidate Termination, Freeze/Unfreeze Positions, Create/Close Job Requisition, Compensation Process, Workday Human Capital Management (HCM), Workday Financial Management, Workday Studio, Workday Payroll, Other Workday processes",
    ],
  },
  ,
  ,
];

const testimonials = [
  {
    testimonial:
      "It is a great pleasure that we recommend Pardeshi Aman Chandrabhan on the basis of his performance in the internship with CodeClause as Python Development Internin the month of Feb 2023 .He did an excellent job in this position and was an asset to our organization during his internship tenure.",
    name: "Team CodeClause  ",
    designation: "CFO",
    company: "CodeClause",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I highly recommend Aman for his exceptional sincerity and discipline during his internship. He consistently displayed a strong work ethic, attention to detail, and a positive attitude.He'll be a fantastic addition to any team.",
    name: "Akshata Shingare",
    designation: "HR",
    company: "Vishay Intertechnology",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Diabeties Detection using Deep Learning.",
    description:
      "Designed and implemented 'Diabetes Detection Using Deep Learning,' leveraging cutting-edge deep learning methodologies to accurately detect diabetes-related patterns in medical data, contributing to early diagnosis and enhanced patient care.",
    tags: [
      {
        name: "Python, DL, ML",
        color: "blue-text-gradient",
      },
      {
        name: "SQLite",
        color: "green-text-gradient",
      },
      {
        name: "Spyder",
        color: "pink-text-gradient",
      },
    ],
    image: dibetes,
    source_code_link: "https://github.com/",
  },
  {
    name: "Tours & Travel Management System.",
    description:
      "Developed a complete Tours and Travel Management System using PHP, MySQL, Bootstrap, and PDO PayPal integration. Designed and implemented a user-friendly interface for managing bookings and payments, enhancing the user experience.",
    tags: [
      {
        name: "HTML, CSS, Js",
        color: "blue-text-gradient",
      },
      {
        name: "PHP, SQL",
        color: "green-text-gradient",
      },
      {
        name: "Payment Gateway",
        color: "pink-text-gradient",
      },
    ],
    image: toursandtravels,
    source_code_link: "https://github.com/",
  },
  {
    name: "Automatic Plant Watering System using 8051 microcontrollers.",
    description:
      "Designed and implemented an automated plant watering system using 8051 microcontrollers, sensors, and actuators. The system monitored soil moisture levels and watered plants as needed, ensuring optimal growth conditions..",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "8051 Micro Controler",
        color: "green-text-gradient",
      },
      {
        name: "IoT",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Chat Bot System",
    description:
      "Developed a mini chatbot system using Python that utilizes natural language processing (NLP) techniques to engage in conversations with users, answer questions, and perform simple tasks..",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Chatbot",
        color: "green-text-gradient",
      },
      {
        name: "ML",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "IoT Based Robotic Arm",
    description:
      "Designed and implemented an IoT-based robotic arm capable of remote control and automation tasks. The project integrated sensors, actuators, and wireless communication to  achieve precise and responsive robotic movements.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "Blinkapk",
        color: "green-text-gradient",
      },
      {
        name: "IoT",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  }
];

export { services, technologies, experiences, testimonials, projects };