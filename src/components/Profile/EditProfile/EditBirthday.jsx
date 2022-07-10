import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import Button from "@material-ui/core/Button";
import ErrorMessages from "../../shared/ErrorMessage/ErrorMessage";
import RenderDatePicker from "../../helpers/form-helpers/render-date-pickerV2";
import parseEuDate from "../../helpers/form-helpers/parseEuDate";
import fieldIsRequired from "../../helpers/validators/required-fields-validator";
import PROFILE_CONSTANTS from "../../../constants/profileConstants";
import setRangeForSelectBirthday from "../../helpers/validators/setRangeForSelectBirthday";

export const validate = values => {
  const errors = {};
  const requiredFields = ["birthday"];
  const { DATE_INCORRECT } = PROFILE_CONSTANTS;
  const birthdayDate = new Date(values.Birthday).getTime();
  const currentDate = Date.now();

  if (birthdayDate >= currentDate) {
    errors.Birthday = { DATE_INCORRECT };
  }
  return {
    ...fieldIsRequired(values, requiredFields),
    ...errors,
  };
};

const EditBirthday = ({ handleSubmit, pristine, reset, submitting, error }) => {
  const { SUBMIT, CLEAR, OLDEST_DATE_OF_CHOICE, YOUNGEST_DATE_OF_CHOICE } =
    PROFILE_CONSTANTS;

  const { minValue, maxValue } = setRangeForSelectBirthday(
    OLDEST_DATE_OF_CHOICE,
    YOUNGEST_DATE_OF_CHOICE,
  );
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="birthday"
          label="Birthday"
          minValue={minValue}
          maxValue={maxValue}
          component={RenderDatePicker}
          parse={parseEuDate}
        />
        {error && <ErrorMessages error={error} className="text-center" />}
      </div>

      <Button type="submit" color="primary" disabled={pristine || submitting}>
        {SUBMIT}
      </Button>
      <Button
        type="button"
        color="primary"
        disabled={pristine || submitting}
        onClick={reset}
      >
        {CLEAR}
      </Button>
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

export default EditBirthday;
