import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
// import "./accordion.scss";
import "../../styles/main.scss";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion__header" onClick={() => setIsActive(!isActive)}>
        <div className="accordion__header-title"> {title} </div>
        <div className="accordion__header-button">
          {isActive ? <FaAngleDown /> : <FaAngleUp />}
        </div>
      </div>
      {isActive && <div className="accordion__content">{content}</div>}
    </div>
  );
};

export default Accordion;
