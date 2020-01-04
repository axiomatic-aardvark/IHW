import React from "react";
import genOnePicture from "./genOnePicture";

export default (
  strName,
  name,
  details,
  pieceTitle,
  isHovered,
  setIsHovered,
  width
) => {
  console.log(width);
  return width > 1119 ? (
    <div className={`group ${strName}`}>
      <img src={name} alt={name}></img>
      <container>
        <img
          className={isHovered ? "light-veil" : ""}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          src={details}
          alt={details}
        ></img>
        <span disabled={true} onMouseEnter={() => setIsHovered(true)}>
          {isHovered ? pieceTitle : ""}
        </span>
      </container>
    </div>
  ) : (
    genOnePicture(strName, name, pieceTitle, isHovered, setIsHovered)
  );
};
