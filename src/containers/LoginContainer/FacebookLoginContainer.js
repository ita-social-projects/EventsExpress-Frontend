import { connect } from "react-redux";
import { loginFacebook } from "../../actions/login/loginAction";
import { setErrorAlert } from "../../actions/alert/alertAction";
import LoginFacebook from "../../components/Login/FacebookLogin/FacebookLogin";

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
