import React, { useState } from "react";
import DztImageGalleryComponent from "reactjs-image-gallery";
import Slider from "react-slick";
import sliderParams from "../helpers/sliderParams";
import genPicture from "../helpers/genPicture";
import genOnePicture from "../helpers/genOnePicture";
import bird from "../images/gallery/metalPictures/bird-compressed.JPG";
import bird1 from "../images/gallery/metalPictures/bird1-compressed.jpeg";
import autoportrait from "../images/gallery/metalPictures/autoportrait-final-compressed.jpg";
import autoportrait1 from "../images/gallery/metalPictures/autoportrait1-compressed.jpg";
import girl from "../images/gallery/metalPictures/girl-compressed.jpg";
import girl1 from "../images/gallery/metalPictures/girl1-compressed.jpg";
import roses from "../images/gallery/metalPictures/roses-compressed.jpg";
import roses1 from "../images/gallery/metalPictures/roses1-compressed.JPG";
import goblet from "../images/gallery/metalPictures/goblet-compressed.JPG";
import goblet1 from "../images/gallery/metalPictures/goblet1-compressed.jpg";
import oprah from "../images/gallery/metalPictures/oprah-compressed.jpg";
import oprah1 from "../images/gallery/metalPictures/oprah1-compressed.jpg";
import glasses from "../images/gallery/metalPictures/glasses-final-compressed.jpg";
import glasses1 from "../images/gallery/metalPictures/glasses1-compressed.JPG";
import thinkingGirl from "../images/gallery/metalPictures/thinking-girl-final-compressed.jpg";
import thinkingGirl1 from "../images/gallery/metalPictures/thinking-girl1-compressed.JPG";
import elchoMetal from "../images/gallery/metalPictures/elcho-final-compressed.jpg";
import elcho1 from "../images/gallery/metalPictures/elcho-compressed.JPG";
import madara from "../images/gallery/metalPictures/madara-compressed.jpg";
import madara1 from "../images/gallery/metalPictures/madara1-compressed.JPG";
import girlApple from "../images/gallery/metalPictures/girl-apple-compressed.jpg";
import girlApple1 from "../images/gallery/metalPictures/girl-apple1-compressed.jpg";
import oldWoman from "../images/gallery/metalPictures/old-woman-compressed.jpg";
import oldWoman1 from "../images/gallery/metalPictures/old-woman1-final-compressed.jpg";
import oldHands from "../images/gallery/metalPictures/old-hands-final-compressed.jpg";
import oldHands1 from "../images/gallery/metalPictures/old-hands1-final-compressed.JPG";
import samba from "../images/gallery/metalPictures/samba-compressed.jpg";
import samba1 from "../images/gallery/metalPictures/samba1-compressed.JPG";
import angel from "../images/gallery/metalPictures/angel-compressed.jpg";
import nakedGirl from "../images/gallery/metalPictures/naked-girl-final-compressed.jpg";
import nakedGirl1 from "../images/gallery/metalPictures/naked-girl1-compressed.jpg";
import eyeWithHand from "../images/gallery/metalPictures/eye-with-hand-compressed.jpg";
import stones from "../images/gallery/metalPictures/stones-compressed.jpg";
import stones1 from "../images/gallery/metalPictures/stones1-compressed.jpg";
import violinMetal from "../images/gallery/metalPictures/violin-compressed.jpg";
import horse from "../images/gallery/metalPictures/horse-compressed.jpg";
import perspective from "../images/gallery/metalPictures/perspective-compressed.jpg";
import perspective1 from "../images/gallery/metalPictures/perspective1-compressed.jpg";
import embrace from "../images/gallery/metalPictures/embrace-compressed.jpg";
import twoFaces from "../images/gallery/metalPictures/two-faces-compressed.jpg";
import splitFace from "../images/gallery/metalPictures/split-face-compressed.jpg";
import splitFace1 from "../images/gallery/metalPictures/split-face1-compressed.JPG";
import hope from "../images/gallery/metalPictures/hope-compressed.jpg";
import hopeInverted from "../images/gallery/metalPictures/hope-inverted-compressed.jpg";
// compressed
import womanAndMan from "../images/gallery/metalPictures/woman-and-man.jpg";
import womanAndMan1 from "../images/gallery/metalPictures/woman-and-man1.jpg";
// end compressed
import threeHorses from "../images/gallery/metalPictures/three-horses-compressed.jpg";
import threeHorses1 from "../images/gallery/metalPictures/three-horses1-compressed.jpg";
import lady from "../images/gallery/metalPictures/lady-compressed.jpg";
import littleAngel from "../images/gallery/metalPictures/little-angel-compressed.JPG";
import hug from "../images/gallery/metalPictures/hug-compressed.jpg";
import hug1 from "../images/gallery/metalPictures/hug1-compressed.jpg";
import sharpTeethFish from "../images/gallery/metalPictures/sharp-teeth-fish-compressed.JPG";
import nikulden from "../images/gallery/metalPictures/nikulden-compressed.jpeg";
import horseWithBaby from "../images/gallery/metalPictures/horse-with-baby-compressed.JPG";
import inLove from "../images/gallery/metalPictures/in-love-compressed.JPG";
import eyes from "../images/gallery/metalPictures/eyes-compressed.jpg";
import last from "../images/gallery/metalPictures/last-compressed.jpg";
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

  var data = [
    {
      url: eatenApple,
      title:`Project "Apple" (2015)`,
      thumbUrl: eatenApple
    },
    {
      url: colorfulApple,
      title:`Project "Apple" (2015)`,
      thumbUrl: colorfulApple
    },
    {
      url: redApple,
      title:`Project "Apple" (2015)`,
      thumbUrl: redApple
    },
    {
      url: manyApples,
      title:`Project "Apple" (2015)`,
      thumbUrl: manyApples
    },
    {
      url: squareApple,
      title:`Project "Apple" (2015)`,
      thumbUrl: squareApple
    },
    {
      url: redApples,
      title:`Project "Apple" (2015)`,
      thumbUrl: redApples
    },
    {
      url: tomatoApple,
      title:`Project "Apple" (2015)`,
      thumbUrl: tomatoApple
    },
    {
      url: darkblueApple,
      title:`Project "Apple" (2015)`,
      thumbUrl: darkblueApple
    },
    {
      url: chessApples,
      title:`Project "Apple" (2015)`,
      thumbUrl: chessApples
    },
    {
      url: halfApples,
      title:`Project "Apple" (2015)`,
      thumbUrl: halfApples
    },
    {
      url: bittenApple,
      title:`Project "Apple" (2015)`,
      thumbUrl: bittenApple
    },
    {
      url: blueAndGreen,
      title:`Project "Apple" (2015)`,
      thumbUrl: blueAndGreen
    },
    {
      url: frozenApple,
      title:`Project "Apple" (2015)`,
      thumbUrl: frozenApple
    },
    {
      url: pear,
      thumbUrl: pear
    },
    {
      url: lips,
      title: "Freuhmorgens - 4.00h (acril)",
      thumbUrl: lips
    },
    {
      url: violin,
      title: "Kleine Nachtmusik (oil)",
      thumbUrl: violin
    },
    {
      url: elcho,
      thumbUrl: elcho
    },
    {
      url: bun,
      thumbUrl: bun
    },
    {
      url: nakedGirlPainting,
      thumbUrl: nakedGirlPainting
    },
    {
      url: underwear,
      thumbUrl: underwear
    },
    {
      url: nakedGirlSkirt,
      thumbUrl: nakedGirlSkirt
    },
    {
      url: blackGirlBreast,
      thumbUrl: blackGirlBreast
    },
    {
      url: nakedGirlBlanket,
      thumbUrl: nakedGirlBlanket
    },
    {
      url: sleeping,
      thumbUrl: sleeping
    },
    {
      url: girlHorse,
      thumbUrl: girlHorse
    },
    {
      url: darkHorse,
      thumbUrl: darkHorse
    },
    {
      url: smokingRed,
      thumbUrl: smokingRed
    },
    {
      url: cat,
      thumbUrl: cat
    },
    {
      url: lady,
      thumbUrl: lady
    },
    {
      url: littleAngel,
      thumbUrl: littleAngel
    },
    {
      url: hug,
      thumbUrl: hug
    },
    {
      url: afroGirl,
      thumbUrl: afroGirl
    },
    {
      url: ship,
      thumbUrl: ship
    },
    {
      url: pink,
      thumbUrl: pink
    },
    {
      url: yinyang,
      thumbUrl: yinyang
    },
    {
      url: crying,
      thumbUrl: crying
    },
    {
      url: baby,
      thumbUrl: baby
    },
    {
        url: horo,
        thumbUrl: horo
      },
      {
        url: redWoman,
        thumbUrl: redWoman
      },
      {
        url: smokingBlue,
        thumbUrl: smokingBlue
      },
  ];

  return (
    <section id="mobile-paintings-gallery">
      <span className="gallery-title">Paintings</span>
      <DztImageGalleryComponent
        className="gallery-comp"
        images={data}
        style={{ marginTop: "200px !important" }}
      />
    </section>
  );
};
