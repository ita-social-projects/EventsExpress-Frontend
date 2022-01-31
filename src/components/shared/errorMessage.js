import React from "react";
import PropTypes from "prop-types";

const ErrorMessages = ({ error, className }) => {
  return (
    <>
      {error.map((x, i) => (
        //! TODO : ARRAY INDEX USE AS A KEY (temporary solution)
        // eslint-disable-next-line react/no-array-index-key
        <div key={i} className={`text-danger ${className}`}>
          {x}
        </div>
      ))}
    </>
  );
};

ErrorMessages.defaultProps = {
  error: [],
  className: "",
};

ErrorMessages.propTypes = {
  error: PropTypes.array,
  className: PropTypes.string,
};

export default ErrorMessages;
