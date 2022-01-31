import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import EventSchedulesList from "../components/eventSchedule/eventSchedule-list";
import SpinnerWrapper from "./spinner";
import { getEventSchedules } from "../actions/eventSchedule/eventSchedule-list-action";

class EventSchedulesListWrapper extends Component {
  constructor(props) {
    super(props);
    this.props.getEventSchedules();
  }

  render() {
    const currentUser =
      this.props.current_user.id !== null ? this.props.current_user : {};
    const { data } = this.props.eventSchedules;

    return (
      <SpinnerWrapper showContent={data !== undefined}>
        <EventSchedulesList current_user={currentUser} data_list={data.items} />
      </SpinnerWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    eventSchedules: state.eventSchedules,
    current_user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEventSchedules: () => dispatch(getEventSchedules()),
  };
};

EventSchedulesListWrapper.propTypes = {
  getEventSchedules: PropTypes.func,
  current_user: PropTypes.object,
  eventSchedules: PropTypes.object,
};

EventSchedulesListWrapper.defaultProps = {
  getEventSchedules: () => {},
  current_user: {},
  eventSchedules: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventSchedulesListWrapper);
