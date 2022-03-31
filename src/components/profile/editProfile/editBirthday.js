import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import Button from "@material-ui/core/Button";
import moment from "moment";
import ErrorMessages from "../../shared/errorMessage";
import { renderDatePicker, parseEuDate } from "../../helpers/form-helpers";
import fieldIsRequired from "../../helpers/validators/required-fields-validator";

const today = () => moment().startOf("day");

const MIN_AGE = 14;
const MAX_AGE = 115;
const MIN_DATE = today().subtract(MAX_AGE, "years");
const MAX_DATE = today().subtract(MIN_AGE, "years");

const validate = values => {
    const errors = {};
    const requiredFields = ['birthday'];

    if (values.birthday === undefined) {
        return fieldIsRequired(values, requiredFields);
    }

    const dateOfBirth = moment(values.birthday);
    if (values.birthday === null || dateOfBirth > today()) {
        errors.birthday = 'It is possible to use only valid date of birth';
    } else if (dateOfBirth > MAX_DATE) {
        errors.birthday = 'You must be 14 years old or over to use the website';
    } else if (dateOfBirth <= MIN_DATE) {
        errors.birthday = 'You must be less than 115 years old to use the website';
    }
    
    return errors;
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
    form: 'EditBirthday',
    touchOnChange: true,
    validate,
})(EditBirthday);
