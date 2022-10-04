import React from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <header>
        <Nav />
        <Hero />
      </header>

      <main>
        <About />
        <Skills />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
