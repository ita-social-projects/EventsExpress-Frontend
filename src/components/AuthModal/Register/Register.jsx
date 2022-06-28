import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";
import { ImCross } from "react-icons/im";
import ErrorMessages from "../../shared/ErrorMessage/ErrorMessage";
import FormInput from "../../shared/FormInput/FormInput";
import SocialAuth from "../../SocialAuth/SocialAuth";
import Button from "../../shared/Button/Button";
import {
  CONFIRM_PASSWORD_PLACEHOLDER,
  EMAIL_PLACEHOLDER,
  PASSWORD_PLACEHOLDER,
  REGISTER,
  SIGN_UP,
} from "../../../constants/authConstants";

const Register = ({ error, handleSubmit, handleRegister, handleClose }) => {
  return (
    <form className="auth-form" onSubmit={handleSubmit(handleRegister)}>
      <h2 className="auth-form__title">{REGISTER}</h2>
      <ErrorMessages error={error} className="auth-error text-center" />
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
  handleRegister: () => {},
};

Register.propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleClose: PropTypes.func,
  handleRegister: PropTypes.func,
};

export default Register;
