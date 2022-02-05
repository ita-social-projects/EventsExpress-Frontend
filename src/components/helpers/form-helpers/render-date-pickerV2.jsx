import React from "react";
import PropTypes from "prop-types";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import moment from "moment";

const RenderDatePicker = ({
  input: { onChange, value, ...inputProps },
  meta: { touched, invalid, error },
  minValue,
  maxValue,
  label,
  disabled,
}) => {
  return (
    <>
      <MuiPickersUtilsProvider libInstance={moment} utils={DateFnsUtils}>
        <KeyboardDatePicker
          {...inputProps}
          label={label}
          selected={moment(value).format("L")}
          value={value ? moment(value).format("L") : null}
          emptyLabel=""
          format="dd-MM-yyyy"
          error={touched && invalid}
          helperText={touched && error}
          onChange={onChange}
          disabled={disabled}
          minDate={minValue ? moment(minValue) : undefined}
          maxDate={maxValue ? moment(maxValue) : undefined}
        />
      </MuiPickersUtilsProvider>
    </>
  );
};

export default RenderDatePicker;

RenderDatePicker.defaultProps = {
  input: {},
  meta: {},
  minValue: {},
  maxValue: {},
  label: "",
  disabled: false,
};

RenderDatePicker.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  minValue: PropTypes.object,
  maxValue: PropTypes.object,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};
