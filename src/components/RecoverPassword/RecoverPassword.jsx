﻿import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogContentText from "@material-ui/core/DialogContentText";
import ErrorMessages from "../shared/ErrorMessage/ErrorMessage";
import { renderTextField } from "../helpers/form-helpers";
import isValidEmail from "../helpers/validators/email-address-validator";
import fieldIsRequired from "../helpers/validators/required-fields-validator";

const validate = values => {
  const requiredFields = ["email"];
  return {
    ...fieldIsRequired(values, requiredFields),
    ...isValidEmail(values.email),
  };
};

const RecoverPassword = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
  error,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <DialogContentText>
        If you forgot your password please enter your <br /> email address here.
        We will send you new
        <br /> password.
      </DialogContentText>
      <div>
        <Field name="email" component={renderTextField} label="E-mail:" />
        {error && <ErrorMessages error={error} className="text-center" />}
      </div>

      <div>
        <DialogActions className="d-flex flex-column ">
          <div className="d-flex justify-content-around w-100">
            <Button
              fullWidth
              type="button"
              color="primary"
              disabled={pristine || submitting}
              onClick={reset}
            >
              CLEAR
            </Button>
            <Button fullWidth type="submit" color="primary">
              Submit
            </Button>
          </div>
        </DialogActions>
      </div>
    </form>
  );
};

RecoverPassword.defaultProps = {
  handleSubmit: () => {},
  pristine: false,
  reset: () => {},
  submitting: false,
  error: [],
};

RecoverPassword.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default reduxForm({
  form: "recoverPassword",
  validate,
})(RecoverPassword);
