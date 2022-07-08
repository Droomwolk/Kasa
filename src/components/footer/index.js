import React from "react";
import Logo from "../../assets/img/footer.png";
import "../../styles/main.scss";

const Footer = (props) => {
  return (
    <div className="footer">
      <img src={Logo} alt="logo" className="footer__image" />
      <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
