import { reduxForm, getFormValues } from "redux-form";
import { connect } from "react-redux";
import RegisterBindAccount from "../../components/Register/RegisterBindAccount";
import { validate } from "../../components/helpers/validateHelper";

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
    validate: validate(["password", "email", "type"]),
    enableReinitialize: true,
  })(RegisterBindAccount),
);
