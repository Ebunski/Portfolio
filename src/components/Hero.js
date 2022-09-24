import React from "react";
import { hero, socials } from "../data/headerData";
import { BiSend } from "react-icons/bi";
import me from "../assets/me.png";

export default function Hero() {
  return (
    <section className="hero">
      <ul className="hero__links">
        {socials.map(({ title, alt, Icon }, index) => (
          <li key={index}>
            <Icon alt={alt} />{" "}
          </li>
        ))}
      </ul>
      <div className="hero__content">
        <h1> {hero.title}</h1>
        <h3> {hero.desc1} </h3>
        <p> {hero.intro} </p>
        <button>
          {" "}
          Contact Me <BiSend />{" "}
        </button>
      </div>
      <div className="hero__image-container">
        {" "}
        <img src={me} alt="me" />
      </div>
      <div className="hero__scroll">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}
