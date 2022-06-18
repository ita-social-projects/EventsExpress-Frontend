import React from "react";
import PropTypes from "prop-types";
import FormHelperText from "@material-ui/core/FormHelperText";

const FieldError = ({ touched, error }) => {
  if (!(touched && error)) {
    return null;
  }
  return <FormHelperText style={{ color: "#f44336" }}>{error}</FormHelperText>;
};

export default FieldError;

FieldError.defaultProps = {
  touched: false,
  error: "",
};

FieldError.propTypes = {
  touched: PropTypes.bool,
  error: PropTypes.string,
};
