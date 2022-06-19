import React from "react";
import GoogleLogin from "../../containers/LoginContainer/GoogleLogin";
import FacebookLogin from "../../containers/LoginContainer/FacebookLoginContainer";
import "./SocialAuth.scss";

const SocialAuth = () => {
  return (
    <div className="social-auth">
      <span className="social-auth__title">Or sign in with:</span>
      <FacebookLogin />
      <GoogleLogin />
    </div>
  );
};

export default SocialAuth;
