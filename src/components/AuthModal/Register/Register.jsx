import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { ImCross } from "react-icons/im";
import ErrorMessages from "../../shared/ErrorMessage/ErrorMessage";
import { validate } from "../../helpers/validateHelper";
import FormInput from "../../shared/FormInput/FormInput";
import SocialAuth from "../../SocialAuth/SocialAuth";
import Button from "../../shared/Button/Button";
import {
  CONFIRM_PASSWORD_PLACEHOLDER,
  EMAIL_PLACEHOLDER,
  PASSWORD_PLACEHOLDER,
  REGISTER,
  SIGN_UP,
} from "../../../constants/authModalConstants";

const Register = ({ error, handleSubmit, handleClose }) => {
  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2 className="auth-form__title">{REGISTER}</h2>
      {error && (
        <ErrorMessages error={error} className="auth-error text-center" />
      )}
      <Button
        content={<ImCross />}
        className="close-btn"
        onClick={handleClose}
      />
      <Field
        className="auth-input"
        name="email"
        component={FormInput}
        placeholder={EMAIL_PLACEHOLDER}
        type="email"
      />

      <Field
        className="auth-input"
        name="password"
        component={FormInput}
        placeholder={PASSWORD_PLACEHOLDER}
        type="password"
      />

      <Field
        className="auth-input"
        name="RepeatPassword"
        component={FormInput}
        placeholder={CONFIRM_PASSWORD_PLACEHOLDER}
        type="password"
      />
      <Button content={SIGN_UP} className="auth-btn" type="submit" />
      <SocialAuth />
    </form>
  );
};

Register.defaultProps = {
  error: "",
  handleSubmit: () => {},
  handleClose: () => {},
};

Register.propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleClose: PropTypes.func,
};

export default reduxForm({
  form: "auth-form",
  validate: validate(
    ["password", "email", "RepeatPassword"],
    [
      { field: "password", minLen: 6, maxLen: 15 },
      { field: "RepeatPassword", minLen: 6, maxLen: 15 },
    ],
  ),
})(Register);
