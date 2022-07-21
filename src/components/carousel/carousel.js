import React, { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import "../../styles/main.scss";

const Carousel = ({ slides }) => {
  //   console.log("SLIDES", slides);
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <MdArrowBackIosNew className="slider__left-arrow" onClick={prevSlide} />
      <MdArrowForwardIos className="slider__right-arrow" onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <figure
            className="slider__figure"
            // className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide} alt="travel" className="slider__figure-image" />
            )}
          </figure>
        );
      })}
    </section>
  );
};

export default Carousel;
