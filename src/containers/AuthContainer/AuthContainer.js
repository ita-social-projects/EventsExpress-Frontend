import { connect } from "react-redux";
import { loginAfterEmailConfirmation } from "../../actions/login/login-action";
import Authentication from "../../components/Authentication/Authentication";

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  auth: data => dispatch(loginAfterEmailConfirmation(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
