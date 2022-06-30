import React from "react";
import GoogleLogin from "../../containers/LoginContainer/GoogleLogin";
import FacebookLogin from "../../containers/LoginContainer/FacebookLoginContainer";
import "./SocialAuth.scss";
import { OR_SIGN_WITH } from "../../constants/authConstants";

const SocialAuth = () => {
  return (
    <div className="social-auth">
      <span className="social-auth__title">{OR_SIGN_WITH}</span>
      <FacebookLogin />
      <GoogleLogin />
    </div>
  );
};

export default SocialAuth;
