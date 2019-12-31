import React from "react";

export default (strName, name) => {
  return (
    <div className={`group ${strName}`}>
      <img src={name} alt={name}></img>
    </div>
  );
};
