import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import Button from "@material-ui/core/Button";
import moment from "moment";
import DatePickerFirst from "../../shared/DatePickerFirst/DatePickerFirst";
import ErrorMessages from "../../shared/ErrorMessage/ErrorMessage";
import parseEuDate from "../../../helpers/parseEuDate";
import { fieldIsRequired } from "../../helpers/formFieldValidationHelpers";

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
  const minValue = moment(new Date()).subtract({ years: 115 });
  const maxValue = moment(new Date()).subtract({ years: 14 });
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="birthday"
          label="Birthday"
          minValue={minValue}
          maxValue={maxValue}
          component={DatePickerFirst}
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
