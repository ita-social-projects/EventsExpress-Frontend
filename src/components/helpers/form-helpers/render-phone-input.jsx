import React from "react";
import PropTypes from "prop-types";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import InputLabel from "@material-ui/core/InputLabel";
import { renderFieldError } from ".";

const RenderPhoneInput = ({
  input,
  label,
  meta: { touched, error, invalid },
  children,
  ...custom
}) => {
  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <PhoneInput
        {...input}
        international
        countryCallingCodeEditable={false}
        defaultCountry="UA"
        value={input.value}
        onChange={input.onChange}
        error={touched && invalid}
        {...custom}
      />
      {renderFieldError({ touched, error })}
    </div>
  );
};

export default RenderPhoneInput;

RenderPhoneInput.defaultProps = {
  input: {},
  meta: {},
  label: "",
  children: {},
};

RenderPhoneInput.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
  children: PropTypes.object,
};
