import React from "react";

export default (strName, name, details) => {
  return (
    <div className={`group ${strName}`}>
      <img src={name} alt={name}></img>
      <img src={details} alt={details}></img>
    </div>
  );
};
