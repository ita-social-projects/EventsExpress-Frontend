import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import SpinnerWrapper from "./spinner";
import EventDraftWrapper from "./event-draft";
import EditEventWrapper from "./edit-event";
import eventStatusEnum from "../constants/eventStatusEnum";
import getCategories from "../actions/category/category-list-action";
import getEvent, {
  resetEvent,
  approveUser,
} from "../actions/event/event-item-view-action";

class EventEditWrapper extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.getEvent(id);
    this.props.getCategories();
  }

  componentWillUnmount() {
    this.props.reset();
  }

  onCancel = reason => {
    this.props.cancel(this.props.event.data.id, reason);
  };

  onApprove = (userId, buttonAction) => {
    this.props.approveUser(userId, this.props.event.data.id, buttonAction);
  };

  render() {
    const { data } = this.props.event;

    return (
      <SpinnerWrapper showContent={data !== undefined}>
        {data.eventStatus === eventStatusEnum.Active ? (
          <EditEventWrapper />
        ) : (
          <EventDraftWrapper />
        )}
      </SpinnerWrapper>
    );
  }
}

const mapStateToProps = state => ({
  event: state.event,
  current_user: state.user,
});

const mapDispatchToProps = dispatch => ({
  get_event: id => dispatch(getEvent(id)),
  approveUser: (userId, eventId, buttonAction) =>
    dispatch(approveUser(userId, eventId, buttonAction)),
  get_Categories: () => dispatch(getCategories()),
  reset: () => dispatch(resetEvent()),
});

EventEditWrapper.propTypes = {
  match: PropTypes.object,
  event: PropTypes.object,
  getCategories: PropTypes.func,
  cancel: PropTypes.func,
  reset: PropTypes.func,
  getEvent: PropTypes.func,
  approveUser: PropTypes.func,
};
EventEditWrapper.defaultProps = {
  match: {},
  event: {},
  getCategories: () => {},
  cancel: () => {},
  reset: () => {},
  getEvent: () => {},
  approveUser: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(EventEditWrapper);
