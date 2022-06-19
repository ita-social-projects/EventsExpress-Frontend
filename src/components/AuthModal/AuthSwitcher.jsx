import React from "react";
import PropTypes from "prop-types";

const AuthSwitcher = ({ isLogin, handleModeSwitch }) => {
  return (
    <>
      {isLogin && (
        <h4 className="modal-switcher">
          You haven’t got an account?
          <button
            type="button"
            onClick={handleModeSwitch}
            className="switcher-btn"
          >
            Register
          </button>{" "}
        </h4>
      )}
      {!isLogin && (
        <h4 className="modal-switcher">
          Have an account?{" "}
          <button
            type="button"
            onClick={handleModeSwitch}
            className="switcher-btn"
          >
            Login
          </button>
        </h4>
      )}
    </>
  );
};

AuthSwitcher.propTypes = {
  isLogin: PropTypes.bool,
  handleModeSwitch: PropTypes.func,
};

AuthSwitcher.defaultProps = {
  isLogin: true,
  handleModeSwitch: () => {},
};

export default AuthSwitcher;
