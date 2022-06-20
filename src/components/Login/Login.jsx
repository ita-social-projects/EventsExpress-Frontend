import React, { useState } from "react";
import PropTypes from "prop-types";
import { ImCross } from "react-icons/im";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import ErrorMessages from "../shared/ErrorMessage/ErrorMessage";
import { validate } from "../helpers/validateHelper";
import "./Login.scss";
import FormInput from "../shared/FormInput/FormInput";
import SocialAuth from "../SocialAuth/SocialAuth";
import RecoverPasswordContainer from "../../containers/EditProfileContainers/RecoverPasswordContainer";
import Button from "../shared/Button/Button";
import {
  EMAIL_PLACEHOLDER,
  FORGOT_PASSWORD,
  LOGIN,
  PASSWORD_PLACEHOLDER,
  SIGN_IN,
} from "../../constants/authModalConstants";

const Login = ({ handleSubmit, handleClose, error }) => {
  const [isRecoverPassword, setIsRecoverPassword] = useState(false);
  const handleRecoverClick = () => {
    setIsRecoverPassword(true);
  };
  const handleLoginClose = () => {
    setIsRecoverPassword(false);
    handleClose();
  };
  return (
    <>
      <form className="login-form" onSubmit={handleSubmit} autoComplete="off">
        <h2 className="login-form__title">{LOGIN}</h2>
        {error && (
          <ErrorMessages error={error} className="login-error text-center" />
        )}
        <Button
          content={<ImCross />}
          className="close-btn"
          onClick={handleLoginClose}
        />
        <Field
          name="email"
          className="auth-input"
          placeholder={EMAIL_PLACEHOLDER}
          component={FormInput}
        />
        <Field
          name="password"
          className="auth-input"
          type="password"
          placeholder={PASSWORD_PLACEHOLDER}
          component={FormInput}
        />
        <Button content={SIGN_IN} type="submit" className="auth-btn" />
        <Button
          content={FORGOT_PASSWORD}
          onClick={handleRecoverClick}
          className="recover-password-btn"
        />
        <SocialAuth />
      </form>
      {isRecoverPassword && (
        <RecoverPasswordContainer
          handleRecoverClose={() => setIsRecoverPassword(false)}
        />
      )}
    </>
  );
};

Login.defaultProps = {
  error: [],
  handleSubmit: () => {},
  handleClose: () => {},
};

Login.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  handleSubmit: PropTypes.func,
  handleClose: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    config: state.config,
  };
};

connect(mapStateToProps, null)(Login);

export default reduxForm({
  form: "login-form",
  validate: validate(["email", "password"]),
})(Login);
