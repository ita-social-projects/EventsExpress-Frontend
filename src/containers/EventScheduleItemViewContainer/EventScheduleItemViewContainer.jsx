import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import EventScheduleItemView from "../../components/EventSchedule/EventScheduleItemView";
import SpinnerContainer from "../SpinnerContainer/SpinnerContainer";
import getEventSchedule, {
  resetEventSchedule,
} from "../../actions/eventSchedule/eventSchedule-item-view-action";

// TODO Refactor class component
class EventScheduleItemViewContainer extends Component {
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
      <SpinnerContainer showContent={data !== undefined}>
        <EventScheduleItemView
          eventSchedule={this.props.eventSchedule}
          current_user={this.props.currentUser}
        />
      </SpinnerContainer>
    );
  }
}

const mapStateToProps = state => ({
  eventSchedule: state.eventSchedule,
  currentUser: state.user,
});

const mapDispatchToProps = dispatch => ({
  getEventSchedule: id => dispatch(getEventSchedule(id)),
  reset: () => dispatch(resetEventSchedule()),
});

EventScheduleItemViewContainer.propTypes = {
  match: PropTypes.object,
  reset: PropTypes.func,
  eventSchedule: PropTypes.object,
  getEventSchedule: PropTypes.func,
  currentUser: PropTypes.object,
};

EventScheduleItemViewContainer.defaultProps = {
  match: {},
  reset: () => {},
  eventSchedule: {},
  getEventSchedule: () => {},
  currentUser: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventScheduleItemViewContainer);
