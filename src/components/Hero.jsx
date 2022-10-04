import React from "react";
import { hero, socials } from "../data/data";
import { BiSend } from "react-icons/bi";
import me from "../assets/me.png";
import Scroll from "./utils/Scroll";

export const socialsList = socials.map(({ title, Icon, link }, index) => (
  <li key={index}>
    <a href={link} rel="noreferrer" target="_blank">
      <Icon className="icon" aria-label={title} />{" "}
    </a>
  </li>
));
export default function Hero() {
  return (
    <section className="hero">
      <ul className="hero__links">{socialsList}</ul>
      <div className="hero__content">
        <h1> {hero.title}</h1>
        <h4> {hero.desc1} </h4>
        <p> {hero.intro} </p>
        <button className="button">
          {" "}
          Contact Me <BiSend className="hero__icon" />{" "}
        </button>
      </div>

      <div className="hero__image-container">
        <img src={me} alt="me" />
      </div>

      <Scroll />
    </section>
  );
}
