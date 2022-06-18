import React, { useState } from "react";
import PropTypes from "prop-types";
import { ImCross } from "react-icons/im";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import GoogleLogin from "../../containers/LoginContainer/GoogleLogin";
import FacebookLogin from "../../containers/LoginContainer/FacebookLoginContainer";
import ErrorMessages from "../shared/ErrorMessage/ErrorMessage";
import { validate } from "../helpers/validateHelper";
import "./Login.scss";
import FormInput from "../shared/FormInput/FormInput";
import RecoverPassword from "../RecoverPassword/RecoverPassword";

// error
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
    <form className="login-form" onSubmit={handleSubmit} autoComplete="off">
      <h2 className="login-form__title">Login</h2>
      {error && (
        <ErrorMessages error={error} className="login-error text-center" />
      )}
      <button className="close-btn" onClick={handleLoginClose} type="button">
        <ImCross />
      </button>
      <Field
        name="email"
        className="auth-input"
        placeholder="Enter Email"
        component={FormInput}
      />
      <Field
        name="password"
        className="auth-input"
        type="password"
        placeholder="Enter Password"
        component={FormInput}
      />
      <button className="auth-btn" type="submit">
        Sign Up
      </button>
      <button
        onClick={handleRecoverClick}
        className="recover-password-btn"
        type="button"
      >
        Forgot Password?
      </button>
      {isRecoverPassword && (
        <RecoverPassword
          handleRecoverClose={() => setIsRecoverPassword(false)}
        />
      )}
      <div className="social-auth">
        <span className="social-auth__title">Or sign in with:</span>
        <FacebookLogin />
        <GoogleLogin />
      </div>
    </form>
  );
};

Login.defaultProps = {
  // pristine: false,
  // reset: () => {},
  // submitting: false,
  error: [],
  handleSubmit: () => {},
  handleClose: () => {},
};

Login.propTypes = {
  // pristine: PropTypes.bool,
  // reset: PropTypes.func,
  // submitting: PropTypes.bool,
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
