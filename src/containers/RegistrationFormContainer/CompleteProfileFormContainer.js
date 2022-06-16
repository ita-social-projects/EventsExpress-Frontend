import { reduxForm, getFormValues } from "redux-form";
import CompleteProfileForm from "../../components/RegistrationForm/CompleteProfileForm";

const mapStateToProps = state => {
  return {
    formValues: getFormValues("registrationForm")(state),
  };
};

export default reduxForm(mapStateToProps, {
  form: "registrationForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(CompleteProfileForm);
