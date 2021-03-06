import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import getCategoryGroups from "../../actions/categoryGroup/category-group-list-action";
import getCategories from "../../actions/category/category-list-action";
import ChooseActivities from "../../components/RegistrationForm/ChooseActivities";

const mapStateToProps = state => ({
  categoryGroups: state.categoryGroups.data,
  categories: state.categories.data,
});

const mapDispatchToProps = dispatch => {
  return {
    getCategoryGroups: () => dispatch(getCategoryGroups()),
    getCategories: () => dispatch(getCategories()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  reduxForm({
    form: "registrationForm",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
  })(ChooseActivities),
);
