import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderParams from "../helpers/sliderParams";
import bird from "../images/gallery/pictures/bird.JPG";
import bird1 from "../images/gallery/pictures/bird1.JPG";
import autoportrait1 from "../images/gallery/pictures/autoportrait-final.jpg";
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
        {/* <div className="group samba">
          <img src={samba} alt="samba"></img>
          <img src={samba1} alt="samba1"></img>
        </div> */}
        {genPicture("samba", samba, samba1)}
        {genPicture("angel", angel, angel1)}
        {genPicture("naked-girl", nakedGirl, nakedGirl1)}
        {genPicture("eye-with-hand", eyeWithHand, eyeWithHand1)}


        <div className="group autoportrait">
          <img src={autoportrait1} alt="autoportrait1"></img>
        </div>
        <div className="group eaten-apple">
          <img src={eatenApple} alt="eaten-apple"></img>
          <img src={eatenApple1} alt="eaten-apple1"></img>
        </div>
      </Slider>
    </section>
  );
}
