import React from "react";
import { links } from "../data/data";
import { FaMoon } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Nav() {
  return (
    <nav className="nav--scroll">
      <button className="nav__logo">
        <h3>Ebun</h3>
      </button>
      <ul className="nav__links">
        {links.map(({ title, alt, Icon }, index) => (
          <li className="nav__link" key={index}>
            <Link
              to={title}
              smooth={true}
              duration={2000}
              spy={true}
              exact="true"
              offset={-80}
            >
              <button>
                <h4 className="nav__link--title"> {title} </h4>
                <Icon className="nav__link--icon" aria-label={alt} />
              </button>
            </Link>
          </li>
        ))}
        <li className="nav__switch--dark">
          <FaMoon />
        </li>
      </ul>
    </nav>
  );
}
