import React from "react";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FieldError from "../FieldError/FieldError";

const RadioButton = ({
  input,
  label,
  children,
  meta: { error, touched },
  ...rest
}) => {
  return (
    <FormControl>
      <RadioGroup {...input} {...rest}>
        {children}
      </RadioGroup>
      {FieldError({ touched, error })}
    </FormControl>
  );
};

export default RadioButton;

RadioButton.defaultProps = {
  input: {},
  meta: {},
  label: "",
  children: {},
};

RadioButton.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
  children: PropTypes.object,
};
