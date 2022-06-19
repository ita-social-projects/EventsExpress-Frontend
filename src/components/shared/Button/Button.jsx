import React from "react";
import PropTypes from "prop-types";

// TODO: Fix eslint, we have default prop for type
const Button = ({ content, onClick, className, type, ...otherProps }) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button onClick={onClick} className={className} type={type} {...otherProps}>
      {content}
    </button>
  );
};

Button.defaultProps = {
  content: "",
  onClick: () => {},
  className: "",
  type: "button",
};
Button.propTypes = {
  content: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
