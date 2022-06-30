import { connect } from "react-redux";
import EventSchedulesList from "../../components/EventSchedule/EventScheduleList";
import { getEventSchedules } from "../../actions/eventSchedule/eventSchedule-list-action";
import { ZERO_AMOUNT } from "../../constants/numberConstants";

const mapStateToProps = state => {
  return {
    isDataFetched: state.eventSchedules.isDataFetched,
    isItemsAvaliable: state.eventSchedules.events.length > ZERO_AMOUNT,
    events: state.eventSchedules.events,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEvents: () => dispatch(getEventSchedules()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EventSchedulesList);
