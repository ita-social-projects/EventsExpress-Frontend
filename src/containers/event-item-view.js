import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import EventItemView from "../components/event/EventItemView/Event-item-view";
import eventStatusEnum from "../constants/eventStatusEnum";
import SpinnerWrapper from "./spinner";
import getEvent, {
  join,
  leave,
  resetEvent,
  changeEventStatus,
} from "../actions/event/event-item-view-action";
import getUnitsOfMeasuring from "../actions/unitOfMeasuring/unitsOfMeasuring-list-action";
import { getInventoriesByEventId } from "../actions/inventory/inventory-list-action";
import { getUsersInventoriesByEventId } from "../actions/users/users-inventories-action";

class EventItemViewWrapper extends Component {
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
    this.props.join(this.props.current_user.id, this.props.event.data.id);
  };

  onLeave = () => {
    this.props.leave(this.props.current_user.id, this.props.event.data.id);
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
      <SpinnerWrapper showContent={data !== undefined}>
        <EventItemView
          event={this.props.event}
          match={this.props.match}
          onLeave={this.onLeave}
          onJoin={this.onJoin}
          onCancel={this.onCancel}
          onUnCancel={this.onUnCancel}
          onDelete={this.onDelete}
          currentUser={this.props.current_user}
        />
      </SpinnerWrapper>
    );
  }
}

const mapStateToProps = state => ({
  event: state.event,
  current_user: state.user,
});

const mapDispatchToProps = dispatch => ({
  getEvent: id => dispatch(getEvent(id)),
  join: (userId, eventId) => dispatch(join(userId, eventId)),
  leave: (userId, eventId) => dispatch(leave(userId, eventId)),
  cancel: (eventId, reason) =>
    dispatch(changeEventStatus(eventId, reason, eventStatusEnum.Canceled)),
  unCancel: (eventId, reason) =>
    dispatch(changeEventStatus(eventId, reason, eventStatusEnum.Active)),
  delete: (eventId, reason) =>
    dispatch(changeEventStatus(eventId, reason, eventStatusEnum.Deleted)),
  getUsersInventoriesByEventId: eventId =>
    dispatch(getUsersInventoriesByEventId(eventId)),
  getInventoriesByEventId: eventId =>
    dispatch(getInventoriesByEventId(eventId)),
  getUnitsOfMeasuring: () => dispatch(getUnitsOfMeasuring()),
  reset: () => dispatch(resetEvent()),
});

EventItemViewWrapper.propTypes = {
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
  current_user: PropTypes.func,
  getInventoriesByEventId: PropTypes.func,
  getUsersInventoriesByEventId: PropTypes.func,
};

EventItemViewWrapper.defaultProps = {
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
  current_user: () => {},
  getInventoriesByEventId: () => {},
  getUsersInventoriesByEventId: () => {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventItemViewWrapper);
