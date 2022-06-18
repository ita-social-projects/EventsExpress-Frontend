import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import EventSchedulesList from "../../components/EventSchedule/EventScheduleList";
import SpinnerContainer from "../SpinnerContainer/SpinnerContainer";
import { getEventSchedules } from "../../actions/eventSchedule/eventScheduleListAction";

// TODO Refactor class component
class EventSchedulesListContainer extends Component {
  constructor(props) {
    super(props);
    this.props.getEventSchedules();
  }

  render() {
    const currentUser =
      this.props.current_user.id !== null ? this.props.current_user : {};
    const { data } = this.props.eventSchedules;
    return (
      <SpinnerContainer showContent={data !== undefined}>
        <EventSchedulesList currentUser={currentUser} dataList={data.items} />
      </SpinnerContainer>
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

EventSchedulesListContainer.propTypes = {
  getEventSchedules: PropTypes.func,
  current_user: PropTypes.object,
  eventSchedules: PropTypes.object,
};

EventSchedulesListContainer.defaultProps = {
  getEventSchedules: () => {},
  current_user: {},
  eventSchedules: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventSchedulesListContainer);
