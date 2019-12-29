import React from "react";
import "../styles/main.scss";
import Header from "./Header";
import underline from "../images/home/underline.png";

export default function Home() {
  return (
    <section id="home">
      <div className="veil"></div>
      <Header />
      <div className="welcome flicker-in-1">
        <span>Uniquely Dazzling</span>
        <img src={underline} alt="white-underline"></img>
      </div>
    </section>
  );
}
