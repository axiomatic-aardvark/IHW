import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderParams from "../helpers/sliderParams";
import genPicture from "../helpers/genPicture";
import genOnePicture from "../helpers/genOnePicture";
import eatenApple from "../images/gallery/paintingPictures/eaten-apple-compressed.jpg";
import eatenApple1 from "../images/gallery/paintingPictures/eaten-apple1-compressed.jpg";
import colorfulApple from "../images/gallery/paintingPictures/colorful-apple-compressed.jpg";
import colorfulApple1 from "../images/gallery/paintingPictures/colorful-apple1-compressed.jpg";
import redApple from "../images/gallery/paintingPictures/red-apple-compressed.jpg";
import manyApples from "../images/gallery/paintingPictures/many-apples-compressed.jpg";
import squareApple from "../images/gallery/paintingPictures/square-apple-compressed.jpg";
import redApples from "../images/gallery/paintingPictures/red-apples-compressed.jpeg";
import tomatoApple from "../images/gallery/paintingPictures/tomato-apple-compressed.jpeg";
import darkblueApple from "../images/gallery/paintingPictures/darkblue-apple-compressed.jpeg";
import chessApples from "../images/gallery/paintingPictures/chess-apples-compressed.jpeg";
import halfApples from "../images/gallery/paintingPictures/half-apples-compressed.jpeg";
import bittenApple from "../images/gallery/paintingPictures/bitten-apple-compressed.jpeg";
import blueAndGreen from "../images/gallery/paintingPictures/blue-and-green-compressed.jpeg";
import frozenApple from "../images/gallery/paintingPictures/frozen-apple-compressed.jpeg";
import pear from "../images/gallery/paintingPictures/pear-compressed.jpeg";
import lips from "../images/gallery/paintingPictures/lips-compressed.jpeg";
import violin from "../images/gallery/paintingPictures/violin-compressed.jpeg";
import elcho from "../images/gallery/paintingPictures/elcho-compressed.jpg";
import bun from "../images/gallery/paintingPictures/bun-compressed.jpg";
import nakedGirlPainting from "../images/gallery/paintingPictures/naked-girl-compressed.jpg";
import underwear from "../images/gallery/paintingPictures/underwear-compressed.jpg";
import nakedGirlSkirt from "../images/gallery/paintingPictures/naked-girl-skirt-compressed.jpg";
import blackGirlBreast from "../images/gallery/paintingPictures/black-girl-breast-compressed.jpg";
import nakedGirlBlanket from "../images/gallery/paintingPictures/naked-girl-blanket-compressed.jpg";
import sleeping from "../images/gallery/paintingPictures/sleeping-compressed.jpg";
import stretch from "../images/gallery/paintingPictures/stretch-compressed.jpg";
import girlHorse from "../images/gallery/paintingPictures/girl-horse-compressed.jpg";
import piano from "../images/gallery/paintingPictures/piano-compressed.jpg";
import darkHorse from "../images/gallery/paintingPictures/dark-horse-compressed.jpg";
import smokingRed from "../images/gallery/paintingPictures/smoking-red-compressed.jpg";
import cat from "../images/gallery/paintingPictures/cat-compressed.jpg";
import afroGirl from "../images/gallery/paintingPictures/afro-girl-compressed.jpg";
import ship from "../images/gallery/paintingPictures/ship-compressed.jpg";
import pink from "../images/gallery/paintingPictures/pink-compressed.jpeg";
import yinyang from "../images/gallery/paintingPictures/yinyang-compressed.jpg";
import crying from "../images/gallery/paintingPictures/crying-compressed.jpeg";
import baby from "../images/gallery/paintingPictures/baby-compressed.jpeg";
import horo from "../images/gallery/paintingPictures/horo-compressed.jpeg";
import redWoman from "../images/gallery/paintingPictures/red-woman-compressed.jpg";
import smokingBlue from "../images/gallery/paintingPictures/smoking-blue-compressed.jpeg";

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
        {genOnePicture("elcho", elcho, "Elcho", isHovered, setIsHovered)}
        {genOnePicture("bun", bun, "Bun", isHovered, setIsHovered)}
        {genOnePicture(
          "naked-girl-painting",
          nakedGirlPainting,
          "Naked Girl",
          isHovered,
          setIsHovered
        )}
        {genOnePicture(
          "underwear",
          underwear,
          "Underwear",
          isHovered,
          setIsHovered
        )}
        {genOnePicture(
          "naked-girl-skirt",
          nakedGirlSkirt,
          "Naked Girl Skirt",
          isHovered,
          setIsHovered
        )}
        {genOnePicture(
          "black-girl-breast",
          blackGirlBreast,
          "Black Girl Breast",
          isHovered,
          setIsHovered
        )}
        {genOnePicture(
          "naked-girl-blanket",
          nakedGirlBlanket,
          "Blanket",
          isHovered,
          setIsHovered
        )}
        {genOnePicture(
          "sleeping",
          sleeping,
          "Sleeping",
          isHovered,
          setIsHovered
        )}
        {genOnePicture("stretch", stretch, "Stretch", isHovered, setIsHovered)}
        {genOnePicture(
          "girl-horse",
          girlHorse,
          "Girl Horse",
          isHovered,
          setIsHovered
        )}

        {genOnePicture("piano", piano, "Piano", isHovered, setIsHovered)}
        {genOnePicture(
          "dark-horse",
          darkHorse,
          "Dark Horse",
          isHovered,
          setIsHovered
        )}
        {genOnePicture(
          "smoking-red",
          smokingRed,
          "Smoking Red",
          isHovered,
          setIsHovered
        )}
        {genOnePicture("cat", cat, "Cat", isHovered, setIsHovered)}
        {genOnePicture(
          "afro-girl",
          afroGirl,
          "Afro Girl",
          isHovered,
          setIsHovered
        )}
        {genOnePicture("ship", ship, "Ship", isHovered, setIsHovered)}
        {genOnePicture("pink", pink, "Pink", isHovered, setIsHovered)}
        {genOnePicture("yinyang", yinyang, "Yin-Yang", isHovered, setIsHovered)}
        {genOnePicture("crying", crying, "Crying", isHovered, setIsHovered)}
        {genOnePicture("baby", baby, "Baby", isHovered, setIsHovered)}
        {genOnePicture("horo", horo, "Horo", isHovered, setIsHovered)}
        {genOnePicture(
          "red-woman",
          redWoman,
          "Red Woman",
          isHovered,
          setIsHovered
        )}
         {genOnePicture(
          "smoking-blue",
          smokingBlue,
          "Smoking Blue",
          isHovered,
          setIsHovered
        )}
      </Slider>
    </section>
  );
};
