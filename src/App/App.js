// import "./App.scss";
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
        <Route path="home" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="logement" element={<Logement />} />
        <Route path="*" element={<ErrorPage />} />
        {/* <Homepage />
      <Logement />
      <ErrorPage />
      <About /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
