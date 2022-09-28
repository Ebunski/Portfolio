import React from "react";
import { skills } from "../data/data";

export default function Skills() {
  const skillList = skills.map((x, index) => (
    <div className="skills__items" key={index}>
      <div> {x.icon}</div>
      <span> {x.text}</span>
    </div>
  ));
  return (
    <section class="skills">
      <div className="title">
        <h2>My skills</h2>
        <p className="subtitle">My technical level</p>
      </div>

      <div className="skills__content">{skillList}</div>
    </section>
  );
}
