import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import RecoverPassword from "../../components/RecoverPassword/RecoverPassword";
import recoverPassword from "../../actions/redactProfile/password-recover-action";
import { validate } from "../../components/helpers/validateHelper";

const mapStateToProps = state => {
  return {
    status: state.recoverPassword,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleRecoverPassword: email => dispatch(recoverPassword(email)),
  };
};

const RecoverPasswordForm = reduxForm({
  form: "recoverPassword",
  validate: validate(["email"]),
})(RecoverPassword);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecoverPasswordForm);
