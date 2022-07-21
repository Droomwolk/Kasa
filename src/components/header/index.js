import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/main.scss";

import Logo from "../../assets/img/logo.png";

const Header = (props) => {
  return (
    <header className="header">
      <img src={Logo} alt="logo" className="header__image" />
      <nav>
        <ul className="header__nav">
          <li>
            <NavLink
              to="/home"
              style={({ isActive }) => ({
                color: isActive ? "#FF6060" : "#FF6060",
                textDecorationLine: isActive ? "underline" : "none",
              })}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "#FF6060" : "#FF6060",
                textDecorationLine: isActive ? "underline" : "none",
              })}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
