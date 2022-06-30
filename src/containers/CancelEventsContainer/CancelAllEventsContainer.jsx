import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";
import EventScheduleModal from "../../components/EventSchedule/EventScheduleModal";
import cancelAllEventSchedules from "../../actions/eventSchedule/eventSchedule-cancel-all-action";
import { CANCEL_EVENTS } from "../../constants/eventConstants";

// TODO Refactor class component
class CancelAllEventsContainer extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  cancelHandler = () => {
    this.setState({
      show: false,
    });
  };

  handleClick = () => {
    this.setState({
      show: true,
    });
  };

  submitHandler = () => {
    this.setState({
      show: false,
    });
    this.props.cancelAllEventSchedulesDispatch(this.props.eventId);
  };

  render() {
    return (
      <>
        <Dropdown.Item onClick={this.handleClick}>
          {CANCEL_EVENTS.CANCEL}
        </Dropdown.Item>
        <EventScheduleModal
          cancelHandler={this.cancelHandler}
          message="Are you sure you want to cancel all events?"
          show={this.state.show}
          submitHandler={this.submitHandler}
        />
      </>
    );
  }
}

CancelAllEventsContainer.defaultProps = {
  cancelAllEventSchedulesDispatch: () => {},
  eventId: null,
};

CancelAllEventsContainer.propTypes = {
  cancelAllEventSchedulesDispatch: PropTypes.func,
  eventId: PropTypes.number,
};

const mapStateToProps = state => ({
  cancelAllEventScheduleStatus: state.cancel_all_eventSchedules,
  eventId: state.event.data.id,
});

const mapDispatchToProps = dispatch => {
  return {
    cancelAllEventSchedulesDispatch: data =>
      dispatch(cancelAllEventSchedules(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CancelAllEventsContainer);
