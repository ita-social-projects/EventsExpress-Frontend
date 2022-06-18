import React from "react";
import PropTypes from "prop-types";
import DialogActions from "@material-ui/core/DialogActions";
import { Field, reduxForm } from "redux-form";
import Button from "@material-ui/core/Button";
import {
  minLength,
  maxLength,
  isValidEmail,
  fieldIsRequired,
} from "../helpers/formFieldValidationHelpers";
import TextField from "../shared/TextField/TextField";
import ErrorMessages from "../shared/ErrorMessage/ErrorMessage";
import "./Register.scss";

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
            component={TextField}
            label="E-mail:"
            type="email"
          />
        </div>
        <div>
          <Field
            className="registerFormInputs"
            name="password"
            component={TextField}
            label="Password:"
            type="password"
            validate={[maxLength(15), minLength(6)]}
          />
        </div>
        <div>
          <Field
            className="registerFormInputs"
            name="RepeatPassword"
            component={TextField}
            label="Repeat password:"
            type="password"
            validate={[maxLength(15), minLength(6)]}
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
