import React from "react";
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

export default ({ isVisible }) => {
  const animation = isVisible ? "fade-in visible" : "invisible";

  return (
    <section id="metal-gallery">
      <Slider {...sliderParams} className={`slider ${animation}`}>
        <div className="group bird">
          <img src={bird} alt="bird"></img>
          <img src={bird1} alt="bird1"></img>
        </div>
        <div className="group girl">
          <img src={girl} alt="girl"></img>
          <img src={girl1} alt="girl"></img>
        </div>
        <div className="group roses">
          <img src={roses} alt="roses"></img>
          <img src={roses1} alt="roses"></img>
        </div>
        <div className="group goblet">
          <img src={goblet} alt="goblet"></img>
          <img src={goblet1} alt="goblet"></img>
        </div>
        <div className="group oprah">
          <img src={oprah1} alt="oprah"></img>
          <img src={oprah} alt="oprah"></img>
        </div>
        <div className="group glasses">
          <img src={glasses} alt="glasses"></img>
          <img src={glasses1} alt="glasses1"></img>
        </div>
        <div className="group thinking-girl">
          <img src={thinkingGirl} alt="thinking-girl"></img>
          <img src={thinkingGirl1} alt="thinking-girl"></img>
        </div>
        <div className="group elchoMetal">
          <img src={elchoMetal} alt="elchoMetal"></img>
          <img src={elcho1} alt="elchoMetal"></img>
        </div>
        <div className="group madara">
          <img src={madara} alt="madara"></img>
          <img src={madara1} alt="madara"></img>
        </div>
        <div className="group girl-apple">
          <img src={girlApple} alt="girl-apple"></img>
          <img src={girlApple1} alt="girl-apple"></img>
        </div>
        <div className="group old-woman">
          <img src={oldWoman} alt="old-woman"></img>
          <img src={oldWoman1} alt="old-woman"></img>
        </div>
        <div className="group old-hands">
          <img src={oldHands} alt="old-hands"></img>
          <img src={oldHands1} alt="old-hands1"></img>
        </div>

        {genPicture("samba", samba, samba1)}
        {genOnePicture("angel", angel)}
        {genPicture("naked-girl", nakedGirl, nakedGirl1)}
        {genOnePicture("eye-with-hand", eyeWithHand)}
        {genPicture("autoportrait", autoportrait, autoportrait1)}
        {genPicture("stones", stones, stones1)}
        <div className="group violinMetal">
          <img src={violinMetal} alt="violinMetal"></img>
        </div>
        {genOnePicture("horse", horse)}
        {genPicture("perspective", perspective, perspective1)}
        <div className="group embrace">
          <img src={embrace} alt="embrace"></img>
        </div>
        {genOnePicture("two-faces", twoFaces)}
        {genOnePicture("split-face", splitFace)}
        <div className="group hope">
          <img src={hope} alt="hope"></img>
        </div>
        <div className="group hope-inverted">
          <img src={hopeInverted} alt="hope-inverted"></img>
        </div>
        {genPicture("woman-and-man", womanAndMan, womanAndMan1)}
        {genPicture("three-horses", threeHorses, threeHorses1)}

        <div className="group lady">
          <img src={lady} alt="lady"></img>
        </div>
        <div className="group little-angel">
          <img src={littleAngel} alt="little-angel"></img>
        </div>
        {genPicture("hug", hug, hug1)}
        {genOnePicture("sharp-teeth-fish", sharpTeethFish)}
        {genOnePicture("nikulden", nikulden)}
        {genOnePicture("horse-with-baby", horseWithBaby)}
        {genOnePicture("in-love", inLove)}
      </Slider>
    </section>
  );
};
