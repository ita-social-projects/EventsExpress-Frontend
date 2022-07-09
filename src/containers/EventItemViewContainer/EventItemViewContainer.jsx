import { connect } from "react-redux";
import EventItemView from "../../components/Event/EventItemView/EventItemView";
import { EVENT_STATUS_ENUM } from "../../constants/eventConstants";
import getEvent, {
  join,
  leave,
  resetEvent,
  changeEventStatus,
} from "../../actions/event/event-item-view-action";
import getUnitsOfMeasuring from "../../actions/unitOfMeasuring/unitsOfMeasuring-list-action";
import { getInventoriesByEventId } from "../../actions/inventory/inventory-list-action";
import { getUsersInventoriesByEventId } from "../../actions/users/users-inventories-action";

const mapStateToProps = state => ({
  event: state.event,
  currentUser: state.user,
});

const mapDispatchToProps = dispatch => ({
  getEventProp: id => dispatch(getEvent(id)),
  joinEvent: (userId, eventId) => dispatch(join(userId, eventId)),
  leaveEvent: (userId, eventId) => dispatch(leave(userId, eventId)),
  cancel: (eventId, reason) =>
    dispatch(changeEventStatus(eventId, reason, EVENT_STATUS_ENUM.CANCELED)),
  unCancel: (eventId, reason) =>
    dispatch(changeEventStatus(eventId, reason, EVENT_STATUS_ENUM.ACTIVE)),
  deleteEvent: (eventId, reason) =>
    dispatch(changeEventStatus(eventId, reason, EVENT_STATUS_ENUM.DELETED)),
  getUsersInventoriesByEventId: eventId =>
    dispatch(getUsersInventoriesByEventId(eventId)),
  getInventoriesByEventIdProp: eventId =>
    dispatch(getInventoriesByEventId(eventId)),
  getUnitsOfMeasuringProp: () => dispatch(getUnitsOfMeasuring()),
  reset: () => dispatch(resetEvent()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventItemView);
