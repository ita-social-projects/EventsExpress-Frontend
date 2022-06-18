import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import getRoles from "../../actions/roles/roles";
import UserRoleEdit from "../../components/UserInfo/UserRoleEdit";

const mapStateToProps = state => ({
  roles: state.roles.data,
});

const mapDispatchToProps = dispatch => ({
  getRolesDispatch: () => dispatch(getRoles()),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: "user-role" }),
)(UserRoleEdit);
