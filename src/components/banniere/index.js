import React from "react";
import Glace from "../../assets/img/glace.jpg";
import "../../styles/main.scss";

const Banniere = () => {
  return (
    <figure
      className="figure"
      // style={{
      //   backgroundImage: `url(${Glace})`,
      //   backgroundRepeat: "no-repeat",
      //   // width: "100%",
      //   height: "13em",
      //   objectFit: "contain",
      //   borderRadius: "1em 1em",
      // }}
    >
      <img src={Glace} alt="paysage" className="figure__image" />
      <h1 className="figure__titre">Chez vous, partout et ailleurs</h1>
    </figure>
  );
};

export default Banniere;
