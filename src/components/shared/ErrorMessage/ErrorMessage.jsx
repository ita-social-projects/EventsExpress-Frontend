import React from "react";
import PropTypes from "prop-types";

const ErrorMessages = ({ error, className }) => {
  if (error) {
    return Object.values(error)?.map(x => (
      <div key={x} className={`text-danger ${className}`}>
        {x}
      </div>
    ));
  }
  return null;
};

ErrorMessages.defaultProps = {
  error: {},
  className: "",
};

ErrorMessages.propTypes = {
  error: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  className: PropTypes.string,
};

export default ErrorMessages;
