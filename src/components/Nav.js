import React from "react";
import { links } from "../data/headerData";
import { FaMoon } from "react-icons/fa";

export default function Nav() {
  return (
    <nav>
      <div className="nav__logo">
        <h3>Ebun</h3>
      </div>
      <ul className="nav__links">
        {links.map(({ title, alt, Icon }, index) => (
          <li className="nav__link" key={index}>
            <button>
              <h4 className="nav__link--title"> {title} </h4>
              <Icon className="nav__link--icon" aria-label={alt} />
            </button>
          </li>
        ))}
        <li className="nav__switch">
          <FaMoon />
        </li>
      </ul>
    </nav>
  );
}
