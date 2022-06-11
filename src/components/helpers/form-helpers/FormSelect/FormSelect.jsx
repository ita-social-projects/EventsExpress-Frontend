import React from "react";
import PropTypes from "prop-types";
import "./FormSelect.scss";

const FormSelect = ({
  input: { value, onChange },
  className,
  children,
  ...restProps
}) => (
  <select
    value={value}
    onChange={onChange}
    {...restProps}
    className={`form-select ${className}`}
  >
    {children}
  </select>
);

FormSelect.defaultProps = {
  children: {},
  className: "",
  placeholder: "",
  input: {},
  meta: {
    error: "",
  },
};

FormSelect.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  input: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func,
  }),
  meta: PropTypes.shape({
    error: PropTypes.string,
  }),
};

export default FormSelect;
