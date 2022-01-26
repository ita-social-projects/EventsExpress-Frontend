import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

const RenderTextArea = ({
  input,
  label,
  defaultValue,
  meta: { touched, error, invalid },
}) => {
  return (
    <TextField
      label={label}
      defaultValue={defaultValue}
      multiline
      rows="4"
      fullWidth
      {...input}
      error={touched && invalid}
      helperText={touched && error}
      variant="outlined"
    />
  );
};

export default RenderTextArea;

RenderTextArea.defaultProps = {
  input: {},
  meta: {},
  label: "",
  defaultValue: "",
};

RenderTextArea.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
};
