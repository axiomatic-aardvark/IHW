import React from "react";

export default (strName, name, pieceTitle, isHovered, setIsHovered) => {
  return (
    <div className={`group ${strName}`}>
      <container>
        <span disabled={true} onMouseEnter={() => setIsHovered(true)}>
          {isHovered ? pieceTitle : ""}
        </span>
        <img
          className={isHovered ? "light-veil" : ""}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          src={name}
          alt={name}
        ></img>
      </container>
    </div>
  );
};
