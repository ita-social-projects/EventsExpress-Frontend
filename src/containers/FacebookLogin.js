import { connect } from "react-redux";
import { loginFacebook } from "../actions/login/login-action";
import { setErrorAlert } from "../actions/alert-action";
import LoginFacebook from "../components/login/facebook-login/facebook-login";

const mapStateToProps = state => {
  return {
    login: state.login,
    config: state.config,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginFacebook: profile => dispatch(loginFacebook(profile)),
    setErrorAlert: msg => dispatch(setErrorAlert(msg)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFacebook);
