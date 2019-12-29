import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderParams from "../helpers/sliderParams";
import bird from "../images/gallery/pictures/bird.JPG";
import bird1 from "../images/gallery/pictures/bird1.JPG";
import autoportrait1 from "../images/gallery/pictures/autoportrait1.JPG";

export default function Gallery({ isVisible }) {
  const animation = isVisible ? "fade-in visible" : "invisible";

  return (
    <section id="gallery">
      <Slider {...sliderParams} className={`slider ${animation}`}>
        <div className="group bird">
          <img src={bird} alt="bird"></img>
          <img src={bird1} alt="bird1"></img>
        </div>
        <img src={autoportrait1} alt="autoportrait1"></img>
      </Slider>
    </section>
  );
}
