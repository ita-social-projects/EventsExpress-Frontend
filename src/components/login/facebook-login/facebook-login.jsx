import React from "react";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";
import { FaFacebook } from "react-icons/fa";
import "../google-facebook-login.scss";
import BUTTON_NAMES from "../../../constants/buttonConsts";

const LoginFacebook = ({ config, setErrorAlert, loginFacebook }) => {
  const responseFacebook = response => {
    if (!response.email) {
      setErrorAlert("Please add email to your facebook account!");
    }

    loginFacebook(response);
  };

  return (
    <div>
      <FacebookLogin
        appId={config.facebookClientId}
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="btn-facebook"
        icon={<FaFacebook className="btn-facebook__icon" />}
        textButton={
          <span className="btn-facebook__text">
            {BUTTON_NAMES.FACEBOOK_LOGIN}
          </span>
        }
        version="3.1"
      />
    </div>
  );
};

LoginFacebook.defaultProps = {
  config: {},
  facebookClientId: "",
  loginFacebook: () => {},
  setErrorAlert: () => {},
};

LoginFacebook.propTypes = {
  config: PropTypes.object,
  facebookClientId: PropTypes.string,
  loginFacebook: PropTypes.func,
  setErrorAlert: PropTypes.func,
};

export default LoginFacebook;
