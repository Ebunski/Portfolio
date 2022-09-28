import React from "react";
import image from "../assets/me-about.jpg";
import cv from "../assets/cv.pdf";
import { about } from "../data/data";

export default function About() {
  return (
    <section className="about">
      <div className="title">
        <h2>About Me</h2>
        <p className="subtitle">My introduction</p>
      </div>
      <div className="about__content">
        <div className="about__image-container">
          <img className="about__image" src={image} alt="me" />
        </div>
        <div className="about__text">
          <p>{about.intro}</p>
          <div className="about__contact">
            <p>{about.phone}</p>
            <p>{about.email}</p>
            <p> {about.location}</p>
          </div>
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
