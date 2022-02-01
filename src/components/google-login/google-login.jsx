import React from "react";
import { GoogleLogin as Login } from "react-google-login";
import PropTypes from "prop-types";

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
            className="btnGoogle"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <i className="fab fa-google blue fa-lg" />
            <span>Log in</span>
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
  googleResponseHandler: PropTypes.oneOfType(
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ),
  googleResponseOnFailure: PropTypes.oneOfType(
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ),
};

GoogleLogin.defaultProps = {
  googleClientId: "",
  googleResponseHandler: "",
  googleResponseOnFailure: "",
};

export default GoogleLogin;
