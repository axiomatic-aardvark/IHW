import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderParams from "../helpers/sliderParams";
import genPicture from "../helpers/genPicture";
import genOnePicture from "../helpers/genOnePicture";
import bird from "../images/gallery/metalPictures/bird.JPG";
import bird1 from "../images/gallery/metalPictures/bird1.JPG";
import autoportrait from "../images/gallery/metalPictures/autoportrait-final.jpg";
import autoportrait1 from "../images/gallery/metalPictures/autoportrait1.jpg";
import girl from "../images/gallery/metalPictures/girl.png";
import girl1 from "../images/gallery/metalPictures/girl1.png";
import roses from "../images/gallery/metalPictures/roses.png";
import roses1 from "../images/gallery/metalPictures/roses1.JPG";
import goblet from "../images/gallery/metalPictures/goblet.JPG";
import goblet1 from "../images/gallery/metalPictures/goblet1.jpg";
import oprah from "../images/gallery/metalPictures/oprah.JPG";
import oprah1 from "../images/gallery/metalPictures/oprah1.jpg";
import glasses from "../images/gallery/metalPictures/glasses-final.jpg";
import glasses1 from "../images/gallery/metalPictures/glasses1.JPG";
import thinkingGirl from "../images/gallery/metalPictures/thinking-girl-final.jpg";
import thinkingGirl1 from "../images/gallery/metalPictures/thinking-girl1.JPG";
import elchoMetal from "../images/gallery/metalPictures/elcho-final.jpg";
import elcho1 from "../images/gallery/metalPictures/elcho.JPG";
import madara from "../images/gallery/metalPictures/madara.jpg";
import madara1 from "../images/gallery/metalPictures/madara1.JPG";
import girlApple from "../images/gallery/metalPictures/girl-apple.jpg";
import girlApple1 from "../images/gallery/metalPictures/girl-apple1.JPG";
import oldWoman from "../images/gallery/metalPictures/old-woman.jpg";
import oldWoman1 from "../images/gallery/metalPictures/old-woman1-final.JPG";
import oldHands from "../images/gallery/metalPictures/old-hands-final.jpg";
import oldHands1 from "../images/gallery/metalPictures/old-hands1-final.JPG";
import samba from "../images/gallery/metalPictures/samba.jpg";
import samba1 from "../images/gallery/metalPictures/samba1.JPG";
import angel from "../images/gallery/metalPictures/angel.jpg";
import nakedGirl from "../images/gallery/metalPictures/naked-girl-final.jpg";
import nakedGirl1 from "../images/gallery/metalPictures/naked-girl1.JPG";
import eyeWithHand from "../images/gallery/metalPictures/eye-with-hand.jpg";
import stones from "../images/gallery/metalPictures/stones.jpg";
import stones1 from "../images/gallery/metalPictures/stones1.jpg";
import violinMetal from "../images/gallery/metalPictures/violin.jpg";
import horse from "../images/gallery/metalPictures/horse.jpg";
import perspective from "../images/gallery/metalPictures/perspective.jpg";
import perspective1 from "../images/gallery/metalPictures/perspective1.jpg";
import embrace from "../images/gallery/metalPictures/embrace.jpg";
import twoFaces from "../images/gallery/metalPictures/two-faces.jpg";
import splitFace from "../images/gallery/metalPictures/split-face.jpg";
import splitFace1 from "../images/gallery/metalPictures/split-face1.JPG";
import hope from "../images/gallery/metalPictures/hope.jpg";
import hopeInverted from "../images/gallery/metalPictures/hope-inverted.jpg";
import womanAndMan from "../images/gallery/metalPictures/woman-and-man.jpg";
import womanAndMan1 from "../images/gallery/metalPictures/woman-and-man1.jpg";
import threeHorses from "../images/gallery/metalPictures/three-horses.jpg";
import threeHorses1 from "../images/gallery/metalPictures/three-horses1.jpg";
import lady from "../images/gallery/metalPictures/lady.jpg";
import littleAngel from "../images/gallery/metalPictures/little-angel.JPG";
import hug from "../images/gallery/metalPictures/hug.jpg";
import hug1 from "../images/gallery/metalPictures/hug1.jpg";
import sharpTeethFish from "../images/gallery/metalPictures/sharp-teeth-fish.JPG";
import nikulden from "../images/gallery/metalPictures/nikulden.JPG";
import horseWithBaby from "../images/gallery/metalPictures/horse-with-baby.JPG";
import inLove from "../images/gallery/metalPictures/in-love.JPG";
import eyes from "../images/gallery/metalPictures/eyes.jpg";
import last from "../images/gallery/metalPictures/last.jpg";

