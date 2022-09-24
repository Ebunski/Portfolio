import React from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.js";
import Portfolio from "./components/Portfolio.js";
import Testimonials from "./components/Testimonials.js";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Nav />
       <Hero />
      {/*
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer /> */}
    </>
  );
}
