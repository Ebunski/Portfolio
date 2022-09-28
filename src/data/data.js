import React from "react";

import { BiHome, BiUser, BiSend } from "react-icons/bi";
import {
  BsChatRightQuote,
  BsTools,
  BsImages,
  BsTelephone,
} from "react-icons/bs";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaHtml5,
  FaCss3Alt,
  FaReact,
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
  { title: "About", alt: "about", Icon: BiUser },
  { title: "Skills", alt: "Skills", Icon: BsTools },
  { title: "Portfolio", alt: "Projects", Icon: BsImages },
  { title: "Testimonial", alt: "Testimonial", Icon: BsChatRightQuote },
  { title: "Contact Me", alt: "Contactme", Icon: BiSend },
];

export const socials = [
  { title: "LinkedIn", alt: "linkedIn", Icon: FaLinkedin, link: "https://" },
  { title: "GitHub", alt: "github", Icon: FaGithub, link: "https://" },
  { title: "Twitter", alt: "twitter", Icon: FaTwitter, link: "https://" },
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
    icon: <FaHtml5 aria-label="HTML" />,
    text: "HTML",
  },
  {
    icon: <FaCss3Alt aria-label="CSS" />,
    text: "CSS",
  },
  {
    icon: <IoLogoJavascript aria-label="Javascript" />,
    text: "Javascript",
  },
  {
    icon: <FaReact aria-label="React" />,
    text: "React",
  },
  {
    icon: <IoLogoSass aria-label="Sass" />,
    text: "Sass",
  },
  {
    icon: <SiTailwindcss aria-label="Tailwind" />,
    text: "Tailwind",
  },
  {
    icon: <SiBootstrap aria-label="Bootstrap" />,
    text: "Bootstrap",
  },
  {
    icon: <SiRedux aria-label="Redux" />,
    text: "Redux",
  },
  {
    icon: <SiFirebase aria-label="Firebase" />,
    text: "Firebase",
  },
  {
    icon: <SiTypescript aria-label="TypeScript" />,
    text: "TypeScript",
  },
];

export const contact = [
  {
    icon: <BsTelephone aria-label="telephone" />,
    text: "09071621224",
  },
  {
    icon: <AiOutlineMail aria-label="email" />,
    text: "ebunoyebola@gmail.com",
  },
  {
    icon: <GrMapLocation aria-label="location" />,
    text: "Lagos, Nigeria.",
  },
];

export const portfolio = [
  {
    title: "First Project",
    image: require("/src/assets/portfolio1.jpg"),

    description: "lorem ipsum",
    tech: "react javascript",
    demo: "https://",
    github: "https://",
  },
  {
    title: "First Project",
    image: require("/src/assets/portfolio2.jpg"),
    description: "lorem ipsum",
    tech: "react javascript",
    demo: "https://",
    github: "https://",
  },
  {
    title: "First Project",
    image: require("/src/assets/portfolio3.jpg"),
    description: "lorem ipsum",
    tech: "react javascript",
    demo: "https://",
    github: "https://",
  },
];
