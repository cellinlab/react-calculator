import React from "react";

import "./index.scss";

const Display = (props) => {
  const { value } = props;

  return (
    <div className="cal_display">
      <div className="text">{value}</div>
    </div>
  );
};

export default Display;
