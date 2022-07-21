import React from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

import Carousel from "../../components/carousel/carousel";

import Accordion from "../../components/accordion";

import "../../styles/main.scss";

const Logement = ({ studio }) => {
  const { id } = useParams();
  const logement = studio.data.find((el) => el.id === id);

  return (
    <div className="logement">
      <Carousel slides={logement.pictures} />
      <main className="logement__main">
        <section className="logement__main-container">
          <section className="logement__main-header">
            <div className="logement__main-header-adress">
              <h2 className="logement__main-header-adress-name">
                {logement.title}
              </h2>
              <p className="logement__main-header-adress-lastName">
                {logement.location}
              </p>
            </div>
            <div className="logement__main-header-list">
              <ul className="logement__main-header-list-adress">
                {logement.tags.map((el) => {
                  return (
                    <li
                      key={el}
                      className="logement__main-header-list-adress-style"
                    >
                      {el}
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
          <section className="logement__main-profil">
            <div className="logement__main-profil-person">
              <div className="logement__main-profil-person-name">
                <p className="logement__main-profil-person-name-nom">
                  {logement.host.name}
                </p>
              </div>
              <img
                src={logement.host.picture}
                alt="profil"
                className="logement__main-profil-person-name-photo"
              />
            </div>
            <div className="logement__main-profil-rating">
              <ul className="logement__main-profil-rating-list">
                <li style={logement.rating >= 1 ? { color: "yellow" } : null}>
                  <FaStar />
                </li>
                <li style={logement.rating >= 2 ? { color: "yellow" } : null}>
                  <FaStar />
                </li>
                <li style={logement.rating >= 3 ? { color: "yellow" } : null}>
                  <FaStar />
                </li>
                <li style={logement.rating >= 4 ? { color: "yellow" } : null}>
                  <FaStar />
                </li>
                <li style={logement.rating >= 5 ? { color: "yellow" } : null}>
                  <FaStar />
                </li>
              </ul>
            </div>
          </section>
        </section>
        <div className="logement__main-accordion">
          <Accordion
            title="Description"
            className="logement__main-accordion-first"
            style={{
              marginRight: "1em",
              flex: 1,
            }}
            content={logement.description}
          />
          <Accordion
            title="Équipement"
            className="logement__main-accordion-two"
            style={{
              flex: 1,
            }}
            list={logement.equipments}
          />
        </div>
      </main>
    </div>
  );
};

export default Logement;
