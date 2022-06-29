import React from "react";
import PropTypes from "prop-types";

const Options = ({ children }) => {
  return (
    <div className="options-div">
      <div>{children}</div>
    </div>
  );
};

Options.propTypes = {
  children: PropTypes.object,
};

Options.defaultProps = {
  children: {},
};

export default Options;
