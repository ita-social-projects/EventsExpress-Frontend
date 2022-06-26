import { reduxForm, getFormValues } from "redux-form";
import { connect } from "react-redux";
import RegisterComplete from "../../components/Register/RegisterComplete";
import { validate } from "../../components/helpers/validateHelper";

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
      formValues: getFormValues("register-complete-form")(state),
    };
  return null;
};

export default connect(mapStateToProps)(
  reduxForm({
    form: "register-complete-form",
    validate: validate(
      ["birthday", "userName", "email", "phone", "gender"],
      [{ field: "username", minLen: 3, maxLen: 50 }],
    ),
    enableReinitialize: true,
  })(RegisterComplete),
);
