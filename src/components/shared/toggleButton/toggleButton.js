import React from "react";
import "./toggleButton.scss";

const TogleButton = () => {
  return (
    <div
      type="button"
      className="dropdown-toggle"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    ></div>
  );
};
export default TogleButton;
