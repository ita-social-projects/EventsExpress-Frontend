import React from "react";
import PropTypes from "prop-types";
import "./FormTextArea.scss";

const FormTextarea = ({
  input: { value, onChange, onBlur },
  className,
  meta: { error, touched },
  ...restProps
}) => (
  <div className="form-group__textarea">
    <textarea
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className={`form-textarea ${className} ${
        error && touched ? " form-textarea__error" : ""
      }`}
      {...restProps}
    />
    {error && touched && <div className="form-error">{error}</div>}
  </div>
);

FormTextarea.defaultProps = {
  className: "",
  placeholder: "",
  input: {},
  meta: {
    error: "",
    touched: false,
  },
};

FormTextarea.propTypes = {
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
  }),
};

export default FormTextarea;