export default ({ isVisible }) => {
  const animation = isVisible ? "fade-in visible" : "invisible";
  const [isHovered, setIsHovered] = useState(false);

  console.log(isHovered);

  return (
    <section id="metal-gallery">
      <span className="gallery-title">Metal Art</span>
      <Slider {...sliderParams} className={`slider ${animation}`}>
        {genPicture("bird", bird, bird1, "Birdman", isHovered, setIsHovered)}
        {genPicture("girl", girl, girl1, "Girl", isHovered, setIsHovered)}
        {genPicture("roses", roses, roses1, "Roses", isHovered, setIsHovered)}
        {genPicture(
          "goblet",
          goblet,
          goblet1,
          "Goblet",
          isHovered,
          setIsHovered
        )}
        {genPicture("oprah", oprah1, oprah, "Oprah", isHovered, setIsHovered)}
        {genPicture(
          "glasses",
          glasses,
          glasses1,
          "Glasses",
          isHovered,
          setIsHovered
        )}
        {genPicture(
          "thinking-girl",
          thinkingGirl,
          thinkingGirl1,
          "Thinking girl",
          isHovered,
          setIsHovered
        )}
        {genPicture(
          "elchoMetal",
          elchoMetal,
          elcho1,
          "Elcho Metal",
          isHovered,
          setIsHovered
        )}

        {genPicture(
          "madara",
          madara,
          madara1,
          "Madara",
          isHovered,
          setIsHovered
        )}

        {genPicture(
          "girl-apple",
          girlApple,
          girlApple1,
          "Girl Apple",
          isHovered,
          setIsHovered
        )}

        {genPicture(
          "old-woman",
          oldWoman,
          oldWoman1,
          "Old Woman",
          isHovered,
          setIsHovered
        )}

        {genPicture(
          "old-hands",
          oldHands,
          oldHands1,
          "Old Hands",
          isHovered,
          setIsHovered
        )}

        {genPicture("samba", samba, samba1, "Samba", isHovered, setIsHovered)}
        {genOnePicture("angel", angel, "Angel", isHovered, setIsHovered)}
        {genPicture(
          "naked-girl",
          nakedGirl,
          nakedGirl1,
          "Naked Girl",
          isHovered,
          setIsHovered
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
          setIsHovered
        )}
        {genPicture(
          "stones",
          stones,
          stones1,
          "Stones",
          isHovered,
          setIsHovered
        )}
        {genOnePicture(
          "violinMetal",
          violinMetal,
          "Violin",
          isHovered,
          setIsHovered
        )}
        {genOnePicture("horse", horse, "Horse", isHovered, setIsHovered)}
        {genPicture(
          "perspective",
          perspective,
          perspective1,
          "perspective",
          isHovered,
          setIsHovered
        )}
        {genOnePicture("embrace", embrace, "Embrace", isHovered, setIsHovered)}
        {genOnePicture(
          "two-faces",
          twoFaces,
          "Two Faces",
          isHovered,
          setIsHovered
        )}
        {genPicture(
          "split-face",
          splitFace,
          splitFace1,
          "split face",
          isHovered,
          setIsHovered
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
          setIsHovered
        )}
        {genPicture(
          "three-horses",
          threeHorses,
          threeHorses1,
          "Three Horses",
          isHovered,
          setIsHovered
        )}
        {genOnePicture(
          "hope-inverted",
          hopeInverted,
          "Hope Inverted",
          isHovered,
          setIsHovered
        )}
        {genOnePicture("lady", lady, "Lady", isHovered, setIsHovered)}
        {genOnePicture(
          "little-angel",
          littleAngel,
          "Little Angel",
          isHovered,
          setIsHovered
        )}
        {genPicture("hug", hug, hug1, "Hug", isHovered, setIsHovered)}
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
