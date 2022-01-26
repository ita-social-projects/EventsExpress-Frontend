import React from "react";
import PropTypes from "prop-types";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
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
      <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
        <KeyboardDatePicker
          {...inputProps}
          label={label}
          selected={moment(value).format("L")}
          value={value ? moment(value).format("L") : null}
          autoOK
          emptyLabel=""
          format="DD-MM-YYYY"
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
  minValue: null,
  maxValue: null,
  label: "",
  disabled: false,
};

RenderDatePicker.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};
