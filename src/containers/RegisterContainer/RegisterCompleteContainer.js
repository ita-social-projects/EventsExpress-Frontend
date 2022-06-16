import { reduxForm, getFormValues } from "redux-form";
import { connect } from "react-redux";
import { isValidPhoneNumber } from "react-phone-number-input";
import fieldIsRequired from "../../components/helpers/validators/required-fields-validator";
import isValidEmail from "../../components/helpers/validators/email-address-validator";
import RegisterComplete from "../../components/Register/RegisterComplete";

// TODO Take out validation logic
const validate = values => {
  const errors = {};
  const requiredFields = ["birthday", "userName", "email", "phone", "gender"];

  if (values.userName && values.userName.length < 3)
    errors.userName = "User name too short";
  else if (values.userName && values.userName.length > 50)
    errors.userName = "User name too long";

  if (values.phone && !isValidPhoneNumber(values.phone)) {
    errors.phone = "Invalid phone number";
  }
  if (values.gender && values.gender > 3) {
    errors.gender = "Invalid gender";
  }

  return {
    ...errors,
    ...fieldIsRequired(values, requiredFields),
    ...isValidEmail(values.email),
  };
};

const mapStateToProps = state => {
  const profile =
    "profile" in state.routing.location.state
      ? state.routing.location.state.profile
      : null;
  if (profile)
    return {
      initialValues: {
        email: "email" in profile ? profile.email : null,
        userName: "name" in profile ? profile.name : null,
        birthday: "birthday" in profile ? profile.birthday : null,
        gender: "gender" in profile ? profile.gender : null,
      },
      form_values: getFormValues("register-complete-form")(state),
    };
  return null;
};

export default connect(mapStateToProps)(
  reduxForm({
    form: "register-complete-form",
    validate,
    enableReinitialize: true,
  })(RegisterComplete),
);
