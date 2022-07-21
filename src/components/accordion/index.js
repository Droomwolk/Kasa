import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import "../../styles/main.scss";

const Accordion = ({ title, content, style, list }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion" style={style}>
      <div className="accordion__header" onClick={() => setIsActive(!isActive)}>
        <div className="accordion__header-title"> {title} </div>
        <div className="accordion__header-button">
          {isActive ? <FaAngleDown /> : <FaAngleUp />}
        </div>
      </div>
      {isActive && (
        <ul className="accordion__content">
          {content ? (
            <li>{content}</li>
          ) : (
            list.map((el) => {
              return <li key={el}>{el}</li>;
            })
          )}
        </ul>
      )}
    </div>
  );
};

export default Accordion;
