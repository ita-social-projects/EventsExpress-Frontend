import React from "react";
import PropTypes from "prop-types";
import { TextField as InputText } from "@material-ui/core";

const TextField = ({
  input,
  label,
  inputProps,

  rows,
  fullWidth,
  meta: { touched, error, invalid },
  ...custom
}) => {
  return (
    <InputText
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

export default TextField;

TextField.defaultProps = {
  input: {},
  inputProps: {},
  meta: {},
  rows: "",

  fullWidth: null,
  label: "",
};

TextField.propTypes = {
  input: PropTypes.object,
  inputProps: PropTypes.object,
  meta: PropTypes.object,
  rows: PropTypes.string,

  fullWidth: PropTypes.number,
  label: PropTypes.string,
};
