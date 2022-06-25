import React, { useState } from "react";
import PropTypes from "prop-types";
import { ImCross } from "react-icons/im";
import { Field } from "redux-form";
import ErrorMessages from "../../shared/ErrorMessage/ErrorMessage";
import FormInput from "../../shared/FormInput/FormInput";
import SocialAuth from "../../SocialAuth/SocialAuth";
import RecoverPasswordContainer from "../../../containers/EditProfileContainers/RecoverPasswordContainer";
import Button from "../../shared/Button/Button";
import {
  EMAIL_PLACEHOLDER,
  FORGOT_PASSWORD,
  LOGIN,
  PASSWORD_PLACEHOLDER,
  SIGN_IN,
} from "../../../constants/authModalConstants";

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
      <form className="auth-form" onSubmit={handleSubmit} autoComplete="off">
        <h2 className="auth-form__title">{LOGIN}</h2>
        {error && (
          <ErrorMessages error={error} className="auth-error text-center" />
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

export default Login;
