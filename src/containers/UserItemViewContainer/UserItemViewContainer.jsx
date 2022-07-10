import { connect } from "react-redux";
import getUser, {
  setAttitude,
  resetUser,
} from "../../actions/user/user-item-view-action";
import { getEventsByType } from "../../actions/events/events-for-profile-action";
import UserProfile from "../../components/Profile/UserProfile";

const mapStateToProps = state => ({
  currentUserId: state.user.id,
  events: state.eventsForProfile,
  isDataReady: state.profile.data !== null,
  name: state.profile.data?.name,
  email: state.profile.data?.email,
  birthday: state.profile.data?.birthday,
  gender: state.profile.data?.gender,
  categories: state.profile.data?.categories,
  userId: state.profile.data?.userId,
  attitude: state.profile.data?.attitude,
  rating: state.profile.data?.rating,
});

const mapDispatchToProps = dispatch => ({
  getUser: id => dispatch(getUser(id)),
  setAttitude: values => dispatch(setAttitude(values)),
  getEventsByType: (id, page, type) =>
    dispatch(getEventsByType(id, page, type)),
  resetUser: () => dispatch(resetUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
