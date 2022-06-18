import React from "react";
import PropTypes from "prop-types";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import InputLabel from "@material-ui/core/InputLabel";
import FieldError from "../FieldError/FieldError";

const PhoneNumberInput = ({
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
      {FieldError({ touched, error })}
    </div>
  );
};

export default PhoneNumberInput;

PhoneNumberInput.defaultProps = {
  input: {},
  meta: {},
  label: "",
  children: {},
};

PhoneNumberInput.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  label: PropTypes.string,
  children: PropTypes.object,
};
