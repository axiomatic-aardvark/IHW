import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../styles/main.scss";
import Header from "./Header";
import underline from "../images/home/underline.png";
import downIcon from "../images/home/down.png";

export default function Home() {
  return (
    <section id="home">
      <div className="veil"></div>
      <Header />
      <div className="welcome flicker-in-1">
        <span>Ivohristov.art</span>
        <img src={underline} alt="white-underline"></img>
      </div>
      <div className="information">
        <p>
          Bringing scrap metal to life. Uniquely Dazzling! See more below...
          <AnchorLink href="#gallery" draggable="false">
            <img src={downIcon} alt="down-icon" className="shake-vertical"></img>
          </AnchorLink>
        </p>
      </div>
    </section>
  );
}
