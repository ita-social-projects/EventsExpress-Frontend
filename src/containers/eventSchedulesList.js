import { connect } from "react-redux";
import EventSchedulesList from "../components/EventSchedules/EventScheduleList";
import { getEventSchedules } from "../actions/eventSchedule/eventSchedule-list-action";

const mapStateToProps = state => {
  return {
    loaded: state.eventSchedules.data !== undefined,
    dataList: state.eventSchedules.data.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEvents: () => dispatch(getEventSchedules()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventSchedulesList);
