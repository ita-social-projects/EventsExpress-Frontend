import React from "react";
import PropTypes from "prop-types";
import "./SplitPanels";

const CollapseButton = ({ onClick, icon }) => {
  return (
    <button type="button" onClick={onClick} className="collapse-button">
      {icon}
    </button>
  );
};

CollapseButton.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.element,
};

CollapseButton.defaultProps = {
  onClick: () => {},
  icon: {},
};

export default CollapseButton;
