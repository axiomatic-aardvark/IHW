import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderParams from "../helpers/sliderParams";
import genPicture from "../helpers/genPicture";
import genOnePicture from "../helpers/genOnePicture";
import eatenApple from "../images/gallery/paintingPictures/eaten-apple.jpg";
import eatenApple1 from "../images/gallery/paintingPictures/eaten-apple1.JPG";
import colorfulApple from "../images/gallery/paintingPictures/colorful-apple.jpg";
import colorfulApple1 from "../images/gallery/paintingPictures/colorful-apple1.jpg";
import redApple from "../images/gallery/paintingPictures/red-apple.jpg";
import manyApples from "../images/gallery/paintingPictures/many-apples.jpg";
import squareApple from "../images/gallery/paintingPictures/square-apple.jpg";
import redApples from "../images/gallery/paintingPictures/red-apples.JPG";
import tomatoApple from "../images/gallery/paintingPictures/tomato-apple.JPG";
import darkblueApple from "../images/gallery/paintingPictures/darkblue-apple.JPG";
import chessApples from "../images/gallery/paintingPictures/chess-apples.JPG";
import halfApples from "../images/gallery/paintingPictures/half-apples.JPG";
import bittenApple from "../images/gallery/paintingPictures/bitten-apple.JPG";
import blueAndGreen from "../images/gallery/paintingPictures/blue-and-green.JPG";
import frozenApple from "../images/gallery/paintingPictures/frozen-apple.JPG";
import pear from "../images/gallery/paintingPictures/pear.JPG";
import lips from "../images/gallery/paintingPictures/lips.JPG";
import violin from "../images/gallery/paintingPictures/violin.JPG";
import elcho from "../images/gallery/paintingPictures/elcho.jpg";
import bun from "../images/gallery/paintingPictures/bun.jpg";
import nakedGirlPainting from "../images/gallery/paintingPictures/naked-girl.jpg";
import underwear from "../images/gallery/paintingPictures/underwear.jpg";
import nakedGirlSkirt from "../images/gallery/paintingPictures/naked-girl-skirt.jpg";
import blackGirlBreast from "../images/gallery/paintingPictures/black-girl-breast.jpg";
import nakedGirlBlanket from "../images/gallery/paintingPictures/naked-girl-blanket.jpg";
import sleeping from "../images/gallery/paintingPictures/sleeping.jpg";
import stretch from "../images/gallery/paintingPictures/stretch.jpg";
import girlHorse from "../images/gallery/paintingPictures/girl-horse.jpg";
import piano from "../images/gallery/paintingPictures/piano.jpg";
import darkHorse from "../images/gallery/paintingPictures/dark-horse.jpg";

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
        {genOnePicture("red-apple", redApple)}
        {genOnePicture("many-apples", manyApples)}
        {genOnePicture("square-apple", squareApple)}
        {genOnePicture("red-apples", redApples)}
        {genOnePicture("tomato-apple", tomatoApple)}
        {genOnePicture("darkblue-apple", darkblueApple)}
        {genOnePicture("chess-apples", chessApples)}
        {genOnePicture("half-apples", halfApples)}
        {genOnePicture("bitten-apple", bittenApple)}
        {genOnePicture("blue-and-green", blueAndGreen)}
        {genOnePicture("frozen-apple", frozenApple)}
        {genOnePicture("pear", pear)}
        {genOnePicture("lips", lips)}
        {genOnePicture("violin", violin)}
        {genOnePicture("elcho", elcho)}
        {genOnePicture("bun", bun)}
        {genOnePicture("naked-girl-painting", nakedGirlPainting)}
        {genOnePicture("underwear", underwear)}
        {genOnePicture("naked-girl-skirt", nakedGirlSkirt)}
        {genOnePicture("black-girl-breast", blackGirlBreast)}
        {genOnePicture("naked-girl-blanket", nakedGirlBlanket)}
        {genOnePicture("sleeping", sleeping)}
        {genOnePicture("stretch", stretch)}
        {genOnePicture("girl-horse", girlHorse)}
        {genOnePicture("piano", piano)}
        {genOnePicture("dark-horse", darkHorse)}
      </Slider>
    </section>
  );
};
