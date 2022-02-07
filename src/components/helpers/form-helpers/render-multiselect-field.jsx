import React from "react";
import PropTypes from "prop-types";
import Multiselect from "react-widgets/lib/Multiselect";
import { renderFieldError } from ".";

const RenderMultiselectField = ({
  input,
  data,
  valueField,
  textField,
  placeholder,
  meta: { touched, error },
}) => (
  <>
    <Multiselect
      {...input}
      onBlur={() => input.onBlur()}
      value={input.value || []}
      data={data}
      valueField={valueField}
      textField={textField}
      placeholder={placeholder}
    />
    {renderFieldError({ touched, error })}
  </>
);

export default RenderMultiselectField;

RenderMultiselectField.defaultProps = {
  input: {},
  meta: {},
  valueField: "",
  textField: "",
  placeholder: "",
  data: [],
};

RenderMultiselectField.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  valueField: PropTypes.string,
  textField: PropTypes.string,
  placeholder: PropTypes.string,
  data: PropTypes.array,
};
