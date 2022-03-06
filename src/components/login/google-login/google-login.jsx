import React from "react";
import { GoogleLogin as Login } from "react-google-login";
import PropTypes from "prop-types";
import "../google-facebook-login.scss";
import { FcGoogle } from "react-icons/fc";
import ButtonNames from "../../../constants/ButtonNamesConstants";

const { GOOGLE_LOGIN } = ButtonNames;

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
            <FcGoogle className="icon" />
            <span className="text">{GOOGLE_LOGIN}</span>
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
