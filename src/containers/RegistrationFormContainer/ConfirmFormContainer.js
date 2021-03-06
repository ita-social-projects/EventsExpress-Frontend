import { reduxForm, getFormValues } from "redux-form";
import { connect } from "react-redux";
import ConfirmForm from "../../components/RegistrationForm/ConfirmForm";

const mapStateToProps = state => {
  return {
    formValues: getFormValues("registrationForm")(state),
    categoryGroups: state.categoryGroups.data,
    categories: state.categories.data,
  };
};

export default connect(mapStateToProps)(
  reduxForm({
    form: "registrationForm",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
  })(ConfirmForm),
);
