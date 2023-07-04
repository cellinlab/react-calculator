import React from "react";

import "./index.scss";

const Button = (props) => {
  const { name, isOrange, isWide, onClick } = props;

  const handleClick = () => {
    onClick(name);
  };

  return (
    <div className={`cal_btn ${isOrange ? "orange" : ""} ${isWide ? "wide" : ""}`}>
      <button onClick={handleClick}>{name}</button>
    </div>
  );
};

export default Button;
