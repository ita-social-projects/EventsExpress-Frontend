import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import Login from "../../components/AuthModal/Login/Login";
import login from "../../actions/login/login-action";
import { validate } from "../../components/helpers/validateHelper";

const LoginContainer = ({ loginDispatch, handleClose }) => {
  const handleLogin = ({ email, password }) => {
    loginDispatch(email, password);
    handleClose();
  };
  return <Login onSubmit={handleLogin} handleClose={handleClose} />;
};

const mapStateToProps = state => {
  return {
    loginStatus: state.login,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginDispatch: (email, password) => dispatch(login(email, password)),
  };
};

LoginContainer.propTypes = {
  loginDispatch: PropTypes.func,
  handleClose: PropTypes.func,
};

LoginContainer.defaultProps = {
  loginDispatch: () => {},
  handleClose: () => {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  reduxForm({
    form: "auth-form",
    validate: validate(["email", "password"]),
  })(Login),
);
