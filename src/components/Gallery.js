import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderParams from "../helpers/sliderParams";
import bird from "../images/gallery/pictures/bird.JPG";
import bird1 from "../images/gallery/pictures/bird1.JPG";
import autoportrait from "../images/gallery/pictures/autoportrait-final.jpg";
import autoportrait1 from "../images/gallery/pictures/autoportrait1.jpg";
import eatenApple from "../images/gallery/pictures/eaten-apple.jpg";
import eatenApple1 from "../images/gallery/pictures/eaten-apple1.JPG";
import girl from "../images/gallery/pictures/girl.png";
import girl1 from "../images/gallery/pictures/girl1.png";
import roses from "../images/gallery/pictures/roses.png";
import roses1 from "../images/gallery/pictures/roses1.JPG";
import goblet from "../images/gallery/pictures/goblet.JPG";
import goblet1 from "../images/gallery/pictures/goblet1.jpg";
import oprah from "../images/gallery/pictures/oprah.JPG";
import oprah1 from "../images/gallery/pictures/oprah1.jpg";
import glasses from "../images/gallery/pictures/glasses-final.jpg";
import glasses1 from "../images/gallery/pictures/glasses1.JPG";
import thinkingGirl from "../images/gallery/pictures/thinking-girl-final.jpg";
import thinkingGirl1 from "../images/gallery/pictures/thinking-girl1.JPG";
import elcho from "../images/gallery/pictures/elcho-final.jpg";
import elcho1 from "../images/gallery/pictures/elcho.JPG";
import madara from "../images/gallery/pictures/madara.jpg";
import madara1 from "../images/gallery/pictures/madara1.JPG";
import girlApple from "../images/gallery/pictures/girl-apple.jpg";
import girlApple1 from "../images/gallery/pictures/girl-apple1.JPG";
import oldWoman from "../images/gallery/pictures/old-woman.jpg";
import oldWoman1 from "../images/gallery/pictures/old-woman1-final.JPG";
import oldHands from "../images/gallery/pictures/old-hands-final.jpg";
import oldHands1 from "../images/gallery/pictures/old-hands1-final.JPG";
import samba from "../images/gallery/pictures/samba.jpg";
import samba1 from "../images/gallery/pictures/samba1.JPG";
import angel from "../images/gallery/pictures/angel.jpg";
import angel1 from "../images/gallery/pictures/angel1.jpg";
import nakedGirl from "../images/gallery/pictures/naked-girl-final.jpg";
import nakedGirl1 from "../images/gallery/pictures/naked-girl1.JPG";
import eyeWithHand from "../images/gallery/pictures/eye-with-hand.jpg";
import eyeWithHand1 from "../images/gallery/pictures/eye-with-hand1.jpg";
import stones from "../images/gallery/pictures/stones.jpg";
import stones1 from "../images/gallery/pictures/stones1.jpg";
import violin from "../images/gallery/pictures/violin.jpg";
import horse from "../images/gallery/pictures/horse.jpg";
import horse1 from "../images/gallery/pictures/horse1.jpg";
import perspective from "../images/gallery/pictures/perspective.jpg";
import perspective1 from "../images/gallery/pictures/perspective1.jpg";
import embrace from "../images/gallery/pictures/embrace.jpg";
import twoFaces from "../images/gallery/pictures/two-faces.jpg";
import twoFaces1 from "../images/gallery/pictures/two-faces1.JPG";
import splitFace from "../images/gallery/pictures/split-face.jpg";
import splitFace1 from "../images/gallery/pictures/split-face1.jpg";
import hope from "../images/gallery/pictures/hope.jpg";
import hopeInverted from "../images/gallery/pictures/hope-inverted.jpg";
import womanAndMan from "../images/gallery/pictures/woman-and-man.jpg";
import womanAndMan1 from "../images/gallery/pictures/woman-and-man1.jpg";
import threeHorses from "../images/gallery/pictures/three-horses.jpg";
import threeHorses1 from "../images/gallery/pictures/three-horses1.jpg";
import lady from "../images/gallery/pictures/lady.jpg";

export default function Gallery({ isVisible }) {
  const animation = isVisible ? "fade-in visible" : "invisible";

  const genPicture = (strName, name, details) => {
    return (
      <div className={`group ${strName}`}>
        <img src={name} alt={name}></img>
        <img src={details} alt={details}></img>
      </div>
    );
  };

  return (
    <section id="gallery">
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
        <div className="group elcho">
          <img src={elcho} alt="elcho"></img>
          <img src={elcho1} alt="elcho"></img>
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
        {genPicture("angel", angel, angel1)}
        {genPicture("naked-girl", nakedGirl, nakedGirl1)}
        {genPicture("eye-with-hand", eyeWithHand, eyeWithHand1)}
        {genPicture("autoportrait", autoportrait, autoportrait1)}
        {genPicture("stones", stones, stones1)}
        <div className="group violin">
          <img src={violin} alt="violin"></img>
        </div>
        {genPicture("horse", horse, horse1)}
        {genPicture("perspective", perspective, perspective1)}
        <div className="group embrace">
          <img src={embrace} alt="embrace"></img>
        </div>
        {genPicture("two-faces", twoFaces, twoFaces1)}
        {genPicture("split-face", splitFace, splitFace1)}
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
        <div className="group eaten-apple">
          <img src={eatenApple} alt="eaten-apple"></img>
          <img src={eatenApple1} alt="eaten-apple1"></img>
        </div>
      </Slider>
    </section>
  );
}
