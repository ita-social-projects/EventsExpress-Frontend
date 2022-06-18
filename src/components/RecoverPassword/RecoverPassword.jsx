import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { ImCross } from "react-icons/im";
import ErrorMessages from "../shared/ErrorMessage/ErrorMessage";
import isValidEmail from "../helpers/validators/email-address-validator";
import fieldIsRequired from "../helpers/validators/required-fields-validator";
import "./RecoverPassword.scss";
import FormInput from "../shared/FormInput/FormInput";

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
  handleRecoverClose,
}) => {
  return (
    <form className="recover-password-form" onSubmit={handleSubmit}>
      <button className="close-btn" onClick={handleRecoverClose} type="button">
        <ImCross />
      </button>
      <h4 className="recover-heading">
        If you forgot your password please enter your email address here. <br />{" "}
        We will send you new password.
      </h4>

      <div>
        <Field name="email" component={FormInput} placeholder="Your Email..." />
        {error && <ErrorMessages error={error} className="text-center" />}
      </div>

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
};

RecoverPassword.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  handleRecoverClose: PropTypes.func,
};

export default reduxForm({
  form: "recoverPassword",
  validate,
})(RecoverPassword);
