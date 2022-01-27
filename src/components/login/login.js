import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import GoogleLogin from "../../containers/GoogleLogin";
import LoginFacebook from "../../containers/FacebookLogin";
import ErrorMessages from "../shared/errorMessage";
import { renderTextField } from "../helpers/form-helpers";
import isValidEmail from "../helpers/validators/email-address-validator";
import fieldIsRequired from "../helpers/validators/required-fields-validator";

const validate = values => {
  const requiredFields = ["password", "email"];
  return {
    ...fieldIsRequired(values, requiredFields),
    ...isValidEmail(values.email),
  };
};

const Login = ({ pristine, reset, submitting, error, handleSubmit }) => {
  return (
    <div className="auth">
      <form onSubmit={handleSubmit} autoComplete="off">
        <div>
          <Field name="email" component={renderTextField} label="E-mail:" />
        </div>
        <div>
          <Field
            name="password"
            component={renderTextField}
            label="Password:"
            type="password"
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
            <Button fullWidth type="submit" value="Login" color="primary">
              Sign In
              <Redirect to="/landing" />
            </Button>
          </DialogActions>
        </div>
      </form>
      <div className="d-flex justify-content-around mb-3">
        <LoginFacebook />
        <GoogleLogin />
      </div>
      {error && <ErrorMessages error={error} className="text-center" />}
    </div>
  );
};

Login.defaultProps = {
  pristine: () => {},
  reset: false,
  submitting: () => {},
  error: "",
  handleSubmit: () => {},
};

Login.propTypes = {
  pristine: PropTypes.func,
  reset: PropTypes.bool,
  submitting: PropTypes.func,
  error: PropTypes.string,
  handleSubmit: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    config: state.config,
  };
};

connect(mapStateToProps, null)(Login);

export default reduxForm({
  form: "login-form",
  validate,
})(Login);
