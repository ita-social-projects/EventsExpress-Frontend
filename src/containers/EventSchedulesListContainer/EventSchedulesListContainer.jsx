import { connect } from "react-redux";
import EventSchedulesList from "../../components/EventSchedule/EventScheduleList";
import { getEventSchedules } from "../../actions/eventSchedule/eventSchedule-list-action";

const mapStateToProps = state => {
  return {
    isDataFetched: state.eventSchedules.isDataFetched,
    isItemsAvaliable: state.eventSchedules.events.length > 0,
    events: state.eventSchedules.events,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEvents: () => dispatch(getEventSchedules()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EventSchedulesList);
