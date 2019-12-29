import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderParams from "../helpers/sliderParams";
import ls from "../images/gallery/ls.jpg";
import ls1 from "../images/gallery/ls1.jpg";
import ls2 from "../images/gallery/ls2.jpg";
import ls3 from "../images/gallery/ls3.jpg";


export default function Gallery() {
  return (
    <section id="gallery">
      <Slider {...sliderParams} className="slider">
        <img src={ls} alt="placeholder"></img>
        <img src={ls1} alt="placeholder"></img>
        <img src={ls2} alt="placeholder"></img>
        <img src={ls3} alt="placeholder"></img>
      </Slider>
    </section>
  );
}
