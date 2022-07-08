import React, { useEffect, useState, useParams } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Banniere from "../../components/banniere";

import "../../styles/main.scss";

const Homepage = () => {
  const [studio, setStudio] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // let { userId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("data.json");
      console.log(response.data);
      setStudio(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>En cours de chargement...</p>
  ) : (
    <div className="homepage">
      <Banniere />
      <main className="homepage__main">
        {studio.map((data, index) => {
          console.log("DATA", data);
          return (
            <div className="homepage__main-container">
              <Link to="/logement">
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
