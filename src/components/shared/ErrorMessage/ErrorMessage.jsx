import React from "react";
import PropTypes from "prop-types";

const ErrorMessages = ({ error, className }) =>
  Object.values(error)?.map((x, i) => (
    //! TODO : ARRAY INDEX USE AS A KEY (temporary solution)
    // eslint-disable-next-line react/no-array-index-key
    <div key={i} className={`text-danger ${className}`}>
      {x}
    </div>
  ));

ErrorMessages.defaultProps = {
  error: {},
  className: "",
};

ErrorMessages.propTypes = {
  error: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  className: PropTypes.string,
};

export default ErrorMessages;
