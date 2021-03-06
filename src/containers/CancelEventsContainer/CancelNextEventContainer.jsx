import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";
import EventScheduleModal from "../../components/EventSchedule/EventScheduleModal";
import cancelNextEventSchedule from "../../actions/eventSchedule/eventSchedule-cancel-next-action";
import { CANCEL_EVENTS } from "../../constants/eventConstants";

// TODO Refactor class component
class CancelNextEventContainer extends Component {
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
    this.props.cancelNextEventScheduleDispatch(this.props.eventId);
  };

  render() {
    return (
      <>
        <Dropdown.Item onClick={this.handleClick}>
          {CANCEL_EVENTS.CANCEL_ONE}
        </Dropdown.Item>
        <EventScheduleModal
          cancelHandler={this.cancelHandler}
          message="Are you sure you want to cancel the next event?"
          show={this.state.show}
          submitHandler={this.submitHandler}
        />
      </>
    );
  }
}

CancelNextEventContainer.defaultProps = {
  cancelNextEventScheduleDispatch: () => {},
  eventId: null,
};

CancelNextEventContainer.propTypes = {
  cancelNextEventScheduleDispatch: PropTypes.func,
  eventId: PropTypes.number,
};

const mapStateToProps = state => ({
  cancelNextEventScheduleStatus: state.cancel_next_eventSchedule,
  eventId: state.event.data.id,
});

const mapDispatchToProps = dispatch => {
  return {
    cancelNextEventScheduleDispatch: data =>
      dispatch(cancelNextEventSchedule(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CancelNextEventContainer);
