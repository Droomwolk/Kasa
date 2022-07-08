import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../styles/main.scss";

import Logo from "../../assets/img/logo.png";

const Header = (props) => {
  // let activeStyle = {
  //   textDecoration: "underline",
  // };

  return (
    <header className="header">
      <img src={Logo} alt="logo" className="header__image" />
      <nav>
        <ul className="header__nav">
          <li>
            <NavLink to="/home">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </header>
  );
};

export default Header;
