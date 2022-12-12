import React from "react";

import { BiUser, BiSend } from "react-icons/bi";
import {
  BsChatRightQuote,
  BsTools,
  BsImages,
  BsTelephone,
  // BsFillPlusCircleFill,
} from "react-icons/bs";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  // FaArrowUp,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { GrMapLocation } from "react-icons/gr";

import { IoLogoJavascript, IoLogoSass } from "react-icons/io";
import {
  SiRedux,
  SiTailwindcss,
  SiFirebase,
  SiTypescript,
  SiBootstrap,
} from "react-icons/si";

export const links = [
  { title: "About", Icon: BiUser },
  { title: "Skills", Icon: BsTools },
  { title: "Portfolio", Icon: BsImages },
  { title: "Testimonial", Icon: BsChatRightQuote },
  { title: "Contact", Icon: BiSend },
];

export const socials = [
  {
    title: "LinkedIn",
    Icon: FaLinkedin,
    link: "https://www.linkedin.com/in/ebunoluwa-oyebola-1490021b1",
  },
  { title: "GitHub", Icon: FaGithub, link: "https://github.com/Ebunski/" },
  {
    title: "Twitter",
    Icon: FaTwitter,
    link: "https://www.twitter.com/Ebun_ski",
  },
];

export const hero = {
  title: "Hi, I'm Ebun",
  desc1: "Frontend developer",
  desc2: "UI/UX designer",

  intro: "Bringing designs to life",
};

export const about = {
  intro:
    "I craft responsive and interactive web applications for brands and startups with UI effects and animations. I am diligent and have organisation skills. Looking for an entry-levek position or internship. Also need to talk about experience, job seek, journey, value, goal, qualities and interests.",
};

export const skills = [
  {
    icon: <FaHtml5 aria-label="HTML" className="icon" style={{}} />,
    text: "HTML",
  },
  {
    icon: <FaCss3Alt aria-label="CSS" className="icon" />,
    text: "CSS",
  },
  {
    icon: <IoLogoJavascript aria-label="Javascript" className="icon" />,
    text: "Javascript",
  },
  {
    icon: <FaReact aria-label="React" className="icon" />,
    text: "React",
  },
  {
    icon: <IoLogoSass aria-label="Sass" className="icon" />,
    text: "Sass",
  },
  {
    icon: <SiTailwindcss aria-label="Tailwind" className="icon" />,
    text: "Tailwind",
  },
  {
    icon: <SiBootstrap aria-label="Bootstrap" className="icon" />,
    text: "Bootstrap",
  },
  {
    icon: <SiRedux aria-label="Redux" className="icon" />,
    text: "Redux",
  },
  {
    icon: <SiFirebase aria-label="Firebase" className="icon" style={{}} />,
    text: "Firebase",
  },
  {
    icon: <SiTypescript aria-label="TypeScript" className="icon" />,
    text: "TypeScript",
  },
];

export const portfolio = [
  {
    title: "First Project",
    image: require("../assets/portfolio1.jpg"),

    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, tenetur.",

    demo: "https://",
    github: "https://",
  },
  {
    title: "First Project",
    image: require("../assets/portfolio2.jpg"),
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, tenetur.",
    demo: "https://",
    github: "https://",
  },
  {
    title: "First Project",
    image: require("../assets/portfolio3.jpg"),
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, tenetur.",
    demo: "https://",
    github: "https://",
  },

  {
    title: "First Project",
    image: require("../assets/portfolio3.jpg"),
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, tenetur.",
    tech: "react javascript",
    demo: "https://",
    github: "https://",
  },
];
export const testimonials = [
  {
    name: "Daniel Duliyemi",
    image: require("../assets/avatar1.jpg"),
    title: "Frontend Developer",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod vitae repellendus at minus facilis repellat atque natus in molestiae?",
  },
  {
    name: "Daniel Duliyemi",
    image: require("../assets/avatar2.jpg"),
    title: "Frontend Developer",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod vitae repellendus at minus facilis repellat atque natus in molestiae?",
  },
  {
    name: "Daniel Duliyemi",
    image: require("../assets/avatar3.jpg"),
    title: "Frontend Developer",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod vitae repellendus at minus facilis repellat atque natus in molestiae?",
  },

  {
    name: "Daniel Duliyemi",
    image: require("../assets/avatar4.jpg"),
    title: "Frontend Developer",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod vitae repellendus at minus facilis repellat atque natus in molestiae?",
  },
];

export const contact = [
  {
    icon: <BsTelephone className="icon" aria-label="telephone" />,
    text: "09071621224",
    title: "Call me",
  },
  {
    icon: <AiOutlineMail className="icon" aria-label="email" />,
    text: "ebunoyebola@gmail.com",
    title: "Email",
  },
  {
    icon: <GrMapLocation className="icon" aria-label="location" />,
    text: "Lagos, Nigeria.",
    title: "Location",
  },
];
