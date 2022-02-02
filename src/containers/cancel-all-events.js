import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";
import EventScheduleModal from "../components/eventSchedule/eventSchedule-modal";
import cancelAllEventSchedules from "../actions/eventSchedule/eventSchedule-cancel-all-action";

class CancelAllEventsWrapper extends Component {
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
        <Dropdown.Item onClick={this.handleClick}>Cancel</Dropdown.Item>
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

CancelAllEventsWrapper.defaultProps = {
  cancelAllEventSchedulesDispatch: () => {},
  eventId: null,
};

CancelAllEventsWrapper.propTypes = {
  cancelAllEventSchedulesDispatch: PropTypes.func,
  eventId: PropTypes.number,
};

const mapStateToProps = state => ({
  cancel_all_eventSchedule_status: state.cancel_all_eventSchedules,
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
)(CancelAllEventsWrapper);
