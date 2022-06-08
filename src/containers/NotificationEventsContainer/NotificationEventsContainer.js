import { connect } from "react-redux";
import eventsForNotification from "../../actions/events/events-for-notification-action";
import NotificationEvents from "../../components/NotiicationEvents/NotificationEvents";

const mapStateToProps = state => {
  return {
    events: state.events,
    currentUser: state.user,
    notification: state.notification,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEvents: (eventIds, page) =>
      dispatch(eventsForNotification(eventIds, page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationEvents);
