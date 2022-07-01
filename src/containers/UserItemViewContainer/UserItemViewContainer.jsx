import { connect } from "react-redux";
import UserProfile from "../../components/Profile/UserProfile";
import getUser, {
  setAttitude,
  resetUser,
} from "../../actions/user/user-item-view-action";
import {
  getFutureEvents,
  getPastEvents,
  getVisitedEvents,
  getEventsTogo,
} from "../../actions/events/events-for-profile-action";

const mapStateToProps = state => ({
  profile: state.profile,
  currentUser: state.user.id,
  events: state.eventsForProfile,
  data: state.profile.data,
});

const mapDispatchToProps = dispatch => {
  return {
    getUser: id => dispatch(getUser(id)),
    setAttitude: values => dispatch(setAttitude(values)),
    getPastEvents: (id, page) => dispatch(getPastEvents(id, page)),
    getFutureEvents: (id, page) => dispatch(getFutureEvents(id, page)),
    getVisitedEvents: (id, page) => dispatch(getVisitedEvents(id, page)),
    getEventsTogo: (id, page) => dispatch(getEventsTogo(id, page)),
    resetUser: () => dispatch(resetUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
