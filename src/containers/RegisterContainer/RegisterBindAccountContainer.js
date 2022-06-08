import { reduxForm, getFormValues } from "redux-form";
import { connect } from "react-redux";
import RegisterBindAccount from "../../components/Register/RegisterBindAccount";
import fieldIsRequired from "../../components/helpers/validators/required-fields-validator";
import isValidEmail from "../../components/helpers/validators/email-address-validator";

const validate = values => {
  const requiredFields = ["password", "email", "type"];

  return {
    ...fieldIsRequired(values, requiredFields),
    ...isValidEmail(values.email),
  };
};

const mapStateToProps = state => {
  const { profile } = state.routing.location.state;
  return {
    initialValues: {
      type: profile.type,
    },
    form_values: getFormValues("register-bind-account-form")(state),
  };
};

export default connect(mapStateToProps)(
  reduxForm({
    form: "register-bind-account-form",
    validate,
    enableReinitialize: true,
  })(RegisterBindAccount),
);
