import React from "react";
import { testimonials } from "../data/data";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonialsList = testimonials.map(
    ({ image, name, content, title }, index) => (
      <SwiperSlide className="testimonial__wrapper" key={index}>
        <FaQuoteLeft aria-label="quote" className="icon" />
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
      </SwiperSlide>
    )
  );
  return (
    <section className="testimonial">
      <div className="title">
        <h2>testimonials</h2>
        <span>My reviews</span>
      </div>

      <div className="testimonial__body section-body">
        {" "}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {testimonialsList}
        </Swiper>
      </div>
    </section>
  );
}
