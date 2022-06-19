import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { ImCross } from "react-icons/im";
import ErrorMessages from "../shared/ErrorMessage/ErrorMessage";
import "./Register.scss";
import { validate } from "../helpers/validateHelper";
import FormInput from "../shared/FormInput/FormInput";
import SocialAuth from "../SocialAuth/SocialAuth";

const Register = ({ error, handleSubmit, handleClose }) => {
  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2 className="register-form__title">Register</h2>
      {error && (
        <ErrorMessages error={error} className="register-error text-center" />
      )}
      <button className="close-btn" onClick={handleClose} type="button">
        <ImCross />
      </button>
      <Field
        className="auth-input"
        name="email"
        component={FormInput}
        placeholder="Enter Email:"
        type="email"
      />

      <Field
        className="auth-input"
        name="password"
        component={FormInput}
        placeholder="Enter Password:"
        type="password"
      />

      <Field
        className="auth-input"
        name="RepeatPassword"
        component={FormInput}
        placeholder="Repeat Password:"
        type="password"
      />

      <button className="auth-btn" type="submit">
        Sign Up
      </button>
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
  form: "register-form",
  validate: validate(
    ["password", "email", "RepeatPassword"],
    [
      { field: "password", minLen: 6, maxLen: 15 },
      { field: "RepeatPassword", minLen: 6, maxLen: 15 },
    ],
  ),
})(Register);
