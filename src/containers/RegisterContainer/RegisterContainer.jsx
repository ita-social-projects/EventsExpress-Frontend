import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Register from "../../components/AuthModal/Register/Register";
import register from "../../actions/register/register-action";

const RegisterContainer = ({
  registerDispatch,
  registerError,
  isRegisterSuccess,
  handleClose,
}) => {
  useEffect(() => {
    if (!registerError && isRegisterSuccess) {
      handleClose();
    }
  }, [isRegisterSuccess]);

  const handleRegisterSubmit = (email, password) => {
    registerDispatch(email, password);
    handleClose();
  };
  return <Register onSubmit={handleRegisterSubmit} handleClose={handleClose} />;
};

RegisterContainer.propTypes = {
  registerError: PropTypes.bool,
  isRegisterSuccess: PropTypes.bool,
  handleClose: PropTypes.func,
  registerDispatch: PropTypes.func,
};

RegisterContainer.defaultProps = {
  registerError: false,
  isRegisterSuccess: false,
  handleClose: () => {},
  registerDispatch: () => {},
};

const mapDispatchToProps = dispatch => {
  return {
    registerDispatch: (email, password) => dispatch(register(email, password)),
  };
};

export default connect(null, mapDispatchToProps)(RegisterContainer);
