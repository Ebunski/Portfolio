import React from "react";
import { links } from "../data/data";
import { socialsList } from "./Hero";
import { Link } from "react-scroll";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const linksList = links.map(({ title }, index) => (
    <li key={index}>
      <Link
        to={title}
        smooth={true}
        duration={1000}
        spy={true}
        exact="true"
        offset={-80}
      >
        {title}
      </Link>
    </li>
  ));

  return (
    <footer className="footer">
      <div className="footer--top section-container">
        <div className="footer__logo">
          <button>
            <h3>Ebun</h3>
          </button>
          <span>Frontend Developer</span>
        </div>
        <ul className="footer__links">{linksList}</ul>
        <ul className="footer__socials">{socialsList}</ul>
      </div>

      <div className="footer--bottom">
        <span
          dangerouslySetInnerHTML={{
            __html: `&copy${year} Ebunski. All rights reserved.`,
          }}
        />
      </div>
    </footer>
  );
}
