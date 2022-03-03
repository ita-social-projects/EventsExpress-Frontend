import { connect } from "react-redux";
import Header from "../components/Header/header";
import logout from "../actions/login/logout-action";
import addEvent from "../actions/event/event-add-action";

const mapStateToProps = ({ user, hubConnections }) => ({
  user,
  hub: hubConnections.chatHub,
});

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(logout());
  },
  addEvent: () => {
    dispatch(addEvent());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
