import React from "react";

export default (strName, name, pieceTitle, isHovered, setIsHovered, width) => {
  return (
    <div className={`group ${strName}`}>
      <container>
        <span disabled={true} onMouseEnter={width > 1119 ? () => setIsHovered(true) : null}>
          {isHovered ? pieceTitle : ""}
        </span>
        <img
          className={isHovered ? "light-veil" : ""}
          onMouseEnter={width > 1119 ? () => setIsHovered(true) : null}
          onMouseLeave={width > 1119 ? () => setIsHovered(false) : null}
          onClick={ () => setIsHovered(!isHovered)}
          src={name}
          alt={name}
        ></img>
      </container>
    </div>
  );
};
