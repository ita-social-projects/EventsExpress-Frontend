import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoginContainer from "../../containers/LoginContainer/LoginContainer";
import RegisterContainer from "../../containers/RegisterContainer/RegisterContainer";
import AuthSwitcher from "./AuthSwitcher";
import { TogleOpenWind } from "../../actions/modalWind-action";
import "./AuthModal.scss";

const AuthModal = ({ setIsOpen, isOpen }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleModeSwitch = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div
      onClose={handleClose}
      className={`auth-modal ${isOpen ? "" : "closed"}`}
    >
      {isLogin && <LoginContainer handleClose={handleClose} />}
      {!isLogin && <RegisterContainer handleClose={handleClose} />}
      <AuthSwitcher isLogin={isLogin} handleModeSwitch={handleModeSwitch} />
    </div>
  );
};

AuthModal.defaultProps = {
  setIsOpen: () => {},
  isOpen: false,
};

AuthModal.propTypes = {
  setIsOpen: PropTypes.func,
  isOpen: PropTypes.bool,
};

const mapStateToProps = state => ({
  isOpen: state.modal.isOpen,
});

const mapDispatchToProps = dispatch => ({
  setIsOpen: data => dispatch(TogleOpenWind(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal);
