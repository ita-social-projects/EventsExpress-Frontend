import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import eventsForNotification from "../../actions/events/events-for-notification-action";
import EventList from "../event/EventsForProfile/EventsForProfile";
import SpinnerWrapper from "../../containers/spinner";

class NotificationEvents extends Component {
  componentWillMount = () => {
    this.props.getEvents(this.props.notification.events);
  };

  render() {
    const { currentUser } = this.props;
    const { data } = this.props.events;
    const { items } = this.props.events.data;

    return (
      <SpinnerWrapper showContent={data !== undefined}>
        {items.length === 0 && (
          <p className="text-center h3">You don&#39;t have notifications</p>
        )}
        <EventList
          current_user={currentUser}
          notification_events={this.props.notification.events}
          data_list={items}
          page={data.pageViewModel.pageNumber}
          totalPages={data.pageViewModel.totalPages}
          callback={this.props.getEvents}
        />
      </SpinnerWrapper>
    );
  }
}

NotificationEvents.defaultProps = {
  getEvents: () => {},
  notification: () => {},
  events: {},
  currentUser: {},
};

NotificationEvents.propTypes = {
  getEvents: PropTypes.func,
  notification: PropTypes.func,
  events: PropTypes.object,
  currentUser: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    events: state.events,
    currentUser: state.user,
    notification: state.notification,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEvents: (eventIds, page) =>
      dispatch(eventsForNotification(eventIds, page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationEvents);
