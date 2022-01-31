import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import EventScheduleItemView from "../components/eventSchedule/eventSchedule-item-view";
import SpinnerWrapper from "./spinner";
import getEventSchedule, {
  resetEventSchedule,
} from "../actions/eventSchedule/eventSchedule-item-view-action";

class EventScheduleItemViewWrapper extends Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.getEventSchedule(id);
  }

  componentWillUnmount() {
    this.props.reset();
  }

  render() {
    const { data } = this.props.eventSchedule;
    return (
      <SpinnerWrapper showContent={data !== undefined}>
        <EventScheduleItemView
          eventSchedule={this.props.eventSchedule}
          current_user={this.props.current_user}
        />
      </SpinnerWrapper>
    );
  }
}

const mapStateToProps = state => ({
  eventSchedule: state.eventSchedule,
  current_user: state.user,
});

const mapDispatchToProps = dispatch => ({
  getEventSchedule: id => dispatch(getEventSchedule(id)),
  reset: () => dispatch(resetEventSchedule()),
});

EventScheduleItemViewWrapper.propTypes = {
  match: PropTypes.object,
  reset: PropTypes.func,
  eventSchedule: PropTypes.object,
  getEventSchedule: PropTypes.func,
  current_user: PropTypes.object,
};

EventScheduleItemViewWrapper.defaultProps = {
  match: {},
  reset: () => {},
  eventSchedule: {},
  getEventSchedule: () => {},
  current_user: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventScheduleItemViewWrapper);
