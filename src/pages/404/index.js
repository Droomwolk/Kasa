import React from "react";
import Header from "../../components/header";

import "../../styles/main.scss";

const ErrorPage = () => {
  return (
    <div className="error">
      <Header />
      <main className="error__main">
        <h1 className="error__main-title">404</h1>
        <p className="error__main-texte">
          La page que vous demandez n'existe pas
        </p>
        <p className="error__main-footer">Retourner sur la page d'accueil</p>
      </main>
    </div>
  );
};

export default ErrorPage;
