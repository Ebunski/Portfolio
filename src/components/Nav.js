import React from "react";
import { links } from "../data/headerData";
import { FaMoon } from "react-icons/fa";

export default function Nav() {
  return (
    <nav>
      <div className="nav__logo">Ebun</div>
      <ul className="nav__links">
        {links.map(({ title, alt, Icon }, index) => (
          <li key={index}>
            <h4 className="nav__link--title"> {title} </h4>
            <Icon className="nav__link--icon" aria-label={alt} />{" "}
          </li>
        ))}
        <li className="nav__switch">
          <FaMoon />
        </li>
      </ul>
    </nav>
  );
}
