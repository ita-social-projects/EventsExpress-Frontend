import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

const RenderTextField = ({
  input,
  label,
  inputProps,

  rows,
  fullWidth,
  meta: { touched, error, invalid },
  ...custom
}) => {
  return (
    <TextField
      rows={rows}
      fullWidth={fullWidth === undefined}
      label={label}
      placeholder={label}
      error={touched && invalid}
      inputProps={inputProps}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  );
};

export default RenderTextField;

RenderTextField.defaultProps = {
  input: {},
  inputProps: {},
  meta: {},
  rows: "",

  fullWidth: null,
  label: "",
};

RenderTextField.propTypes = {
  input: PropTypes.object,
  inputProps: PropTypes.object,
  meta: PropTypes.object,
  rows: PropTypes.string,

  fullWidth: PropTypes.number,
  label: PropTypes.string,
};
