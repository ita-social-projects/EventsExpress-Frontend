import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import ErrorMessages from "../shared/ErrorMessage/ErrorMessage";
import { validate } from "../helpers/validateHelper";
import "./RecoverPassword.scss";
import FormInput from "../shared/FormInput/FormInput";

const RecoverPassword = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
  error,
  handleRecoverClose,
  status,
}) => {
  return (
    <form className="recover-password-form" onSubmit={handleSubmit}>
      <h4 className="recover-heading">
        If you forgot your password please enter your email address here. <br />{" "}
        We will send you new password.
      </h4>
      {!status.isError && submitting && (
        <p className="recover-success">
          New password sent by your email.
          <br />
          Please use it to sign in.
        </p>
      )}
      <Field
        className="auth-input"
        name="email"
        component={FormInput}
        placeholder="Your Email..."
      />
      {error && <ErrorMessages error={error} className="text-center" />}
      <div className="recover-btns">
        <button
          className="recover-clear"
          onClick={reset}
          disabled={pristine || submitting}
          type="button"
        >
          Clear
        </button>
        <button className="recover-submit" type="submit">
          Submit
        </button>
      </div>
      <button className="close-btn" onClick={handleRecoverClose} type="button">
        Close
      </button>
    </form>
  );
};

RecoverPassword.defaultProps = {
  handleSubmit: () => {},
  pristine: false,
  reset: () => {},
  submitting: false,
  error: [],
  handleRecoverClose: () => {},
  status: {},
};

RecoverPassword.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  handleRecoverClose: PropTypes.func,
  status: PropTypes.object,
};

export default reduxForm({
  form: "recoverPassword",
  validate: validate(["email"]),
})(RecoverPassword);
