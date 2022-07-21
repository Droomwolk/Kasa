import React from "react";

import data from "../data/data";
import { Routes, Route } from "react-router-dom";
import "../styles/main.scss";

import Header from "../components/header";
import Footer from "../components/footer";
import Homepage from "../pages/homepage";
import Logement from "../pages/logement";
import ErrorPage from "../pages/404";
import About from "../pages/about";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes path="/" element={<App />}>
        <Route path="home" element={<Homepage studio={data} />} />
        <Route path="about" element={<About />} />
        <Route path="logement/:id" element={<Logement studio={data} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
