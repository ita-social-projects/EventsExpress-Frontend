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
import ErrorMessages from "../shared/ErrorMessage/ErrorMessage";
import "./Register.scss";
import { validate } from "../helpers/validateHelper";

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
  validate: validate(["password", "email", "RepeatPassword"]),
})(Register);
