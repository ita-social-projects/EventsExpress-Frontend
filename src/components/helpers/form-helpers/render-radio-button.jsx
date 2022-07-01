import React from "react";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import RenderFieldError from "./render-field-error";

const RenderRadioButton = ({
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
      {RenderFieldError({ touched, error })}
    </FormControl>
  );
};

export default RenderRadioButton;

RenderRadioButton.defaultProps = {
  input: {},
  meta: {},
  label: "",
  children: {},
};

RenderRadioButton.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
  children: PropTypes.object,
};
