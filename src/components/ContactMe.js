import React from "react";
import openLink from "../helpers/openLink";
import avatar from "../images/contactMe/avatar.jpg";

export default function ContactMe() {
  return (
    <section id="contact-me">
      <div className="veil"></div>
      <div className="container">
        <img src={avatar} alt="avatar"></img>
        <div className="box">
          <p className="title">Contact me here:</p>
          <p>Email: ivohristovart@gmail.com</p>
          <p>
            Facebook:{" "}
            <span
              onClick={openLink("https://www.facebook.com/profile.php?id=100002496444471")}
              className="click"
            >
              Click here
            </span>
          </p>
          <p>Instagram: @ivohristovart</p>
        </div>
      </div>
    </section>
  );
}
