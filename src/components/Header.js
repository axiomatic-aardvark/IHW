import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Header() {
  return (
    <header id="header">
      <ul>
        <li>
          <a href="/" draggable="false">
            <span>Home</span>
          </a>
        </li>
        <li>
          <AnchorLink href="#gallery" draggable="false">
            <span>Gallery</span>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#more-info" draggable="false">
            <span>More Info</span>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink href="#more-info" draggable="false">
            <span>Contact Me</span>
          </AnchorLink>
        </li>
      </ul>
    </header>
  );
}
