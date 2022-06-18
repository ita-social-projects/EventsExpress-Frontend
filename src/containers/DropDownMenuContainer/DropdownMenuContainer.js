import { connect } from "react-redux";
import DropdownMenu from "../../components/Header/DropdownMenu/DropDownMenu";
import logout from "../../actions/login/logoutAction";
import addEvent from "../../actions/event/eventAddAction";

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

export default connect(mapStateToProps, mapDispatchToProps)(DropdownMenu);
