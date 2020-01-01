import React from "react";

export default (
  strName,
  name,
  details,
  pieceTitle,
  isHovered,
  setIsHovered
) => {
  return (
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
  );
};
