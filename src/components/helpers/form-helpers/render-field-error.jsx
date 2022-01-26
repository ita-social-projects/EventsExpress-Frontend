import React from "react";
import PropTypes from "prop-types";
import FormHelperText from "@material-ui/core/FormHelperText";

const RenderFieldError = ({ touched, error }) => {
  if (!(touched && error)) {
    return null;
  }
  return <FormHelperText style={{ color: "#f44336" }}>{error}</FormHelperText>;
};

export default RenderFieldError;

RenderFieldError.defaultProps = {
  touched: false,
  error: "",
};

RenderFieldError.propTypes = {
  touched: PropTypes.bool,
  error: PropTypes.string,
};
