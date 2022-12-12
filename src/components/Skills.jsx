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
    <section className="skills" id="Skills">
      <div className="title">
        <h2>My skills</h2>
        <span>My technical level</span>
      </div>

      <div className="skills__content section-body">{skillList}</div>
      {/* <div className="skills__content section-body">
        <canvas width = "500" height = "500">
           </canvas>
      </div> */}

    </section>
  );
}
