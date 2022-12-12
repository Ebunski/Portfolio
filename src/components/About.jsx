import React from "react";
import image from "../assets/ebun-about.jpg";
import cv from "../assets/cv.pdf";
import { about } from "../data/data";

export default function About() {
  return (
    <section className="about" id={"About"}>
      <div className="title">
        <h2>About Me</h2>
        <span>My introduction</span>
      </div>
      <div className="about__content section-body">
        <div className="about__image-container">
          <img className="about__image" src={image} alt="me" />
        </div>
        <div className="about__text">
          <p>{about.intro}</p>

          <div className="about__cta">
            <button className="button">
              <a download="" href={cv}>
                {" "}
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
