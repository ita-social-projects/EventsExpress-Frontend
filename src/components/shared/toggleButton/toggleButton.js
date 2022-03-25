import React from "react";
import PropTypes from "prop-types";
import "./toggleButton.scss";

const ToggleButton = ({ children }) => {
  return (
    <div
      type="button"
      className="dropdown-toggle"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {children}
    </div>
  );
};

ToggleButton.defaultProps = {
  children: <></>,
};

ToggleButton.propTypes = {
  children: PropTypes.element,
};
export default ToggleButton;
