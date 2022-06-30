import React from "react";
import PropTypes from "prop-types";
import {
  AUTH_SWITCHER_DONT_HAVE_ACCOUNT,
  AUTH_SWITCHER_HAVE_ACCOUNT,
  LOGIN,
  REGISTER,
} from "../../constants/authConstants";
import Button from "../shared/Button/Button";

const AuthSwitcher = ({ isLogin, handleModeSwitch }) =>
  isLogin ? (
    <h4 className="modal-switcher">
      {AUTH_SWITCHER_DONT_HAVE_ACCOUNT}
      <Button
        content={REGISTER}
        onClick={handleModeSwitch}
        className="switcher-btn"
      />
    </h4>
  ) : (
    <h4 className="modal-switcher">
      {AUTH_SWITCHER_HAVE_ACCOUNT}
      <Button
        content={LOGIN}
        onClick={handleModeSwitch}
        className="switcher-btn"
      />
    </h4>
  );

AuthSwitcher.propTypes = {
  isLogin: PropTypes.bool,
  handleModeSwitch: PropTypes.func,
};

AuthSwitcher.defaultProps = {
  isLogin: true,
  handleModeSwitch: () => {},
};

export default AuthSwitcher;
