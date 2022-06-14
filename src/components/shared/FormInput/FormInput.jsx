import React from "react";
import PropTypes from "prop-types";
import "./FormInput.scss";

const FormInput = ({
  input: { value, onChange, onBlur },
  className,
  meta: { error, touched, invalid },
  ...restProps
}) => (
  <div className="form-group__input">
    <input
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={`form-input ${className} ${
        invalid && touched ? " form-input__error" : ""
      }`}
      {...restProps}
    />
    {invalid && touched && <div className="form-error">{error}</div>}
  </div>
);

FormInput.defaultProps = {
  className: "",
  placeholder: "",
  input: {},
  meta: {
    error: "",
    touched: false,
    invalid: true,
  },
};

FormInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  input: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
  }),
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool,
    invalid: PropTypes.bool,
  }),
};

export default FormInput;
