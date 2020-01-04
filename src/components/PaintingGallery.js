import React, { useState } from "react";
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
import smokingRed from "../images/gallery/paintingPictures/smoking-red.jpg";
import cat from "../images/gallery/paintingPictures/cat.jpg";
import afroGirl from "../images/gallery/paintingPictures/afro-girl.jpg";
import ship from "../images/gallery/paintingPictures/ship.jpg";
import pink from "../images/gallery/paintingPictures/pink.JPG";
import yinyang from "../images/gallery/paintingPictures/yinyang.jpg";
import crying from "../images/gallery/paintingPictures/crying.JPG";
import baby from "../images/gallery/paintingPictures/baby.JPG";
import horo from "../images/gallery/paintingPictures/horo.JPG";
import redWoman from "../images/gallery/paintingPictures/red-woman.jpg";
import { isCompositeComponentWithType } from "react-dom/test-utils";

export default ({ isVisible }) => {
  const animation = isVisible ? "fade-in visible" : "invisible";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="painting-gallery">
      <span className="gallery-title">Paintings</span>

      <Slider {...sliderParams} className={`slider ${animation}`}>
        {genPicture(
          "eaten-apple",
          eatenApple,
          eatenApple1,
          "Eaten Apple",
          isHovered,
          setIsHovered
        )}
        {genPicture(
          "colorful-apple",
          colorfulApple,
          colorfulApple1,
          "Colorful Apple",
          isHovered,
          setIsHovered
        )}
        {genOnePicture(
          "red-apple",
          redApple,
          "Red Apple",
          isHovered,
          setIsHovered
        )}
        {genOnePicture(
          "many-apples",
          manyApples,
          "Many Apples",
          isHovered,
          setIsHovered
        )}
        {genOnePicture(
          "square-apple",
          squareApple,
          "Square Apple",
          isHovered,
          setIsHovered
        )}
        {genOnePicture(
          "red-apples",
          redApples,
          "Red Apples",
          isHovered,
          setIsHovered
        )}
        {genOnePicture(
          "tomato-apple",
          tomatoApple,
          "Tomato Apple",
          isHovered,
          setIsHovered
        )}
        {genOnePicture(
          "darkblue-apple",
          darkblueApple,
          "Darkblue Apple",
          isHovered,
          setIsHovered
        )}
        {genOnePicture(
          "chess-apples",
          chessApples,
          "Chess Apples",
          isHovered,
          setIsHovered
        )}
        {genOnePicture(
          "half-apples",
          halfApples,
          "Half Apples",
          isHovered,
          setIsHovered
        )}
        {genOnePicture(
          "bitten-apple",
          bittenApple,
          "Bitten Apple",
          isHovered,
          setIsHovered
        )}
        {genOnePicture(
          "blue-and-green",
          blueAndGreen,
          "Blue and Green",
          isHovered,
          setIsHovered
        )}
        {genOnePicture(
          "frozen-apple",
          frozenApple,
          "Frozen Apple",
          isHovered,
          setIsHovered
        )}
        {genOnePicture("pear", pear, "Pear", isHovered, setIsHovered)}
        {genOnePicture("lips", lips, "Lips", isHovered, setIsHovered)}
        {genOnePicture("violin", violin, "Violin", isHovered, setIsHovered)}

        {/* 
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
        {genOnePicture("dardk-horse", darkHorse)}
        {genOnePicture("smoking-red", smokingRed)}
        {genOnePicture("cat", cat)}
        {genOnePicture("afro-girl", afroGirl)}
        {genOnePicture("ship", ship)}
        {genOnePicture("pink", pink)}
        {genOnePicture("yinyang", yinyang)}
        {genOnePicture("crying", crying)}
        {genOnePicture("baby", baby)}
        {genOnePicture("horo", horo)}
        {genOnePicture("red-woman", redWoman)} */}
      </Slider>
    </section>
  );
};
