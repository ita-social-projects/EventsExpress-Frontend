import { connect } from "react-redux";
import getUser, {
  setAttitude,
  resetUser,
} from "../../actions/user/user-item-view-action";
import { getEventsByType } from "../../actions/events/events-for-profile-action";
import UserProfileWrapper from "../../components/Profile/UserProfileWrapper";

const mapStateToProps = state => ({
  currentUser: state.user.id,
  events: state.eventsForProfile,
  data: state.profile.data,
});

const mapDispatchToProps = dispatch => ({
  getUser: id => dispatch(getUser(id)),
  setAttitude: values => dispatch(setAttitude(values)),
  getEventsByType: (id, page, type) =>
    dispatch(getEventsByType(id, page, type)),
  resetUser: () => dispatch(resetUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileWrapper);
