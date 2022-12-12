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
    title: "Crappo crypto landing page",
    image: require("../assets/crypto.jpeg"),
    description:
      "Cool landing page for a crypto website. Built with React, sass and animations using AoS",

    demo: "https://crypto-landing-page-cat-oe.netlify.app/",
    github: "https://github.com/Ebunski/crappo-crypto-landing-page",
  },
  {
    title: "Redux store",
    image: require("../assets/redux.jpeg"),
    description: "Shopping store built with redux and sass",
    demo: "https://redux-cart-oe.netlify.app/",
    github: "https://github.com/Ebunski/Redux-store",
  },
  {
    title: "Quiz app",
    image: require("../assets/quiz.png"),
    description: "Modern quiz app built with React",
    demo: "https://quiz-app-oe.netlify.app/",
    github: "https://quiz-app-oe.netlify.app/",
  },
];
export const testimonials = [
  {
    name: "John",
    image: require("../assets/one.jpg"),
    title: "Frontend Developer",
    content:
      "Ebun is an incredible team player and developer. Worked on a couple of projects together and the partnership was wonderful. ",
  },
  {
    name: "Peter",
    image: require("../assets/quote3.jpg"),
    title: "Client",
    content:
      "It was a pleasure working with Ebun. He was extremely patient and managed the project very professionally. I highly recommend Ebun to anyone looking to build a new website.",
  },
  {
    name: "Rejoice",
    image: require("../assets/quote1.jpg"),
    title: "Developer",
    content:
      "Ebun is a brilliant developer. He always comes up with a different approach to a problem",
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
