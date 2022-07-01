import { connect } from "react-redux";
import App from "../../components/app/app";
import AuthUser from "../../actions/login/auth-user-action";
import getConfig from "../../actions/config/get-config-action";

const mapDispatchToProps = dispatch => ({
  authUser: () => dispatch(AuthUser()),
  getConfig: () => dispatch(getConfig()),
});
export default connect(null, mapDispatchToProps)(App);
