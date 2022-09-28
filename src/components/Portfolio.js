import React from "react";
import { portfolio } from "../data/data";

export default function Portfolio() {
  const portfolioList = portfolio.map(({image,title,description,tech,demo,github}, index) => (
    <div className="portfolio__item" key={index}>
      <div> {x.icon}</div>
      <span> {x.text}</span>
    </div>
  ));
  return (
    <section class="portfolio">
      <div className="title">
        <h2>My portfolio</h2>
        <p className="subtitle">My technical level</p>
      </div>

      <div className="skills__content">{portfolioList}</div>
    </section>
  );
}
