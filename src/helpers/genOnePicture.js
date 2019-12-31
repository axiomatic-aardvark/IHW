import React from "react";

export default (strName, name) => {
  return (
    <div className={`group ${strName}`}>
      <img className="one" src={name} alt={name}></img>
    </div>
  );
};
