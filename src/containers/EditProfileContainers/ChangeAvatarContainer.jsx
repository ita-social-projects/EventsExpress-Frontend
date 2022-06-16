import { connect } from "react-redux";
import ChangeAvatar from "../../components/Profile/EditProfile/ChangeAvatar";
import changeAvatar from "../../actions/redactProfile/avatar-change-action";

const mapStateToProps = state => ({
  userId: state.user.id,
});

const mapDispatchToProps = dispatch => {
  return {
    changeAvatar: data => dispatch(changeAvatar(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeAvatar);
