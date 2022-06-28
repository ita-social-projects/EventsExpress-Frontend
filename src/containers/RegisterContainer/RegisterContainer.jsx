import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import Register from "../../components/AuthModal/Register/Register";
import register from "../../actions/register/register-action";
import { validate } from "../../components/helpers/validateHelper";

const mapDispatchToProps = dispatch => {
  return {
    handleRegister: ({ email, password }) =>
      dispatch(register(email, password)),
  };
};

const RegisterForm = reduxForm({
  form: "auth-form",
  validate: validate(
    ["password", "email", "RepeatPassword"],
    [
      { field: "password", minLen: 6, maxLen: 15 },
      { field: "RepeatPassword", minLen: 6, maxLen: 15 },
    ],
  ),
})(Register);

export default connect(null, mapDispatchToProps)(RegisterForm);
