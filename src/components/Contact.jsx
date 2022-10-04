import React from "react";
import { contact } from "../data/data";
import Form from "./utils/Form";

export default function Contact() {
  const contactList = contact.map(({ icon, text, title }, index) => (
    <div className="contact__info" key={index}>
      {icon}
      <div className="contact__details">
        <h4>{title}</h4>
        <span>{text}</span>
      </div>
    </div>
  ));
  return (
    <section className="contact">
      <div className="title">
        <h2>contact</h2>
        <span>Get in touch</span>
      </div>

      <div className="contact__body section-body">
        <div className="contact__container">{contactList}</div>
        <Form />
      </div>
    </section>
  );
}
