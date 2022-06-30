import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";
import EventScheduleModal from "../../components/EventSchedule/EventScheduleModal";
import addСopyEvent from "../../actions/event/event-copy-without-edit-action";
import { CREATE_WITHOUT_EDITING } from "../../constants/eventConstants";

// TODO Refactor class component
class AddFromParentEventContainer extends Component {
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
    this.props.addCopyEventDispatch(this.props.eventId);
  };

  render() {
    return (
      <>
        <Dropdown.Item onClick={this.handleClick}>
          {CREATE_WITHOUT_EDITING}
        </Dropdown.Item>
        <EventScheduleModal
          cancelHandler={this.cancelHandler}
          message="Are you sure you want to create the event without editing?"
          show={this.state.show}
          submitHandler={this.submitHandler}
        />
      </>
    );
  }
}

AddFromParentEventContainer.defaultProps = {
  eventId: null,
  addCopyEventDispatch: () => {},
};

AddFromParentEventContainer.propTypes = {
  eventId: PropTypes.number,
  addCopyEventDispatch: PropTypes.func,
};

const mapStateToProps = state => ({
  addCopyEventStatus: state.add_copy_event,
  eventId: state.event.data.id,
});

const mapDispatchToProps = dispatch => {
  return {
    addCopyEventDispatch: data => dispatch(addСopyEvent(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddFromParentEventContainer);
