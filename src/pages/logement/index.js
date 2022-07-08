import React from "react";
import Glace from "../../assets/img/glace.jpg";
import Profil from "../../assets/img/host.png";

import "../../styles/main.scss";

const Logement = () => {
  return (
    <div className="logement">
      <figure className="logement__figure">
        <img src={Glace} alt="paysage" className="logement__figure-image" />
      </figure>
      <main className="logement__main">
        <section className="logement__main-header">
          <div className="logement__main-header-adress">
            <h2 className="logement__main-header-adress-name">
              Cozy Loft on the Canal Saint-Martin
            </h2>
            <p>Paris, Île-de-France</p>
          </div>
          <div className="logement__main-header-profil">
            <div className="logement__main-header-profil-name">
              <p className="logement__main-header-profil-name-nom">Alexandre</p>
              <p className="logement__main-header-profil-name-lastname">
                Dumas
              </p>
            </div>
            <img src={Profil} alt="profil" />
          </div>
        </section>
        <section className="logement__main-list">
          <ul className="logement__main-list-adress">
            <li className="logement__main-list-adress-style">Cozy</li>
            <li className="logement__main-list-adress-lieu">Canal</li>
            <li className="logement__main-list-adress-cedex">Paris 10</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Logement;
