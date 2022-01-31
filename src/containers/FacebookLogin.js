import React from "react";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";
import { connect } from "react-redux";
import { loginFacebook } from "../actions/login/login-action";
import "./css/Auth.css";

const LoginFacebook = ({ config }, props) => {
  const responseFacebook = response => {
    //! TODO: LOGIN ISN'T USED ANYWHERE
    // if (typeof response.email === "undefined") {
    //   props.login.loginError = "Please add email to your facebook account!";
    // }
    props.loginFacebook(response);
  };

  return (
    <div>
      <FacebookLogin
        appId={config.facebookClientId}
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="btnFacebook"
        icon={<i className="fab fa-facebook fa-lg" />}
        textButton="&nbsp;&nbsp;Log in"
        version="3.1"
      />
    </div>
  );
};

LoginFacebook.defaultProps = {
  config: {},
  // login: {},
  facebookClientId: "",
  loginFacebook: () => {},
};

LoginFacebook.propTypes = {
  config: PropTypes.object,
  // login: PropTypes.object,
  facebookClientId: PropTypes.string,
  loginFacebook: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    login: state.login,
    config: state.config,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginFacebook: profile => dispatch(loginFacebook(profile)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFacebook);
