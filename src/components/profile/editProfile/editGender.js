import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import Button from "@material-ui/core/Button";
import { renderSelectField } from "../../helpers/form-helpers";
import ErrorMessages from "../../shared/errorMessage";

const EditGender = ({ handleSubmit, pristine, submitting, error }) => {
  return (
    <form name="EditGender" onSubmit={handleSubmit}>
      <div>
        <Field
          minWidth={210}
          name="gender"
          component={renderSelectField}
          label="Gender"
        >
          <option aria-label="None" value="" />
          <option value="1">Male</option>
          <option value="2">Female</option>
          <option value="3">Other</option>
        </Field>
        {error && <ErrorMessages error={error} className="text-center" />}
      </div>

      <div>
        <Button type="submit" color="primary" disabled={pristine || submitting}>
          Submit
        </Button>
      </div>
    </form>
  );
};

EditGender.defaultProps = {
  pristine: () => {},
  submitting: () => {},
  error: "",
  handleSubmit: () => {},
};

EditGender.propTypes = {
  pristine: PropTypes.func,
  submitting: PropTypes.func,
  error: PropTypes.string,
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: "EditGender",
})(EditGender);
