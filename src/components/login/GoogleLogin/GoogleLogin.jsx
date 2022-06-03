﻿import React from "react";
import { GoogleLogin as Login } from "react-google-login";
import PropTypes from "prop-types";
import { FcGoogle } from "react-icons/fc";
import BUTTON_NAMES from "../../../constants/buttonConsts";
import "../GoogleFacebookLogin.scss";

const GoogleLogin = ({
  googleClientId,
  googleResponseHandler,
  googleResponseOnFailure,
}) => {
  return (
    <div>
      <Login
        clientId={googleClientId}
        render={renderProps => (
          <button
            type="button"
            className="btn-google"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <FcGoogle className="btn-google__icon" />
            <span className="btn-google__text">
              {BUTTON_NAMES.GOOGLE_LOGIN}
            </span>
          </button>
        )}
        onSuccess={googleResponseHandler}
        onFailure={googleResponseOnFailure}
        version="3.2"
      />
    </div>
  );
};

GoogleLogin.propTypes = {
  googleClientId: PropTypes.string,
  googleResponseHandler: PropTypes.func,
  googleResponseOnFailure: PropTypes.func,
};

GoogleLogin.defaultProps = {
  googleClientId: "",
  googleResponseHandler: () => {},
  googleResponseOnFailure: () => {},
};

export default GoogleLogin;
