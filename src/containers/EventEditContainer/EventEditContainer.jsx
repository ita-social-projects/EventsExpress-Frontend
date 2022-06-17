import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import SpinnerContainer from "../SpinnerContainer/SpinnerContainer";
import EventDraftContainer from "../EventDraftContainer/EventDraftContainer";
import EditEventContainer from "./EditEventContainer";
import { EVENT_STATUS_ENUM } from "../../constants/eventConstants";
import getСategoriesList from "../../actions/category/categoryListAction";
import getEvent, {
  resetEvent,
  approveUser,
} from "../../actions/event/eventItemViewAction";

// TODO Refactor class component
class EventEditContainer extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.getEvent(id);
    this.props.getСategoriesList();
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
      <SpinnerContainer showContent={data !== undefined}>
        {data.eventStatus === EVENT_STATUS_ENUM.ACTIVE ? (
          <EditEventContainer />
        ) : (
          <EventDraftContainer />
        )}
      </SpinnerContainer>
    );
  }
}

const mapStateToProps = state => ({
  event: state.event,
  current_user: state.user,
});

const mapDispatchToProps = dispatch => ({
  getEvent: id => dispatch(getEvent(id)),
  approveUser: (userId, eventId, buttonAction) =>
    dispatch(approveUser(userId, eventId, buttonAction)),
  getСategoriesList: () => dispatch(getСategoriesList()),
  reset: () => dispatch(resetEvent()),
});

EventEditContainer.propTypes = {
  match: PropTypes.object,
  event: PropTypes.object,
  getСategoriesList: PropTypes.func,
  cancel: PropTypes.func,
  reset: PropTypes.func,
  getEvent: PropTypes.func,
  approveUser: PropTypes.func,
};
EventEditContainer.defaultProps = {
  match: {},
  event: {},
  getСategoriesList: () => {},
  cancel: () => {},
  reset: () => {},
  getEvent: () => {},
  approveUser: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(EventEditContainer);
