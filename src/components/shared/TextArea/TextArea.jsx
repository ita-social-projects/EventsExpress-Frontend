import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

const TextArea = ({
  input,
  label,

  meta: { touched, error, invalid },
}) => {
  return (
    <TextField
      label={label}
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

export default TextArea;

TextArea.defaultProps = {
  input: {},
  meta: {},
  label: "",
};

TextArea.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
};
