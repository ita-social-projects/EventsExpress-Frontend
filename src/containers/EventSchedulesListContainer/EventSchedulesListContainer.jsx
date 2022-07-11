import { connect } from "react-redux";
import EventSchedulesList from "../../components/EventSchedule/EventScheduleList";
import { getEventSchedules } from "../../actions/eventSchedule/eventSchedule-list-action";
import { EMPTY_EVENT_SCHEDULE } from "../../constants/eventConstants";

const mapStateToProps = state => {
  return {
    isDataFetched: state.eventSchedules.isDataFetched,
    isItemsAvaliable: state.eventSchedules.events.length > EMPTY_EVENT_SCHEDULE,
    events: state.eventSchedules.events,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEvents: () => dispatch(getEventSchedules()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EventSchedulesList);
