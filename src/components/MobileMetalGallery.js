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

export default ({ isVisible }) => {
  const animation = isVisible ? "fade-in visible" : "invisible";

  var data = [
    {
      url: bird,
      thumbUrl: bird
    },
    {
      url: girl,
      thumbUrl: girl
    },
    {
      url: roses,
      thumbUrl: roses
    },
    {
      url: goblet,
      title: "Gebet, Opfer, Magie, Leben (2017)",
      thumbUrl: goblet
    },
    {
      url: oprah1,
      thumbUrl: oprah1
    },
    {
      url: glasses,
      thumbUrl: glasses
    },
    {
      url: thinkingGirl,
      title:"L'artiste (2013)",
      thumbUrl: thinkingGirl
    },
    {
      url: elchoMetal,
      title: "Fathers Hands (2013)",
      thumbUrl: elchoMetal
    },
    {
      url: madara,
      thumbUrl: madara
    },
    {
      url: girlApple,
      thumbUrl: girlApple
    },
    {
      url: oldWoman,
      thumbUrl: oldWoman
    },
    {
      url: oldHands,
      title: "Memory of my grandmother (2014)",
      thumbUrl: oldHands
    },
    {
      url: samba,
      title: "Samba (2013)",
      thumbUrl: samba
    },
    {
      url: angel,
      thumbUrl: angel
    },
    {
      url: nakedGirl,
      title: "Model 23 (2013)",
      thumbUrl: nakedGirl
    },
    {
      url: eyeWithHand,
      title: "Praying (2013)",
      thumbUrl: eyeWithHand
    },
    {
      url: autoportrait,
      title: "Pierrot (2013)",
      thumbUrl: autoportrait
    },
    {
      url: stones,
      title: "Live Stones (2014)",
      thumbUrl: stones
    },
    {
      url: violinMetal,
      title: "",
      thumbUrl: violinMetal
    },
    {
      url: horse,
      title: "",
      thumbUrl: horse
    },
    {
      url: perspective,
      title: "",
      thumbUrl: perspective
    },
    {
      url: embrace,
      title: "",
      thumbUrl: embrace
    },
    {
      url: twoFaces,
      title: "Quasimodos Love (2013)",
      thumbUrl: twoFaces
    },
    {
      url: splitFace,
      title: "",
      thumbUrl: splitFace
    },
    {
      url: hope,
      title: "Hope (2013)",
      thumbUrl: hope
    },
    {
      url: hopeInverted,
      title: "",
      thumbUrl: hopeInverted
    },
    {
      url: womanAndMan,
      title: "",
      thumbUrl: womanAndMan
    },
    {
      url: threeHorses,
      title: "",
      thumbUrl: threeHorses
    },
    {
      url: lady,
      title: "",
      thumbUrl: lady
    },
    {
      url: littleAngel,
      title: "Angel (2014)",
      thumbUrl: littleAngel
    },
    {
      url: hug,
      title: "",
      thumbUrl: hug
    },
    {
      url: sharpTeethFish,
      title: "",
      thumbUrl: sharpTeethFish
    },
    {
      url: nikulden,
      title: "Evharistia (2014)",
      thumbUrl: nikulden
    },
    {
      url: horseWithBaby,
      title: "Metal Expression (2014)",
      thumbUrl: horseWithBaby
    },
    {
      url: inLove,
      title: "In Love (2013)",
      thumbUrl: inLove
    },
    {
      url: eyes,
      title: "",
      thumbUrl: eyes
    },
    {
      url: last,
      title: "",
      thumbUrl: last
    },
  ];

  return (
    <section id="mobile-metal-gallery">
      <span className="gallery-title">Metal Art</span>
      <DztImageGalleryComponent
        className="gallery-comp"
        images={data}
        style={{ marginTop: "200px !important" }}
      />
    </section>
  );
};
