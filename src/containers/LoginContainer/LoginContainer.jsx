import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import Login from "../../components/AuthModal/Login/Login";
import login from "../../actions/login/login-action";
import { validate } from "../../components/helpers/validateHelper";

const mapStateToProps = state => ({
  loginStatus: state.login,
});

const mapDispatchToProps = dispatch => ({
  handleLogin: ({ email, password }) => dispatch(login(email, password)),
});

const LoginForm = reduxForm({
  form: "auth-form",
  validate: validate(["email", "password"]),
})(Login);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
