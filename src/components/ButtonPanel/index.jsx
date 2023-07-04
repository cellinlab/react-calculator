import React from "react";

import Button from "@/components/Button";

import "./index.scss";

const ButtonPanel = (props) => {
  const { onClick } = props;

  const handleClick = (btnName) => {
    onClick(btnName);
  };

  return (
    <div className="cal_btn_panel">
      <div className="panel_row">
        <Button name="AC" onClick={handleClick} />
        <Button name="+/-" onClick={handleClick} />
        <Button name="%" onClick={handleClick} />
        <Button name="÷" isOrange onClick={handleClick} />
      </div>
      <div className="panel_row">
        <Button name="7" onClick={handleClick} />
        <Button name="8" onClick={handleClick} />
        <Button name="9" onClick={handleClick} />
        <Button name="x" isOrange onClick={handleClick} />
      </div>
      <div className="panel_row">
        <Button name="4" onClick={handleClick} />
        <Button name="5" onClick={handleClick} />
        <Button name="6" onClick={handleClick} />
        <Button name="-" isOrange onClick={handleClick} />
      </div>
      <div className="panel_row">
        <Button name="1" onClick={handleClick} />
        <Button name="2" onClick={handleClick} />
        <Button name="3" onClick={handleClick} />
        <Button name="+" isOrange onClick={handleClick} />
      </div>
      <div className="panel_row">
        <Button name="0" isWide onClick={handleClick} />
        <Button name="." onClick={handleClick} />
        <Button name="=" isOrange onClick={handleClick} />
      </div>
    </div>
  );
};

export default ButtonPanel;
