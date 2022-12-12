import React from "react";
import { portfolio } from "../data/data";
import { FaGithub, FaPlayCircle } from "react-icons/fa";

export default function Portfolio() {
  const portfolioList = portfolio.map(
    ({ image, title, description, tech, demo, github }, index) => (
      <div className="portfolio__item--wrapper" key={index}>
        <div className="portfolio__imageBox">
          <img src={image} alt={title} />
        </div>

        <div className="portfolio__item--text">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="portfolio__item--cta">
            <a href={github} target="_blank" rel="noreferrer">
              <FaGithub className="icon" aria-label={"github"} />
            </a>
            <a href={demo} target="_blank" rel="noreferrer">
              <FaPlayCircle className="icon" aria-label="live site" />
            </a>
          </div>
        </div>
      </div>
    )
  );
  return (
    <section className="portfolio" id="Portfolio">
      <div className="title">
        <h2>My portfolio</h2>
        <span>Some of my works</span>
      </div>

      <div className="portfolio__body section-body">{portfolioList}</div>
    </section>
  );
}
