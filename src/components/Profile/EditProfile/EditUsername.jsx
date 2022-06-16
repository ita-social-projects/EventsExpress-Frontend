import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import Button from "@material-ui/core/Button";
import ErrorMessages from "../../shared/ErrorMessage/ErrorMessage";
import { renderTextField } from "../../helpers/form-helpers";
import profileConstants from "../../../constants/profileConstants";

const EditUsername = ({ handleSubmit, pristine, reset, submitting, error }) => {
  const { SUBMIT, CLEAR } = profileConstants;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="userName" component={renderTextField} label="UserName" />
      {error && <ErrorMessages error={error} className="text-center" />}

      <div>
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
      </div>
    </form>
  );
};

EditUsername.defaultProps = {
  pristine: false,
  reset: () => {},
  submitting: false,
  error: "",
  handleSubmit: () => {},
};

EditUsername.propTypes = {
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  error: PropTypes.string,
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: "EditUsername",
})(EditUsername);
