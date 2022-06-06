import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import EventSchedulesList from "../components/EventSchedules/EventScheduleList";
import SpinnerWrapper from "./spinner";
import { getEventSchedules } from "../actions/eventSchedule/eventSchedule-list-action";

const EventSchedulesListWrapper = ({
  getEvents,
  eventSchedules,
  currentUser,
}) => {
  const { data } = eventSchedules;
  const user = currentUser.id !== null ? currentUser : {};

  useEffect(() => {
    getEvents();
  }, []);
  return (
    <SpinnerWrapper showContent={data !== undefined}>
      <EventSchedulesList currentUser={user} dataList={data.items} />
    </SpinnerWrapper>
  );
};

const mapStateToProps = state => {
  return {
    eventSchedules: state.eventSchedules,
    currentUser: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEvents: () => dispatch(getEventSchedules()),
  };
};

EventSchedulesListWrapper.propTypes = {
  getEvents: PropTypes.func,
  eventSchedules: PropTypes.object,
  currentUser: PropTypes.object,
};

EventSchedulesListWrapper.defaultProps = {
  getEvents: () => {},
  eventSchedules: {},
  currentUser: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventSchedulesListWrapper);
