import React, { useEffect } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import EventItemView from "../../components/Event/EventItemView/EventItemView";
import { EVENT_STATUS_ENUM } from "../../constants/eventConstants";
import SpinnerContainer from "../SpinnerContainer/SpinnerContainer";
import getEvent, {
  join,
  leave,
  resetEvent,
  changeEventStatus,
} from "../../actions/event/event-item-view-action";
import getUnitsOfMeasuring from "../../actions/unitOfMeasuring/unitsOfMeasuring-list-action";
import { getInventoriesByEventId } from "../../actions/inventory/inventory-list-action";
import { getUsersInventoriesByEventId } from "../../actions/users/users-inventories-action";

const EventItemViewContainer = props => {
  const {
    match,
    event,
    unCancel,
    reset,
    currentUser,
    joinEvent,
    getEventProp,
    getUnitsOfMeasuringProp,
    leaveEvent,
    getInventoriesByEventIdProp,
    getUsersInventoriesByEventIdProp,
    deleteEvent,
  } = props;

  const { data } = event;

  useEffect(() => {
    const { id } = match.params;
    getEventProp(id);
    getUnitsOfMeasuringProp();
    getInventoriesByEventIdProp(id);
    getUsersInventoriesByEventIdProp(id);
    // eslint-disable-next-line prettier/prettier
  },[])  

  useEffect(() => {
    reset();
    // eslint-disable-next-line prettier/prettier
  },[])

  const onJoin = () => {
    joinEvent(currentUser.id, event.data.id);
  };

  const onLeave = () => {
    leaveEvent(currentUser.id, event.data.id);
  };

  const onCancel = (reason, eventStatus) => {
    unCancel(event.data.id, reason, eventStatus);
  };

  const onUnCancel = (reason, eventStatus) => {
    unCancel(event.data.id, reason, eventStatus);
  };

  const onDelete = (reason, eventStatus) => {
    deleteEvent(data.id, reason, eventStatus);
  };

  return (
    <SpinnerContainer showContent={data !== undefined}>
      <EventItemView
        event={event}
        match={match}
        onLeave={onLeave}
        onJoin={onJoin}
        onCancel={onCancel}
        onUnCancel={onUnCancel}
        onDelete={onDelete}
        currentUser={currentUser}
      />
    </SpinnerContainer>
  );
};

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

EventItemViewContainer.propTypes = {
  match: PropTypes.object,
  event: PropTypes.object,
  deleteEvent: PropTypes.func,
  unCancel: PropTypes.func,
  joinEvent: PropTypes.func,
  reset: PropTypes.func,
  getEventProp: PropTypes.func,
  getUnitsOfMeasuringProp: PropTypes.func,
  leaveEvent: PropTypes.func,
  currentUser: PropTypes.func,
  getInventoriesByEventIdProp: PropTypes.func,
  getUsersInventoriesByEventIdProp: PropTypes.func,
};

EventItemViewContainer.defaultProps = {
  match: {},
  event: {},
  unCancel: () => {},
  getEventProp: () => {},
  joinEvent: () => {},
  reset: () => {},
  getUnitsOfMeasuringProp: () => {},
  deleteEvent: () => {},
  leaveEvent: () => {},
  currentUser: () => {},
  getInventoriesByEventIdProp: () => {},
  getUsersInventoriesByEventIdProp: () => {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventItemViewContainer);
