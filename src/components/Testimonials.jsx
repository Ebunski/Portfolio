import React from "react";
import { testimonials } from "../data/data";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const testimonialsList = testimonials.map(
    ({ image, name, content, title }, index) => (
      <div className="testimonial__wrapper" key={index}>
        <FaQuoteLeft aria-label="quote" />
        <div className="testimonial__text">
          <p>{content}</p>
        </div>
        <div className="testimonial__header">
          <div className="testimonial__imageBox">
            <img src={image} alt={name} />
          </div>
          <div className="testimonial__title">
            <h4>{name}</h4>
            <span>{title}</span>
          </div>
        </div>
      </div>
    )
  );
  return (
    <section className="testimonial">
      <div className="title">
        <h2>testimonials</h2>
        <span>My reviews</span>
      </div>

      <div className="testimonial__body section-body">{testimonialsList}</div>
    </section>
  );
}
