import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderParams from "../helpers/sliderParams";
import genPicture from "../helpers/genPicture";
import genOnePicture from "../helpers/genOnePicture";
import bird from "../images/gallery/metalPictures/bird-compressed.JPG";
import bird1 from "../images/gallery/metalPictures/bird1.JPG";
import autoportrait from "../images/gallery/metalPictures/autoportrait-final-compressed.jpg";
import autoportrait1 from "../images/gallery/metalPictures/autoportrait1-compressed.jpg";
import girl from "../images/gallery/metalPictures/girl.png";
import girl1 from "../images/gallery/metalPictures/girl1.png";
import roses from "../images/gallery/metalPictures/roses.png";
import roses1 from "../images/gallery/metalPictures/roses1-compressed.JPG";
import goblet from "../images/gallery/metalPictures/goblet-compressed.JPG";
import goblet1 from "../images/gallery/metalPictures/goblet1-compressed.jpg";
import oprah from "../images/gallery/metalPictures/oprah.JPG";
import oprah1 from "../images/gallery/metalPictures/oprah1-compressed.jpg";
import glasses from "../images/gallery/metalPictures/glasses-final.jpg";
import glasses1 from "../images/gallery/metalPictures/glasses1-compressed.JPG";
import thinkingGirl from "../images/gallery/metalPictures/thinking-girl-final-compressed.jpg";
import thinkingGirl1 from "../images/gallery/metalPictures/thinking-girl1-compressed.JPG";
import elchoMetal from "../images/gallery/metalPictures/elcho-final-compressed.jpg";
import elcho1 from "../images/gallery/metalPictures/elcho-compressed.JPG";
import madara from "../images/gallery/metalPictures/madara-compressed.jpg";
import madara1 from "../images/gallery/metalPictures/madara1-compressed.JPG";
import girlApple from "../images/gallery/metalPictures/girl-apple-compressed.jpg";
import girlApple1 from "../images/gallery/metalPictures/girl-apple1.JPG";
import oldWoman from "../images/gallery/metalPictures/old-woman-compressed.jpg";
import oldWoman1 from "../images/gallery/metalPictures/old-woman1-final.JPG";
import oldHands from "../images/gallery/metalPictures/old-hands-final-compressed.jpg";
import oldHands1 from "../images/gallery/metalPictures/old-hands1-final-compressed.JPG";
import samba from "../images/gallery/metalPictures/samba-compressed.jpg";
import samba1 from "../images/gallery/metalPictures/samba1-compressed.JPG";
import angel from "../images/gallery/metalPictures/angel-compressed.jpg";
import nakedGirl from "../images/gallery/metalPictures/naked-girl-final.jpg";
import nakedGirl1 from "../images/gallery/metalPictures/naked-girl1.JPG";
import eyeWithHand from "../images/gallery/metalPictures/eye-with-hand-compressed.jpg";
import stones from "../images/gallery/metalPictures/stones-compressed.jpg";
import stones1 from "../images/gallery/metalPictures/stones1-compressed.jpg";
import violinMetal from "../images/gallery/metalPictures/violin.jpg";
import horse from "../images/gallery/metalPictures/horse-compressed.jpg";
import perspective from "../images/gallery/metalPictures/perspective.jpg";
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
import nikulden from "../images/gallery/metalPictures/nikulden.JPG";
import horseWithBaby from "../images/gallery/metalPictures/horse-with-baby-compressed.JPG";
import inLove from "../images/gallery/metalPictures/in-love-compressed.JPG";
import eyes from "../images/gallery/metalPictures/eyes-compressed.jpg";
import last from "../images/gallery/metalPictures/last.jpg";

