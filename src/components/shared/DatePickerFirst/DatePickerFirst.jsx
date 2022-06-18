import React from "react";
import TextField from "@material-ui/core/TextField";
import moment from "moment";
import PropTypes from "prop-types";

const DatePickerFirst = ({
  input: { onChange, value },
  meta: { touched, invalid, error },
  minValue,
  maxValue,
  label,
  disabled,
}) => {
  const DATE = "YYYY-MM-DD";
  // TODO checking
  if (value && new Date(value) < new Date(minValue)) {
    onChange(moment(minValue).format("L"));
  }

  return (
    <TextField
      type="date"
      label={label}
      selected={moment(value).format("L")}
      value={moment(value).format({ DATE })}
      error={touched && invalid}
      helperText={touched && error}
      onChange={onChange}
      disabled={disabled}
      inputProps={{
        min: minValue ? moment(minValue).format({ DATE }) : null,
        max: maxValue ? moment(maxValue).format({ DATE }) : null,
      }}
    />
  );
};

DatePickerFirst.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func,
  }),
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    invalid: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  }),
  label: PropTypes.string,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  disabled: PropTypes.bool,
};

DatePickerFirst.defaultProps = {
  input: {
    value: "",
    onChange: () => {},
  },
  meta: {
    touched: false,
    invalid: false,
    error: [],
  },
  label: "",
  minValue: null,
  maxValue: null,
  disabled: false,
};

export default DatePickerFirst;
