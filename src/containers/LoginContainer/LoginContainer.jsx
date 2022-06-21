import { connect } from "react-redux";
import React from "react";
import PropTypes from "prop-types";
import Login from "../../components/Login/Login";
import login from "../../actions/login/login-action";

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

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
