import React from "react";
import { Link } from "react-router-dom";

import Banniere from "../../components/banniere";

import "../../styles/main.scss";

const Homepage = ({ studio }) => {
  return (
    <div className="homepage">
      <Banniere />
      <main className="homepage__main">
        {studio.data.map((data, index) => {
          return (
            <div className="homepage__main-container" key={data.id}>
              <Link to={`/logement/${data.id}`}>
                <img
                  src={data.cover}
                  alt="oiseaux"
                  className="homepage__main-container-image"
                />
                <figcaption className="homepage__main-container-title">
                  {data.title}
                </figcaption>
              </Link>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Homepage;
