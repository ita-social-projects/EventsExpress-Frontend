import React, { Component } from "react";
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

// TODO Refactor class component
class EventItemViewContainer extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.getEvent(id);
    this.props.getUnitsOfMeasuring();
    this.props.getInventoriesByEventId(id);
    this.props.getUsersInventoriesByEventId(id);
  }

  componentWillUnmount() {
    this.props.reset();
  }

  onJoin = () => {
    this.props.join(this.props.currentUser.id, this.props.event.data.id);
  };

  onLeave = () => {
    this.props.leave(this.props.currentUser.id, this.props.event.data.id);
  };

  onCancel = (reason, eventStatus) => {
    this.props.cancel(this.props.event.data.id, reason, eventStatus);
  };

  onUnCancel = (reason, eventStatus) => {
    this.props.unCancel(this.props.event.data.id, reason, eventStatus);
  };

  onDelete = (reason, eventStatus) => {
    this.props.delete(this.props.event.data.id, reason, eventStatus);
  };

  render() {
    const { data } = this.props.event;

    return (
      <SpinnerContainer showContent={data !== undefined}>
        <EventItemView
          event={this.props.event}
          match={this.props.match}
          onLeave={this.onLeave}
          onJoin={this.onJoin}
          onCancel={this.onCancel}
          onUnCancel={this.onUnCancel}
          onDelete={this.onDelete}
          currentUser={this.props.currentUser}
        />
      </SpinnerContainer>
    );
  }
}

const mapStateToProps = state => ({
  event: state.event,
  currentUser: state.user,
});

const mapDispatchToProps = dispatch => ({
  getEvent: id => dispatch(getEvent(id)),
  join: (userId, eventId) => dispatch(join(userId, eventId)),
  leave: (userId, eventId) => dispatch(leave(userId, eventId)),
  cancel: (eventId, reason) =>
    dispatch(changeEventStatus(eventId, reason, EVENT_STATUS_ENUM.CANCELED)),
  unCancel: (eventId, reason) =>
    dispatch(changeEventStatus(eventId, reason, EVENT_STATUS_ENUM.ACTIVE)),
  delete: (eventId, reason) =>
    dispatch(changeEventStatus(eventId, reason, EVENT_STATUS_ENUM.DELETED)),
  getUsersInventoriesByEventId: eventId =>
    dispatch(getUsersInventoriesByEventId(eventId)),
  getInventoriesByEventId: eventId =>
    dispatch(getInventoriesByEventId(eventId)),
  getUnitsOfMeasuring: () => dispatch(getUnitsOfMeasuring()),
  reset: () => dispatch(resetEvent()),
});

EventItemViewContainer.propTypes = {
  match: PropTypes.object,
  event: PropTypes.object,
  delete: PropTypes.func,
  cancel: PropTypes.func,
  join: PropTypes.func,
  reset: PropTypes.func,
  getEvent: PropTypes.func,
  getUnitsOfMeasuring: PropTypes.func,
  unCancel: PropTypes.func,
  leave: PropTypes.func,
  currentUser: PropTypes.func,
  getInventoriesByEventId: PropTypes.func,
  getUsersInventoriesByEventId: PropTypes.func,
};

EventItemViewContainer.defaultProps = {
  match: {},
  event: {},
  cancel: () => {},
  getEvent: () => {},
  join: () => {},
  reset: () => {},
  getUnitsOfMeasuring: () => {},
  delete: () => {},
  unCancel: () => {},
  leave: () => {},
  currentUser: () => {},
  getInventoriesByEventId: () => {},
  getUsersInventoriesByEventId: () => {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventItemViewContainer);
