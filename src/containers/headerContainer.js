import { connect } from "react-redux";
import Header from "../components/Header/header";
import logout from "../actions/login/logout-action";
import addEvent from "../actions/event/event-add-action";

const mapStateToProps = state => {
  const { user } = state;

  return {
    user,
    hub: state.hubConnections.chatHub,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logout());
    },
    add_event: () => dispatch(addEvent()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
