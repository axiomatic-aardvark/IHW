import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderParams from "../helpers/sliderParams";
import genPicture from "../helpers/genPicture";
import eatenApple from "../images/gallery/paintingPictures/eaten-apple.jpg";
import eatenApple1 from "../images/gallery/paintingPictures/eaten-apple1.JPG";
import colorfulApple from "../images/gallery/paintingPictures/colorful-apple.jpg";
import colorfulApple1 from "../images/gallery/paintingPictures/colorful-apple1.JPG";

export default ({ isVisible }) => {
  const animation = isVisible ? "fade-in visible" : "invisible";

  return (
    <section id="painting-gallery">
      <Slider {...sliderParams} className={`slider ${animation}`}>
        <div className="group eaten-apple">
          <img src={eatenApple} alt="eaten-apple"></img>
          <img src={eatenApple1} alt="eaten-apple1"></img>
        </div>
        {genPicture("colorful-apple", colorfulApple, colorfulApple1)}
      </Slider>
    </section>
  );
};
