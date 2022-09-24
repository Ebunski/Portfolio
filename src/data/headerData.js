import { BiHome, BiUser, BiSend } from "react-icons/bi";
import { BsChatRightQuote, BsTools, BsImages } from "react-icons/bs";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export const links = [
  { title: "About", alt: "about", Icon: BiUser },
  { title: "Skills", alt: "Skills", Icon: BsTools },
  { title: "Portfolio", alt: "Projects", Icon: BsImages },
  { title: "Testimonial", alt: "Testimonial", Icon: BsChatRightQuote },
  { title: "Contact Me", alt: "Contactme", Icon: BiSend },
];

export const socials = [
  { title: "LinkedIn", alt: "linkedIn", Icon: FaLinkedin },
  { title: "GitHub", alt: "github", Icon: FaGithub },
  { title: "Twitter", alt: "twitter", Icon: FaTwitter },
];

export const hero = {
  title: "Hi, I'm Ebun",
  desc1: "Frontend developer",
  desc2: "UI/UX designer",

  intro: "Bringing designs to life",
};
