import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import ErrorMessages from "../shared/ErrorMessage/ErrorMessage";
import { validate } from "../helpers/validateHelper";
import "./RecoverPassword.scss";
import FormInput from "../shared/FormInput/FormInput";
import {
  CLEAR,
  CLOSE,
  EMAIL_PLACEHOLDER,
  NEW_PASSWORD_SENT_TO_USER_EMAIL,
  OUR_ACTION_TO_USER_FORGOT_PASSWORD,
  SUBMIT,
  USER_FORGOT_PASSWORD_MESSAGE,
  USE_NEW_PASSWORD_TO_LOGIN,
} from "../../constants/authConstants";
import Button from "../shared/Button/Button";

const RecoverPassword = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
  error,
  handleRecoverClose,
  status,
  handleRecoverPassword,
  isRecoverPassword,
}) =>
  isRecoverPassword && (
    <form
      className="recover-password-form"
      onSubmit={handleSubmit(handleRecoverPassword)}
    >
      <h4 className="recover-heading">
        {USER_FORGOT_PASSWORD_MESSAGE} <br />
        {OUR_ACTION_TO_USER_FORGOT_PASSWORD}
      </h4>
      {!status.isError && submitting && (
        <p className="recover-success">
          {NEW_PASSWORD_SENT_TO_USER_EMAIL}
          <br />
          {USE_NEW_PASSWORD_TO_LOGIN}
        </p>
      )}
      <Field
        className="auth-input"
        name="email"
        component={FormInput}
        placeholder={EMAIL_PLACEHOLDER}
      />
      {error && <ErrorMessages error={error} className="text-center" />}
      <div className="recover-btns">
        <Button
          content={CLEAR}
          className="recover-clear"
          onClick={reset}
          disabled={pristine || submitting}
        />
        <Button content={SUBMIT} className="recover-submit" type="submit" />
      </div>
      <Button
        content={CLOSE}
        className="close-btn"
        onClick={handleRecoverClose}
      />
    </form>
  );

RecoverPassword.defaultProps = {
  handleSubmit: () => {},
  pristine: false,
  reset: () => {},
  submitting: false,
  error: [],
  handleRecoverClose: () => {},
  status: {},
  handleRecoverPassword: () => {},
  isRecoverPassword: false,
};

RecoverPassword.propTypes = {
  handleSubmit: PropTypes.func,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  handleRecoverClose: PropTypes.func,
  status: PropTypes.object,
  handleRecoverPassword: PropTypes.func,
  isRecoverPassword: PropTypes.bool,
};

export default reduxForm({
  form: "recoverPassword",
  validate: validate(["email"]),
})(RecoverPassword);