export default ({ isVisible, width }) => {
  const animation = isVisible ? "fade-in visible" : "invisible";
  const [isHovered, setIsHovered] = useState(false);

  console.log(isHovered);

  return (
    <section id="metal-gallery">
      <span className="gallery-title">Metal Art</span>
      <Slider {...sliderParams} className={`slider ${animation}`}>
        {genPicture(
          "bird",
          bird,
          bird1,
          "Birdman",
          isHovered,
          setIsHovered,
          width
        )}
        {genPicture(
          "girl",
          girl,
          girl1,
          "Girl",
          isHovered,
          setIsHovered,
          width
        )}
        {genPicture(
          "roses",
          roses,
          roses1,
          "Roses",
          isHovered,
          setIsHovered,
          width
        )}
        {genPicture(
          "goblet",
          goblet,
          goblet1,
          "Goblet",
          isHovered,
          setIsHovered,
          width
        )}
        {genPicture(
          "oprah",
          oprah1,
          oprah,
          "Oprah",
          isHovered,
          setIsHovered,
          width
        )}
        {genPicture(
          "glasses",
          glasses,
          glasses1,
          "Glasses",
          isHovered,
          setIsHovered,
          width
        )}
        {genPicture(
          "thinking-girl",
          thinkingGirl,
          thinkingGirl1,
          "Thinking girl",
          isHovered,
          setIsHovered,
          width
        )}
        {genPicture(
          "elchoMetal",
          elchoMetal,
          elcho1,
          "Elcho Metal",
          isHovered,
          setIsHovered,
          width
        )}

        {genPicture(
          "madara",
          madara,
          madara1,
          "Madara",
          isHovered,
          setIsHovered,
          width
        )}

        {genPicture(
          "girl-apple",
          girlApple,
          girlApple1,
          "Girl Apple",
          isHovered,
          setIsHovered,
          width
        )}

        {genPicture(
          "old-woman",
          oldWoman,
          oldWoman1,
          "Old Woman",
          isHovered,
          setIsHovered,
          width
        )}

        {genPicture(
          "old-hands",
          oldHands,
          oldHands1,
          "Old Hands",
          isHovered,
          setIsHovered,
          width
        )}

        {genPicture(
          "samba",
          samba,
          samba1,
          "Samba",
          isHovered,
          setIsHovered,
          width
        )}
        {genOnePicture("angel", angel, "Angel", isHovered, setIsHovered)}
        {genPicture(
          "naked-girl",
          nakedGirl,
          nakedGirl1,
          "Naked Girl",
          isHovered,
          setIsHovered,
          width
        )}
        {genOnePicture(
          "eye-with-hand",
          eyeWithHand,
          "Eye with hand",
          isHovered,
          setIsHovered
        )}
        {genPicture(
          "autoportrait",
          autoportrait,
          autoportrait1,
          "Autoportrait",
          isHovered,
          setIsHovered,
          width
        )}
        {genPicture(
          "stones",
          stones,
          stones1,
          "Stones",
          isHovered,
          setIsHovered,
          width
        )}
        {genOnePicture(
          "violinMetal",
          violinMetal,
          "Violin",
          isHovered,
          setIsHovered,
          width
        )}
        {genOnePicture("horse", horse, "Horse", isHovered, setIsHovered, width)}
        {genPicture(
          "perspective",
          perspective,
          perspective1,
          "perspective",
          isHovered,
          setIsHovered,
          width
        )}
        {genOnePicture("embrace", embrace, "Embrace", isHovered, setIsHovered)}
        {genOnePicture(
          "two-faces",
          twoFaces,
          "Two Faces",
          isHovered,
          setIsHovered,
          width
        )}
        {genPicture(
          "split-face",
          splitFace,
          splitFace1,
          "split face",
          isHovered,
          setIsHovered,
          width
        )}
        {genOnePicture("hope", hope, "Hope", isHovered, setIsHovered)}
        {genOnePicture(
          "hope-inverted",
          hopeInverted,
          "Hope Inverted",
          isHovered,
          setIsHovered
        )}
        {genPicture(
          "woman-and-man",
          womanAndMan,
          womanAndMan1,
          "Woman and Man",
          isHovered,
          setIsHovered,
          width
        )}
        {genPicture(
          "three-horses",
          threeHorses,
          threeHorses1,
          "Three Horses",
          isHovered,
          setIsHovered,
          width
        )}

        {genOnePicture("lady", lady, "Lady", isHovered, setIsHovered)}
        {genOnePicture(
          "little-angel",
          littleAngel,
          "Little Angel",
          isHovered,
          setIsHovered
        )}
        {genPicture("hug", hug, hug1, "Hug", isHovered, setIsHovered, width)}
        {genOnePicture(
          "sharp-teeth-fish",
          sharpTeethFish,
          "Sharp Teeth Fish",
          isHovered,
          setIsHovered
        )}
        {genOnePicture(
          "nikulden",
          nikulden,
          "Nikulden",
          isHovered,
          setIsHovered
        )}
        {genOnePicture(
          "horse-with-baby",
          horseWithBaby,
          "Horse With Baby",
          isHovered,
          setIsHovered
        )}
        {genOnePicture("in-love", inLove, "In Love", isHovered, setIsHovered)}
        {genOnePicture("eyes", eyes, "Eyes", isHovered, setIsHovered)}
        {genOnePicture("last", last, "Last", isHovered, setIsHovered)}
      </Slider>
    </section>
  );
};
