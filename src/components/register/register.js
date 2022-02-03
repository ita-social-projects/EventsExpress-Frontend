import React from "react";
import PropTypes from "prop-types";
import DialogActions from "@material-ui/core/DialogActions";
import { Field, reduxForm } from "redux-form";
import Button from "@material-ui/core/Button";
import {
  minLength6,
  maxLength15,
} from "../helpers/validators/min-max-length-validators";
import { renderTextField } from "../helpers/form-helpers";
import isValidEmail from "../helpers/validators/email-address-validator";
import fieldIsRequired from "../helpers/validators/required-fields-validator";
import ErrorMessages from "../shared/errorMessage";
import "./register.css";

const validate = values => {
  const errors = {};
  const requiredFields = ["password", "email", "RepeatPassword"];

  if (values.password !== values.RepeatPassword) {
    errors.RepeatPassword = "Passwords do not match";
  }

  if (values.newPassword !== values.repeatPassword) {
    errors.repeatPassword = "Passwords do not match";
  }

  return {
    ...errors,
    ...fieldIsRequired(values, requiredFields),
    ...isValidEmail(values.email),
  };
};

const Register = ({ pristine, reset, submitting, error, handleSubmit }) => {
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            className="registerFormInputs"
            name="email"
            component={renderTextField}
            label="E-mail:"
            type="email"
          />
        </div>
        <div>
          <Field
            className="registerFormInputs"
            name="password"
            component={renderTextField}
            label="Password:"
            type="password"
            validate={[maxLength15, minLength6]}
          />
        </div>
        <div>
          <Field
            className="registerFormInputs"
            name="RepeatPassword"
            component={renderTextField}
            label="Repeat password:"
            type="password"
            validate={[maxLength15, minLength6]}
          />
        </div>
        <div>
          <DialogActions>
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
              Sign Up
            </Button>
          </DialogActions>
        </div>
        {error && <ErrorMessages error={error} className="text-center" />}
      </form>
    </div>
  );
};

Register.defaultProps = {
  pristine: false,
  reset: () => {},
  submitting: false,
  error: "",
  handleSubmit: () => {},
};

Register.propTypes = {
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  error: PropTypes.string,
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: "register-form",
  validate,
})(Register);
