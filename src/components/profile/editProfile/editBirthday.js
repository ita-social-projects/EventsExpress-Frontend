﻿import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import Button from "@material-ui/core/Button";
import moment from "moment";
import PropTypes from "prop-types";
import ErrorMessages from "../../shared/errorMessage";
import { renderDatePicker, parseEuDate } from "../../helpers/form-helpers";
import fieldIsRequired from "../../helpers/validators/required-fields-validator";

const validate = values => {
  const errors = {};
  const requiredFields = ["birthday"];

  if (new Date(values.Birthday).getTime() >= Date.now()) {
    errors.Birthday = "Date is incorrect";
  }
  return {
    ...fieldIsRequired(values, requiredFields),
    ...errors,
  };
};

const EditBirthday = ({ handleSubmit, pristine, reset, submitting, error }) => {
  const minValue = moment(new Date()).subtract(115, "years");
  const maxValue = moment(new Date()).subtract(14, "years");
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="birthday"
          label="Birthday"
          minValue={minValue}
          maxValue={maxValue}
          component={renderDatePicker}
          parse={parseEuDate}
        />
        {error && <ErrorMessages error={error} className="text-center" />}
      </div>
      <div>
        <Button type="submit" color="primary" disabled={pristine || submitting}>
          Submit
        </Button>
        <Button
          type="button"
          color="primary"
          disabled={pristine || submitting}
          onClick={reset}
        >
          Clear
        </Button>
      </div>
    </form>
  );
};

EditBirthday.defaultProps = {
  pristine: false,
  reset: () => {},
  submitting: false,
  error: "",
  handleSubmit: () => {},
};

EditBirthday.propTypes = {
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  error: PropTypes.string,
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: "EditBirthday",
  validate,
})(EditBirthday);

EditBirthday.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  error: PropTypes.array,
};

EditBirthday.defaultProps = {
  handleSubmit: () => {},
  pristine: false,
  reset: () => {},
  submitting: false,
  error: [],
};
