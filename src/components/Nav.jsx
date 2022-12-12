import React from "react";
import useScroll from "../hooks/useScrollPosition";

import { links } from "../data/data";
import { FaMoon } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Nav() {
  const scrolledPast = useScroll(100);

  return (
    <nav className={scrolledPast ? "nav__active" : ""}>
      <div className="nav section-container">
        <Link
          to={"header"}
          smooth={true}
          duration={1000}
          spy={true}
          exact="true"
          offset={-80}
        >
          {" "}
          <h3 className={`nav__logo`}>Ebun</h3>
        </Link>

        <ul className="nav__links">
          {links.map(({ title, Icon }, index) => (
            <li className="nav__link" key={index}>
              <Link
                to={title}
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-80}
              >
                <h4 className="nav__link--title"> {title} </h4>
                <span className="nav__link--icon">
                  {" "}
                  <Icon className="icon" aria-label={title} />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav__switch">
          <FaMoon />
        </div>
      </div>
    </nav>
  );
}
